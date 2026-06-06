"use client";

import React from "react";

/**
 * Reusable wrapper to convert any clickable child element into a Calendly trigger.
 * 
 * @example
 * <CalendlyTrigger>
 *   <button className="btn">Book Call</button>
 * </CalendlyTrigger>
 */
export default function CalendlyTrigger({ children, url }) {
  if (!React.isValidElement(children)) {
    if (process.env.NODE_ENV === "development") {
      console.warn("CalendlyTrigger requires a single valid React element child.");
    }
    return <>{children}</>;
  }

  // Clones the child component and attaches the click interception triggers
  return React.cloneElement(children, {
    "data-calendly-trigger": "true",
    ...(url ? { "data-calendly-url": url } : {}),
  });
}
