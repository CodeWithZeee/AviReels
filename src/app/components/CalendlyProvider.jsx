"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

// Default Calendly scheduling event URL with corrected WCAG high contrast text color
const CALENDLY_URL = "https://calendly.com/avireelsai/30-day-autopilot?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f3f1eb&text_color=171717&primary_color=000000";

const CalendlyContext = createContext(null);

export function useCalendly() {
  const context = useContext(CalendlyContext);
  if (!context) {
    throw new Error("useCalendly must be used within a CalendlyProvider");
  }
  return context;
}

export default function CalendlyProvider({ children }) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const pathname = usePathname();

  // Helper to trigger the Popup Widget with error fallback
  const openCalendly = useCallback((customUrl) => {
    const url = customUrl || CALENDLY_URL;

    if (typeof window !== "undefined" && window.Calendly) {
      try {
        // Log event for analytics
        trackEvent("calendly_popup_open", { url });

        window.Calendly.initPopupWidget({ url });
      } catch (err) {
        console.error("Failed to initialize Calendly popup widget:", err);
        // Fallback in case initPopupWidget fails
        window.open(url, "_blank");
      }
    } else {
      console.warn("Calendly library not loaded. Falling back to opening URL in new tab.");
      trackEvent("calendly_fallback_redirect", { url });
      window.open(url, "_blank");
    }
  }, []);

  // Gracefully clean up any active overlays on unmount or route change
  const closeActivePopup = useCallback(() => {
    if (typeof document !== "undefined") {
      const overlays = document.querySelectorAll(".calendly-overlay");
      if (overlays.length > 0) {
        overlays.forEach((overlay) => overlay.remove());
        trackEvent("calendly_popup_closed", { reason: "route_change" });
      }
    }
  }, []);

  // Monitor route changes to clean up active popups and prevent overlay leak
  useEffect(() => {
    closeActivePopup();
  }, [pathname, closeActivePopup]);

  // Unified lightweight analytics helper
  const trackEvent = (eventName, params = {}) => {
    const eventPayload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      ...params,
    };

    // 1. GTM / Google Analytics standard
    if (typeof window !== "undefined" && window.dataLayer) {
      try {
        window.dataLayer.push(eventPayload);
      } catch (err) {
        console.error("Error pushing to dataLayer:", err);
      }
    }

    // 2. Direct gtag standard
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      try {
        window.gtag("event", eventName, params);
      } catch (err) {
        console.error("Error calling gtag:", err);
      }
    }

    // 3. Direct Facebook Pixel Standard
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      try {
        window.fbq("trackCustom", eventName, params);
      } catch (err) {
        console.error("Error calling fbq:", err);
      }
    }

    // 4. Console Logger in Development
    if (process.env.NODE_ENV === "development") {
      console.log(`[Calendly Analytics] ${eventName}`, eventPayload);
    }
  };

  // Listen for postMessage events from Calendly iframe
  useEffect(() => {
    const handleCalendlyPostMessage = (e) => {
      // Ensure the message is originating from Calendly
      if (e.origin !== "https://calendly.com") return;

      const eventName = e.data?.event;
      if (!eventName) return;

      // Map Calendly message events to clean system event tags
      switch (eventName) {
        case "calendly.event_type_viewed":
          trackEvent("calendly_viewed");
          break;
        case "calendly.date_and_time_selected":
          trackEvent("calendly_time_selected");
          break;
        case "calendly.event_scheduled":
          trackEvent("calendly_booking_success");
          break;
        default:
          break;
      }
    };

    window.addEventListener("message", handleCalendlyPostMessage);
    return () => {
      window.removeEventListener("message", handleCalendlyPostMessage);
    };
  }, []);

  // Global click interception for explicit trigger attributes
  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Look for the closest element with explicit trigger attribute
      const target = e.target.closest('[data-calendly-trigger="true"]');
      if (target) {
        e.preventDefault();
        e.stopPropagation();

        // Check if the element specified a custom URL in a data attribute
        const customUrl = target.getAttribute("data-calendly-url");
        trackEvent("calendly_cta_clicked", {
          cta_id: target.id || undefined,
          cta_class: target.className || undefined,
          custom_url: customUrl || false,
        });

        openCalendly(customUrl);
      }
    };

    // Use capturing phase to intercept before other click logic can cancel
    document.addEventListener("click", handleGlobalClick, true);
    return () => {
      document.removeEventListener("click", handleGlobalClick, true);
    };
  }, [openCalendly]);

  return (
    <CalendlyContext.Provider value={{ openCalendly, isScriptLoaded, hasError }}>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => setIsScriptLoaded(true)}
        onError={() => {
          setIsScriptLoaded(false);
          setHasError(true);
        }}
      />

      {children}
    </CalendlyContext.Provider>
  );
}
