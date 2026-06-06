"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ChevronRight, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

const SECTIONS = [
  { id: "services", title: "Services", num: "01" },
  { id: "intellectual-property", title: "Intellectual Property", num: "02" },
  { id: "ai-avatar-consent", title: "AI Avatar Consent", num: "03" },
  { id: "payment", title: "Payment", num: "04" },
  { id: "revisions", title: "Revisions & Scope", num: "05" },
  { id: "client-responsibilities", title: "Client Responsibilities", num: "06" },
  { id: "confidentiality", title: "Confidentiality", num: "07" },
  { id: "prohibited-use", title: "Prohibited Use", num: "08" },
  { id: "limitation-of-liability", title: "Limitation of Liability", num: "09" },
  { id: "termination", title: "Termination", num: "10" },
  { id: "governing-law", title: "Governing Law", num: "11" },
  { id: "changes", title: "Changes to Terms", num: "12" },
  { id: "contact", title: "Contact Us", num: "13" }
];

const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const Bullet = () => <span className="text-gray-300 mt-1.5 shrink-0">&bull;</span>;

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-gray-900 selection:text-white min-h-screen relative">
      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gray-900 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-gray-50 border-b border-gray-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-100/80 via-gray-50 to-white pointer-events-none" />
        
        {/* Subtle noise/grid texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 mb-8 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-gray-900" />
              AviReels Legal
            </div>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6 text-gray-900 clash">
              Terms of Service
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
              These terms govern your use of the AviReels website and any services provided by AviReels.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm font-medium text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                Effective Date: 08-05-2026
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                Last Updated: 08-05-2026
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-12 lg:gap-24 items-start">
          
          {/* Sticky TOC (Desktop) */}
          <aside className="hidden md:block sticky top-32">
            <FadeUp>
              <div className="bg-gray-50/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 px-4">
                  Contents
                </h3>
                <nav className="space-y-1 relative">
                  {SECTIONS.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollTo(section.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-between group ${
                        activeSection === section.id 
                          ? "bg-white text-gray-900 shadow-sm border border-gray-200" 
                          : "text-gray-500 hover:text-gray-900 hover:bg-white/50"
                      }`}
                    >
                      <span>{section.title}</span>
                      {activeSection === section.id && (
                        <motion.div layoutId="active-toc-indicator">
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </motion.div>
                      )}
                    </button>
                  ))}
                </nav>
              </div>
            </FadeUp>
          </aside>

          {/* Reading Container */}
          <div className="max-w-3xl pb-32 text-gray-600 text-lg leading-relaxed">
            
            <FadeUp>
              <p className="text-xl leading-relaxed text-gray-600 mb-16">
                These Terms of Service ("Terms") govern your use of the AviReels website at <span className="text-gray-900 font-medium">avi-reels.vercel.app</span> and any services provided by AviReels ("we," "our," or "us"), a company based in Detroit, Michigan, USA.
                <br /><br />
                By accessing our website, booking a strategy call, or engaging our services, you agree to be bound by these Terms. If you do not agree, do not use our website or services.
              </p>
            </FadeUp>

            {/* Section 1 */}
            <div id="services" className="scroll-mt-32 pt-12 mb-16 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  1. Services
                </h2>
                <p className="mb-6">
                  AviReels provides AI-powered video production services including but not limited to AI avatar creation, video ad production, video sales letters, short-form content, and long-form video content. The specific scope, volume, and deliverables of each engagement are agreed upon between AviReels and the client prior to commencement of work.
                </p>
                <p>
                  All engagements begin with a 30-day pilot period. Any continuation beyond the pilot is subject to a separate agreement between both parties.
                </p>
              </FadeUp>
            </div>

            {/* Section 2 */}
            <div id="intellectual-property" className="scroll-mt-32 pt-12 mb-16 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  2. Intellectual Property
                </h2>
                <p className="mb-6">
                  Upon receipt of full payment for a completed engagement, the client receives full ownership of the final video deliverables produced for them.
                </p>
                <p className="mb-6">
                  AviReels retains the right to use anonymized versions of completed work as portfolio examples and for promotional purposes, unless the client explicitly requests otherwise in writing prior to the start of the engagement.
                </p>
                <div className="p-8 bg-gray-50 border border-gray-200 rounded-3xl">
                  <p className="m-0 font-medium text-gray-900 text-lg">
                    All proprietary systems, processes, templates, and production methodologies used by AviReels remain the exclusive intellectual property of AviReels and are not transferred to the client under any circumstances.
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Section 3 */}
            <div id="ai-avatar-consent" className="scroll-mt-32 pt-12 mb-16 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  3. AI Avatar and Likeness Consent
                </h2>
                <p className="mb-6">
                  Where a client's likeness or the likeness of any third party is used in the creation of an AI avatar, the client confirms they have the legal right and consent to use that likeness for the agreed purposes.
                </p>
                <p className="mb-6">
                  The client agrees to indemnify and hold AviReels harmless from any claims arising from the unauthorized use of any person's likeness, image, or identity in connection with the deliverables requested.
                </p>
                <p>
                  AviReels reserves the right to decline any request that, in our reasonable judgment, involves the unauthorized use of another person's likeness or violates applicable laws.
                </p>
              </FadeUp>
            </div>

            {/* Section 4 */}
            <div id="payment" className="scroll-mt-32 pt-12 mb-16 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  4. Payment
                </h2>
                <p className="mb-6">
                  All pricing is custom-scoped per engagement and agreed upon before work begins. No work commences until payment terms have been confirmed between both parties.
                </p>
                <p className="mb-6">
                  Payments are due according to the schedule outlined in the individual engagement agreement. Late or failed payments may result in pausing or terminating the engagement until payment is resolved.
                </p>
                <p>
                  No refunds are issued for completed deliverables that have been approved by the client. Disputes regarding deliverables must be raised within 7 days of delivery.
                </p>
              </FadeUp>
            </div>

            {/* Section 5 */}
            <div id="revisions" className="scroll-mt-32 pt-12 mb-16 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  5. Revisions and Scope
                </h2>
                <p className="mb-6">
                  Revisions included in each engagement are outlined in the individual agreement. Requests that fall outside the agreed scope will be quoted separately before any additional work begins.
                </p>
                <p>
                  AviReels is not responsible for delays caused by the client's failure to provide required materials, approvals, or feedback within a reasonable timeframe.
                </p>
              </FadeUp>
            </div>

            {/* Section 6 */}
            <div id="client-responsibilities" className="scroll-mt-32 pt-12 mb-16 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  6. Client Responsibilities
                </h2>
                <p className="mb-6">By engaging AviReels, the client agrees to:</p>
                <ul className="space-y-4 mb-8 list-none pl-0">
                  <li className="flex gap-4"><Bullet /> Provide accurate, complete, and timely information required to begin and complete the engagement</li>
                  <li className="flex gap-4"><Bullet /> Ensure they hold all necessary rights to any materials, logos, likenesses, or content they provide to AviReels</li>
                  <li className="flex gap-4"><Bullet /> Use the final deliverables only for lawful purposes and in accordance with applicable platform terms and regulations</li>
                  <li className="flex gap-4"><Bullet /> Not reproduce, resell, or sublicense AviReels' proprietary systems, processes, or methodologies</li>
                </ul>
              </FadeUp>
            </div>

            {/* Section 7 */}
            <div id="confidentiality" className="scroll-mt-32 pt-12 mb-16 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  7. Confidentiality
                </h2>
                <p>
                  Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement. AviReels will not disclose client-specific business information, strategies, or content to third parties without explicit written consent.
                </p>
              </FadeUp>
            </div>

            {/* Section 8 */}
            <div id="prohibited-use" className="scroll-mt-32 pt-12 mb-16 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  8. Prohibited Use
                </h2>
                <p className="mb-6">You may not use our website or services to:</p>
                <ul className="space-y-4 mb-8 list-none pl-0">
                  <li className="flex gap-4"><Bullet /> Produce content that is defamatory, fraudulent, or misleading</li>
                  <li className="flex gap-4"><Bullet /> Create deepfakes or AI avatars of individuals without their explicit consent</li>
                  <li className="flex gap-4"><Bullet /> Violate any applicable laws, regulations, or third-party platform terms</li>
                  <li className="flex gap-4"><Bullet /> Infringe upon the intellectual property rights of any third party</li>
                </ul>
                <p>
                  AviReels reserves the right to refuse or terminate any engagement at our discretion if these conditions are violated.
                </p>
              </FadeUp>
            </div>

            {/* Section 9 */}
            <div id="limitation-of-liability" className="scroll-mt-32 pt-12 mb-16 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  9. Limitation of Liability
                </h2>
                <p className="mb-6">
                  AviReels provides services on an "as is" basis. To the maximum extent permitted by law, AviReels is not liable for any indirect, incidental, or consequential damages arising from the use of our services or deliverables.
                </p>
                <p>
                  Our total liability in connection with any engagement shall not exceed the total amount paid by the client for that specific engagement.
                </p>
              </FadeUp>
            </div>

            {/* Section 10 */}
            <div id="termination" className="scroll-mt-32 pt-12 mb-16 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  10. Termination
                </h2>
                <p>
                  Either party may terminate an engagement with written notice. In the event of termination, the client is responsible for payment of all work completed up to the date of termination. AviReels will deliver all completed assets at the time of termination.
                </p>
              </FadeUp>
            </div>

            {/* Section 11 */}
            <div id="governing-law" className="scroll-mt-32 pt-12 mb-16 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  11. Governing Law
                </h2>
                <p>
                  These Terms are governed by and construed in accordance with the laws of the State of Michigan, United States of America. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Michigan.
                </p>
              </FadeUp>
            </div>

            {/* Section 12 */}
            <div id="changes" className="scroll-mt-32 pt-12 mb-16 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  12. Changes to These Terms
                </h2>
                <p>
                  We may update these Terms from time to time. When we do, the "Last Updated" date at the top of this page will be revised. Continued use of our website or services after changes are posted constitutes acceptance of the updated Terms.
                </p>
              </FadeUp>
            </div>

            {/* Section 13 */}
            <div id="contact" className="scroll-mt-32 pt-12 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  13. Contact Us
                </h2>
                <p>For any questions regarding these Terms, contact us at:</p>
                <div className="bg-gray-50 border border-gray-200 p-8 md:p-10 rounded-3xl mt-10 transition-shadow hover:shadow-md duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 m-0 mb-6 tracking-tight">AviReels</h3>
                  <div className="space-y-2 text-lg">
                    <p className="m-0">Detroit, Michigan, USA</p>
                    <p className="m-0">
                      Email: <a href="mailto:avireelsai@gmail.com" className="text-gray-900 font-medium hover:text-gray-500 transition-colors decoration-gray-300 underline-offset-4 hover:underline">avireelsai@gmail.com</a>
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-32 bg-gray-50 border-t border-gray-200 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-200/50 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Ready to start building?
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-xl text-gray-600 mb-12">
              We focus on the compliance and the technicals. You focus on the business. Let's scale your presence.
            </p>
          </FadeUp>
          <FadeUp delay={0.2} className="flex justify-center">
            <Link 
              href="/booking" 
              data-calendly-trigger="true"
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg flex items-center gap-3 hover:bg-gray-800 transition-all duration-300 shadow-xl shadow-gray-900/10 hover:shadow-gray-900/20 hover:-translate-y-0.5 group"
            >
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
