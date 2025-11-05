import React from "react";
import { X, Check } from "lucide-react";

export default function AgencyComparison() {
  const otherAgencies = [
    "Monthly reporting only",
    "Extra cost for editing and posting",
    "Generic templates with no emotion",
    "Long term contracts required",
  ];

  const avaReels = [
    "Reporting in 24 hours",
    "Everything included — from script to posting",
    "Emotion-driven realistic AI videos crafted for you",
    "Flexible, cancel-anytime monthly plans",
  ];

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Other Agencies */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-400 mb-6 md:mb-8">
              Other Agencies
            </h2>
            <ul className="space-y-4">
              {otherAgencies.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="shrink-0 w-7 h-7 rounded-full bg-neutral-400 flex items-center justify-center">
                    <X className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-lg text-neutral-400 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* AvaReels */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-6 md:mb-8">
              AvaReels
            </h2>
            <ul className="space-y-4">
              {avaReels.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="shrink-0 w-7 h-7 rounded-full bg-black flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-lg text-neutral-900 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
