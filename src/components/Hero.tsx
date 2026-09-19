"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Typing animation logic
    const roles = [
      "Laravel Developer",
      "Backend Specialist",
      "Full-Stack Engineer",
      "Problem Solver",
    ];
    let roleIndex = 0,
      charIndex = 0;
    const typingTarget = document.getElementById("typing-role");
    
    let typingTimeout: NodeJS.Timeout;

    function typeRole() {
      if (!typingTarget) return;
      if (charIndex <= roles[roleIndex].length) {
        typingTarget.textContent = roles[roleIndex].slice(0, charIndex++);
        typingTimeout = setTimeout(typeRole, 80);
      } else {
        typingTimeout = setTimeout(() => {
          charIndex = 0;
          roleIndex = (roleIndex + 1) % roles.length;
          typeRole();
        }, 2000);
      }
    }
    typeRole();

    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-10 transition-colors duration-500 bg-slate-50 dark:bg-stone-950 dark:bg-stone-50">
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 space-y-8">
          
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tighter leading-tight text-slate-900 dark:text-white transition-colors duration-300">
              Building Scalable Web Solutions
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-stone-300">
              <span id="typing-role"></span><span className="animate-pulse text-indigo-500">|</span>
            </p>
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-stone-400 max-w-lg leading-relaxed transition-colors duration-300">
            I specialize in building robust backend systems and scalable web applications using Laravel and modern JavaScript frameworks. Passionate about clean architecture and performant APIs.
          </p>

          {/* CTAs - Minimal & Premium Animations */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
            <Link
              href="/projects"
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white bg-slate-900 dark:bg-white dark:text-slate-900 overflow-hidden rounded-none border border-slate-900 dark:border-white w-full sm:w-auto"
            >
              {/* Water filling up animation from bottom */}
              <div className="absolute inset-0 w-full h-full bg-indigo-600 dark:bg-indigo-500 transform translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0 rounded-none"></div>
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">View Projects</span>
              <i className="bi bi-arrow-right relative z-10 transform group-hover:translate-x-1 transition-all duration-500 group-hover:text-white"></i>
            </Link>
            
            <Link
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white bg-transparent border border-slate-900 dark:border-white overflow-hidden rounded-none w-full sm:w-auto"
            >
              {/* Solid fill from left for variety */}
              <div className="absolute inset-0 w-full h-full bg-slate-900 dark:bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0 dark:bg-stone-900"></div>
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white dark:group-hover:text-stone-900">Contact Me</span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="pt-6 flex items-center gap-6 text-slate-400 dark:text-stone-500 text-lg sm:text-xl">
            <a href="https://www.github.com/071Sabin" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors dark:hover:text-stone-900">
              <i className="bi bi-github" title="GitHub"></i>
            </a>
            <a href="https://www.twitter.com/PanthiSabin" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors">
              <i className="bi bi-twitter" title="Twitter"></i>
            </a>
            <a href="https://www.facebook.com/071.sabin.panthi" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <i className="bi bi-facebook" title="Facebook"></i>
            </a>
            <a href="https://www.instagram.com/sabin_panthi" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
              <i className="bi bi-instagram" title="Instagram"></i>
            </a>
            <a href="mailto:071.sabin.panthi@gmail.com" className="hover:text-slate-900 dark:hover:text-white transition-colors dark:hover:text-stone-900">
              <i className="bi bi-envelope-fill" title="Email"></i>
            </a>
          </div>
        </div>

        {/* Right Column: Visual / Image */}
        <div className="flex justify-center items-center order-1 lg:order-2">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            
            {/* Minimal Decorative Rings */}
            <div className="absolute inset-0 rounded-full border border-slate-200 dark:border-stone-800 dark:border-stone-200"></div>
            <div className="absolute inset-4 rounded-full border border-dashed border-slate-300 dark:border-stone-700 animate-[spin_30s_linear_infinite] dark:border-stone-300"></div>
            
            {/* Main Profile Image */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-white dark:border-stone-800 bg-slate-100 dark:bg-stone-900 z-10 dark:bg-stone-100">
              <Image
                src="/img/im2.png"
                alt="Sabin Panthi"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating Minimal Elements */}
            <div className="absolute top-8 right-2 w-12 h-12 flex items-center justify-center bg-white dark:bg-stone-800 rounded-full border border-slate-200 dark:border-stone-700 shadow-sm z-20 animate-bounce dark:border-stone-200" style={{ animationDuration: '3s' }}>
              <i className="bi bi-code text-xl text-slate-700 dark:text-stone-300"></i>
            </div>
            <div className="absolute bottom-8 left-2 w-12 h-12 flex items-center justify-center bg-white dark:bg-stone-800 rounded-full border border-slate-200 dark:border-stone-700 shadow-sm z-20 animate-bounce dark:border-stone-200" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <i className="bi bi-database text-xl text-slate-700 dark:text-stone-300"></i>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
