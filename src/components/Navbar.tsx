"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed z-50 transition-all duration-300 ${
        isScrolled 
          ? "top-4 left-4 right-4 max-w-5xl mx-auto rounded-full bg-white/70 dark:bg-stone-900/80 backdrop-blur-xl border border-slate-200 dark:border-stone-700 shadow-2xl dark:shadow-[0_0_15px_rgba(255,255,255,0.03)]" 
          : "top-0 left-0 w-full bg-white/90 dark:bg-stone-900/90 backdrop-blur-md border-b border-slate-200 dark:border-stone-800"
      }`}
    >
      <div className={`container mx-auto flex items-center justify-between transition-all duration-300 ${isScrolled ? "px-5 py-2 sm:px-6 sm:py-3" : "px-4 py-3 sm:py-4"}`}>
        <div className="flex items-center gap-2 z-50">
          <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
            Sabin Panthi<span className="text-slate-400 dark:text-stone-500">.</span>
          </Link>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 dark:text-white focus:outline-none"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          <Link href="/#about" className="relative group text-slate-700 hover:text-slate-900 dark:text-stone-300 dark:hover:text-white transition-colors duration-300">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-slate-900 dark:bg-white transition-all duration-300 group-hover:w-full dark:bg-stone-900"></span>
          </Link>
          <Link href="/#services" className="relative group text-slate-700 hover:text-slate-900 dark:text-stone-300 dark:hover:text-white transition-colors duration-300">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-slate-900 dark:bg-white transition-all duration-300 group-hover:w-full dark:bg-stone-900"></span>
          </Link>
          <Link href="/projects" className="relative group text-slate-700 hover:text-slate-900 dark:text-stone-300 dark:hover:text-white transition-colors duration-300">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-slate-900 dark:bg-white transition-all duration-300 group-hover:w-full dark:bg-stone-900"></span>
          </Link>
          <Link href="/achievements" className="relative group text-slate-700 hover:text-slate-900 dark:text-stone-300 dark:hover:text-white transition-colors duration-300">
            Achievements
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-slate-900 dark:bg-white transition-all duration-300 group-hover:w-full dark:bg-stone-900"></span>
          </Link>
          
          <ThemeToggle />

          <Link
            href="#talk"
            className={`relative overflow-hidden group border border-slate-900 dark:border-white transition-all duration-300 ${
              isScrolled 
                ? "px-5 py-1.5 rounded-full" 
                : "px-6 py-2"
            } bg-slate-900 dark:bg-white text-white dark:text-stone-900`}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-white">Let's Talk</span>
            <div className={`absolute inset-0 bg-white dark:bg-stone-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0 ${isScrolled ? "rounded-full" : ""}`}></div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Floating Dropdown) */}
      <div
        className={`${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
        } lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-lg bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl shadow-2xl border border-slate-200 dark:border-stone-800 text-slate-900 dark:text-white overflow-hidden transition-all duration-300`}
      >
        <Link onClick={() => setIsOpen(false)} href="/#about" className="block py-3 px-5 text-sm sm:text-base font-medium hover:bg-slate-50 dark:hover:bg-stone-800 transition-colors">
          About
        </Link>
        <div className="h-px w-full bg-slate-100 dark:bg-stone-800/50"></div>
        <Link onClick={() => setIsOpen(false)} href="/#services" className="block py-3 px-5 text-sm sm:text-base font-medium hover:bg-slate-50 dark:hover:bg-stone-800 transition-colors">
          Services
        </Link>
        <div className="h-px w-full bg-slate-100 dark:bg-stone-800/50 dark:bg-stone-100"></div>
        <Link onClick={() => setIsOpen(false)} href="/projects" className="block py-3 px-5 text-sm sm:text-base font-medium hover:bg-slate-50 dark:hover:bg-stone-800 transition-colors dark:hover:bg-stone-50">
          Projects
        </Link>
        <div className="h-px w-full bg-slate-100 dark:bg-stone-800/50 dark:bg-stone-100"></div>
        <Link onClick={() => setIsOpen(false)} href="/achievements" className="block py-3 px-5 text-sm sm:text-base font-medium hover:bg-slate-50 dark:hover:bg-stone-800 transition-colors dark:hover:bg-stone-50">
          Achievements
        </Link>
        <div className="h-px w-full bg-slate-100 dark:bg-stone-800/50 dark:bg-stone-100"></div>
        <Link onClick={() => setIsOpen(false)} href="#talk" className="block py-3 px-5 bg-slate-900 dark:bg-white text-white dark:text-stone-900 text-center font-bold tracking-wider uppercase text-xs sm:text-sm">
          Let's Talk
        </Link>
      </div>
    </nav>
  );
}
