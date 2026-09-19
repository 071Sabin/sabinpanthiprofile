"use client";
import React from "react";

export default function AchievementsPage() {
  const publications = [
    {
      title: "A Performance Analysis of SHAP and LIME for Interpreting Boosting Models in Phishing URL Detection",
      publisher: "Scientific Reports",
      year: "2026",
      dates: [
        { label: "Received", value: "25 February 2026" },
        { label: "Accepted", value: "10 August 2026" },
        { label: "Published", value: "25 August 2026" }
      ],
      authors: "Sabin Panthi (First Author) | Mukesh Patidar, Khyati Zalawadia, Daxa Vekariya, Vipul Vekariya",
      abstract: "This research investigates the use of Explainable AI techniques for phishing URL detection. Three gradient boosting models (Gradient Boosting Machine, XGBoost, and LightGBM) were trained and evaluated using a publicly available dataset containing 11,054 URL instances and 30 URL-based features. The study uses 10-fold cross-validation and compares two model-interpretability approaches, SHAP and LIME, under the same experimental conditions.",
      metrics: [
        { label: "Dataset", value: "11,054 URLs" },
        { label: "Best Accuracy", value: "97.60% (LightGBM)" },
        { label: "Precision", value: "98.23% (LightGBM)" },
      ],
      skills: ["Python", "Machine Learning", "LightGBM", "XGBoost", "SHAP", "LIME", "Cybersecurity", "Explainable AI"],
      doi: "10.1038/s41598-026-66800-x",
      link: "https://www.nature.com/articles/s41598-026-66800-x",
      iconClass: "bi bi-journal-text text-sky-500",
      logoUrl: "/img/logo/SN_logo_white.svg",
    },
    {
      title: "A Systematic Review of Explainable Machine Learning Approaches in Phishing URL Detection",
      publisher: "IEEE",
      year: "2025",
      dates: [
        { label: "Published", value: "22 July 2026" }
      ],
      authors: "Mukesh Patidar, Sabin Panthi, Khyati Zalawadia",
      abstract: "Phishing remains a critical cybersecurity threat, with machine learning (ML) emerging as the primary paradigm for URL-based detection. This paper presents a systematic review of the field, synthesizing the literature to trace the evolution from foundational classifiers to the current focus on Explainable AI (XAI). The analysis identifies three critical research gaps that hinder practical deployment: methodological consistency, actionability, and adversarial robustness.",
      metrics: [
        { label: "Conference", value: "ICIH 2025" },
        { label: "Location", value: "Indore, India" },
        { label: "Date", value: "Nov 21-22, 2025" },
      ],
      skills: ["Machine Learning", "Explainable AI (XAI)", "Phishing Detection", "Cybersecurity", "Systematic Review"],
      doi: "10.1109/ICIH67754.2025.11608401",
      link: "https://ieeexplore.ieee.org/document/11608401",
      iconClass: "bi bi-cpu text-blue-600",
    }
  ];

  const certifications = [
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      code: "AI-900",
      issuer: "Microsoft",
      link: "/certificates/Microsoft AI-900.pdf",
      icon: "bi bi-microsoft text-blue-500",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      code: "AZ-900",
      issuer: "Microsoft",
      link: "/certificates/Microsoft Az-900.pdf",
      icon: "bi bi-microsoft text-blue-500",
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-stone-950 text-slate-900 dark:text-white min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-20 transition-colors duration-300">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6 text-slate-900 dark:text-white">
          Research & Publications
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-stone-400 max-w-3xl mx-auto leading-relaxed">
          Advancing the fields of machine learning, cybersecurity, and explainable AI through rigorous academic research and industry-standard certifications.
        </p>
      </div>

      {/* Publications Section */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 mb-32">
        {publications.map((pub, idx) => (
          <div key={idx} className="bg-white dark:bg-stone-900 rounded-2xl p-5 sm:p-6 shadow-lg border border-slate-200 dark:border-stone-800 transition-all duration-300 hover:shadow-xl hover:border-slate-300 dark:hover:border-stone-600 relative overflow-hidden group flex flex-col h-full">
            
            {/* Subtle background icon */}
            <div className="absolute -top-10 -right-10 opacity-5 dark:opacity-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12 pointer-events-none">
              <i className={`${pub.iconClass} text-[10rem]`}></i>
            </div>

            <div className="relative z-10 flex-grow flex flex-col">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {pub.logoUrl ? (
                  <img src={pub.logoUrl} alt={pub.publisher} className="h-5 object-contain dark:invert-0 invert opacity-90" />
                ) : (
                  <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-white dark:bg-white dark:text-stone-900 rounded-sm">
                    {pub.publisher}
                  </span>
                )}
                <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider border border-slate-300 dark:border-stone-600 text-slate-600 dark:text-stone-300 rounded-sm">
                  {pub.year}
                </span>
                {pub.authors.includes("First Author") && (
                  <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50 rounded-sm flex items-center gap-1">
                    <i className="bi bi-star-fill"></i> First Author
                  </span>
                )}
              </div>

              <h2 className="text-lg sm:text-xl font-bold leading-snug mb-2 text-slate-900 dark:text-white">
                {pub.title}
              </h2>

              <div className="mb-5 pl-3 pr-4 py-2 bg-slate-50 dark:bg-stone-800/50 border-l-4 border-indigo-500 dark:border-indigo-500 rounded-r-sm">
                <div className="flex items-start gap-1.5 mb-1.5">
                  <i className="bi bi-people text-slate-400 dark:text-stone-500 mt-0.5"></i>
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-stone-300 leading-relaxed">
                    {pub.authors}
                  </p>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 border-t border-slate-200/60 dark:border-stone-800/60 pt-1.5">
                  {pub.dates.map((dateObj, i) => (
                    <div key={i} className="flex gap-1 items-center">
                      <span className="text-[9px] font-bold text-slate-400 dark:text-stone-500 uppercase tracking-widest">{dateObj.label}:</span>
                      <span className="text-[10px] sm:text-[11px] font-medium text-slate-600 dark:text-stone-400">{dateObj.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills (Moved up) */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {pub.skills.map((skill, i) => (
                  <span key={i} className="text-[10px] font-mono tracking-tight bg-slate-100 dark:bg-stone-800 text-slate-600 dark:text-stone-300 px-2 py-0.5 rounded-sm border border-slate-200 dark:border-stone-700">
                    {skill}
                  </span>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-stone-300 leading-relaxed text-justify mb-6 flex-grow">
                {pub.abstract}
              </p>

              {/* Minimal Metrics */}
              <div className="flex flex-wrap gap-x-5 gap-y-3 mb-6">
                {pub.metrics.map((metric, i) => (
                  <div key={i} className="flex flex-col pl-3 pr-4 py-2 bg-slate-50 dark:bg-stone-950/50 border-l-[3px] border-indigo-500/30 dark:border-indigo-500/40 rounded-r-sm">
                    <span className="text-[9px] font-bold text-slate-400 dark:text-stone-500 uppercase tracking-widest mb-0.5">{metric.label}</span>
                    <span className="text-[11px] font-semibold text-slate-700 dark:text-stone-300">{metric.value}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 mt-auto border-t border-slate-100 dark:border-stone-800 pt-6">
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-stone-900 font-medium text-xs hover:bg-slate-800 dark:hover:bg-stone-200 transition-colors rounded-sm"
                >
                  Read Publication <i className="bi bi-box-arrow-up-right"></i>
                </a>
                <span className="text-xs font-mono text-slate-500 dark:text-stone-500 break-all">
                  DOI: {pub.doi}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-slate-900 dark:text-white flex items-center gap-3">
          <i className="bi bi-award text-indigo-500"></i> Professional Certifications
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {certifications.map((cert, idx) => (
            <a 
              key={idx} 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white dark:bg-stone-900 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-stone-800 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-5 dark:hover:border-stone-600 relative overflow-hidden"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500 dark:bg-blue-600"></div>

              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-50 dark:bg-stone-950 rounded-xl border border-slate-100 dark:border-stone-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 z-10 ml-2">
                <i className={`${cert.icon} text-3xl`}></i>
              </div>
              <div className="z-10 flex-grow pr-8">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-sm">
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-stone-500">{cert.code}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
              </div>
              <div className="absolute right-5 text-slate-300 dark:text-stone-700 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all">
                <i className="bi bi-arrow-right text-2xl"></i>
              </div>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
