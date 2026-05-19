"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ChevronRight, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

const SECTIONS = [
  { id: "information-we-collect", title: "Information We Collect", num: "01" },
  { id: "how-we-use", title: "How We Use Information", num: "02" },
  { id: "cookies", title: "Cookies & Tracking", num: "03" },
  { id: "third-party", title: "Third-Party Services", num: "04" },
  { id: "retention", title: "Data Retention", num: "05" },
  { id: "your-rights", title: "Your Rights", num: "06" },
  { id: "security", title: "Data Security", num: "07" },
  { id: "childrens-privacy", title: "Children's Privacy", num: "08" },
  { id: "changes", title: "Changes to Policy", num: "09" },
  { id: "contact", title: "Contact Us", num: "10" }
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

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
              We are committed to protecting your privacy. This policy explains how we collect, use, store, and protect your information.
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
                AviReels ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website at <span className="text-gray-900 font-medium">avi-reels.vercel.app</span> and interact with our services.
                <br /><br />
                By using our website or services, you agree to the practices described in this policy.
              </p>
            </FadeUp>

            {/* Section 1 */}
            <div id="information-we-collect" className="scroll-mt-32 pt-12 mb-16 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  1. Information We Collect
                </h2>
                
                <h3 className="text-base font-bold text-gray-900 mt-8 mb-4 uppercase tracking-wide">Information you provide directly:</h3>
                <ul className="space-y-4 mb-10 list-none pl-0">
                  <li className="flex gap-4"><Bullet /> Name and contact details such as email address and phone number, submitted through our booking forms or contact inquiries</li>
                  <li className="flex gap-4"><Bullet /> Business information shared during strategy calls or onboarding</li>
                  <li className="flex gap-4"><Bullet /> Any content, briefs, or materials you provide as part of a service engagement</li>
                </ul>

                <h3 className="text-base font-bold text-gray-900 mt-8 mb-4 uppercase tracking-wide">Information collected automatically:</h3>
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex gap-4"><Bullet /> Device information including browser type, operating system, and device identifiers</li>
                  <li className="flex gap-4"><Bullet /> Usage data such as pages visited, time spent on the site, and referring URLs</li>
                  <li className="flex gap-4"><Bullet /> IP address and general geographic location</li>
                  <li className="flex gap-4"><Bullet /> Cookie and tracking data as described in Section 3</li>
                </ul>
              </FadeUp>
            </div>

            {/* Section 2 */}
            <div id="how-we-use" className="scroll-mt-32 pt-12 mb-16 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  2. How We Use Your Information
                </h2>
                <p className="mb-6">We use the information collected to:</p>
                <ul className="space-y-4 mb-12 list-none pl-0">
                  <li className="flex gap-4"><Bullet /> Respond to inquiries and schedule strategy calls</li>
                  <li className="flex gap-4"><Bullet /> Deliver and manage our video production services</li>
                  <li className="flex gap-4"><Bullet /> Communicate with you about your engagement, including project updates and deliverables</li>
                  <li className="flex gap-4"><Bullet /> Improve our website experience and service quality</li>
                  <li className="flex gap-4"><Bullet /> Send relevant communications about our services, where you have given consent</li>
                  <li className="flex gap-4"><Bullet /> Comply with legal obligations</li>
                </ul>
                <div className="p-8 bg-gray-50 border border-gray-200 rounded-3xl">
                  <p className="m-0 font-medium text-gray-900 text-lg">
                    We do not sell your personal information to third parties. We do not use your information for purposes beyond what is described in this policy without your explicit consent.
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Section 3 */}
            <div id="cookies" className="scroll-mt-32 pt-12 mb-16 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  3. Cookies and Tracking
                </h2>
                <p className="mb-8">Our website uses cookies and similar tracking technologies to enhance your browsing experience and understand how visitors interact with our site.</p>
                
                <h3 className="text-base font-bold text-gray-900 mt-8 mb-4 uppercase tracking-wide">Types of cookies we use:</h3>
                <ul className="space-y-4 mb-8 list-none pl-0">
                  <li className="flex gap-4"><Bullet /> <span><strong className="text-gray-900 font-semibold">Essential cookies:</strong> Required for the website to function properly</span></li>
                  <li className="flex gap-4"><Bullet /> <span><strong className="text-gray-900 font-semibold">Analytics cookies:</strong> Help us understand how visitors use the site so we can improve it</span></li>
                  <li className="flex gap-4"><Bullet /> <span><strong className="text-gray-900 font-semibold">Preference cookies:</strong> Remember settings and choices you have made</span></li>
                </ul>
                <p>You can control or disable cookies through your browser settings. Note that disabling certain cookies may affect the functionality of the site.</p>
              </FadeUp>
            </div>

            {/* Section 4 */}
            <div id="third-party" className="scroll-mt-32 pt-12 mb-16 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  4. Third-Party Services
                </h2>
                <p className="mb-6">We use trusted third-party services to operate our website and deliver our services. These may include:</p>
                <ul className="space-y-4 mb-8 list-none pl-0">
                  <li className="flex gap-4"><Bullet /> <span><strong className="text-gray-900 font-semibold">Calendly</strong> or equivalent scheduling tools for strategy call bookings</span></li>
                  <li className="flex gap-4"><Bullet /> <span><strong className="text-gray-900 font-semibold">Google Analytics</strong> or equivalent for website analytics</span></li>
                  <li className="flex gap-4"><Bullet /> <span><strong className="text-gray-900 font-semibold">Email service providers</strong> for communication purposes</span></li>
                  <li className="flex gap-4"><Bullet /> <span><strong className="text-gray-900 font-semibold">Payment processors</strong> where applicable for billing</span></li>
                </ul>
                <p>These third parties have their own privacy policies governing how they handle your data. We recommend reviewing their policies directly. We only share the minimum information necessary for these services to function.</p>
              </FadeUp>
            </div>

            {/* Section 5 */}
            <div id="retention" className="scroll-mt-32 pt-12 mb-16 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  5. Data Retention
                </h2>
                <p className="mb-6">We retain your personal information for as long as necessary to fulfill the purposes described in this policy, maintain our business relationship with you, or comply with legal obligations.</p>
                <p>When information is no longer needed, it is securely deleted or anonymized.</p>
              </FadeUp>
            </div>

            {/* Section 6 */}
            <div id="your-rights" className="scroll-mt-32 pt-12 mb-16 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  6. Your Rights
                </h2>
                <p className="mb-6">Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul className="space-y-4 mb-8 list-none pl-0">
                  <li className="flex gap-4"><Bullet /> The right to access the information we hold about you</li>
                  <li className="flex gap-4"><Bullet /> The right to correct inaccurate or incomplete information</li>
                  <li className="flex gap-4"><Bullet /> The right to request deletion of your information</li>
                  <li className="flex gap-4"><Bullet /> The right to withdraw consent where processing is based on consent</li>
                  <li className="flex gap-4"><Bullet /> The right to object to certain uses of your information</li>
                </ul>
                <p>To exercise any of these rights, contact us using the details in Section 10. We will respond to all legitimate requests within a reasonable timeframe.</p>
              </FadeUp>
            </div>

            {/* Section 7 */}
            <div id="security" className="scroll-mt-32 pt-12 mb-16 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  7. Data Security
                </h2>
                <p>We take reasonable technical and organizational measures to protect your information against unauthorized access, loss, or misuse. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.</p>
              </FadeUp>
            </div>

            {/* Section 8 */}
            <div id="childrens-privacy" className="scroll-mt-32 pt-12 mb-16 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  8. Children's Privacy
                </h2>
                <p>Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete it promptly.</p>
              </FadeUp>
            </div>

            {/* Section 9 */}
            <div id="changes" className="scroll-mt-32 pt-12 mb-16 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  9. Changes to This Policy
                </h2>
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we do, we will update the "Last Updated" date at the top of this page. We encourage you to review this policy periodically.</p>
              </FadeUp>
            </div>

            {/* Section 10 */}
            <div id="contact" className="scroll-mt-32 pt-12 border-t border-gray-100">
              <FadeUp>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-xl font-normal"></span>
                  10. Contact Us
                </h2>
                <p>If you have any questions, concerns, or requests regarding this Privacy Policy or how your information is handled, please contact us at:</p>
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
