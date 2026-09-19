"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  tag: { label: string; colorClass?: string };
  icon?: { class: string; colorClass?: string };
  image?: { src: string; alt: string };
  title: string;
  tech: string;
  year: string;
  features: string[];
  links: {
    live?: { url?: string; onClick?: () => void };
    code?: { url?: string; onClick?: () => void; note?: string };
  };
};

export default function ProjectCard({
  tag,
  icon,
  image,
  title,
  tech,
  year,
  features,
  links,
}: ProjectCardProps) {
  // Convert comma-separated tech string into an array for sleek badges
  const techList = tech.split(",").map((t) => t.trim());

  return (
    <div className="group relative flex flex-col h-full bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 p-5 sm:p-6 transition-all duration-300 hover:border-slate-900 dark:hover:border-white hover:shadow-xl dark:hover:shadow-none overflow-hidden dark:border-stone-200 dark:hover:border-stone-900">
      {/* Sweeping Tech Line Hover */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-900 dark:bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-10 dark:bg-stone-900"></div>
      
      {/* Header section: Icon & Year */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="text-xl sm:text-2xl text-slate-900 dark:text-white">
              <i className={icon.class}></i>
            </div>
          )}
          {image && (
            <div className="w-8 h-8">
              <Image
                src={image.src}
                alt={image.alt}
                width={32}
                height={32}
                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          )}
        </div>
        
        {/* Monospace Year or Tag */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] font-bold tracking-wider text-slate-700 dark:text-stone-300 uppercase">
            {year}
          </span>
          <span className="font-mono text-[10px] font-bold tracking-wider uppercase border border-slate-300 dark:border-stone-600 text-slate-800 dark:text-stone-200 px-2 py-0.5 rounded-[2px]">
            {tag.label}
          </span>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white leading-snug">
        {title}
      </h3>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-2 mb-5">
        {techList.map((t, i) => (
          <span
            key={i}
            className="font-mono text-[10px] font-bold tracking-tight bg-slate-100 dark:bg-stone-800 text-slate-700 dark:text-stone-300 px-2 py-1 rounded-sm"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Features List */}
      <ul className="text-slate-600 dark:text-stone-400 text-xs mb-4 space-y-1 flex-grow list-disc list-inside marker:text-slate-400 dark:marker:text-stone-600">
        {features.map((feature, i) => (
          <li key={i} className="leading-relaxed">
            <span className="-ml-1">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Action Links */}
      <div className="flex flex-wrap gap-4 sm:gap-6 mt-auto pt-3 border-t border-slate-100 dark:border-stone-800 dark:border-stone-100">
        {links.live &&
          (links.live.url ? (
            <Link
              href={links.live.url}
              className="group/link flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              <i className="bi bi-box-arrow-up-right text-xs"></i>
              Live Demo
            </Link>
          ) : (
            <button
              onClick={links.live.onClick}
              className="group/link flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              <i className="bi bi-box-arrow-up-right text-xs"></i>
              Live Demo
            </button>
          ))}

        {links.code &&
          (links.code.url ? (
            <Link
              href={links.code.url}
              target="_blank"
              className="group/link flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              <i className="bi bi-github text-xs"></i>
              Code
              {links.code.note && (
                <span className="text-slate-400 font-normal lowercase tracking-normal italic ml-1 dark:text-stone-400">
                  ({links.code.note})
                </span>
              )}
            </Link>
          ) : (
            <button
              onClick={links.code.onClick}
              className="group/link flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              <i className="bi bi-github text-xs"></i>
              Code
            </button>
          ))}
      </div>
      
      {/* Decorative background element */}
      <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 text-7xl sm:text-9xl text-slate-50 dark:text-stone-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[-1] font-mono font-black">
        {title.substring(0, 1)}
      </div>
    </div>
  );
}
