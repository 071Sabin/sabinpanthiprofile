import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-stone-950 text-slate-900 dark:text-white py-12 sm:py-20 px-4 sm:px-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 sm:mb-16 text-slate-900 dark:text-white">
          About <span className="text-slate-900 dark:text-white">Sabin Panthi</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image & Highlights */}
          <div className="relative group mx-auto w-full max-w-sm lg:max-w-full">
            <div className="absolute -inset-4 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-stone-800 dark:to-stone-700 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500 hidden sm:block dark:from-stone-200 dark:to-stone-100"></div>
            
            <div className="relative bg-slate-50 dark:bg-stone-900 border border-slate-200 dark:border-stone-800 p-2 rounded-3xl shadow-lg transition-colors duration-300 dark:bg-stone-50 dark:border-stone-200">
              <Image
                src="/img/im1.png"
                alt="Sabin Panthi"
                width={500}
                height={600}
                className="w-full rounded-2xl object-cover transform transition duration-500 group-hover:scale-[1.02]"
              />
              
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white dark:bg-stone-800 p-3 sm:p-4 rounded-md shadow-2xl border border-slate-200 dark:border-stone-700 hidden sm:block dark:border-stone-200">
                <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">1.5+</p>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-600 dark:text-stone-400 uppercase tracking-wide">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* Right: Bio & Skills */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Delivering High-Quality Web Solutions
              </h3>
              <p className="text-slate-700 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
                I specialize in crafting user-first websites and web
                applications with a focus on performance, accessibility, and
                modern design. With expertise in Laravel, TailwindCSS, and
                React, I bridge the gap between robust backend logic and
                engaging frontend experiences.
              </p>
              <p className="text-slate-700 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
                My goal is to build scalable systems that solve real-world
                problems while providing intuitive interfaces.
              </p>
            </div>

            {/* Quick Tech Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <i className="bi bi-check2 text-indigo-500 text-xl font-bold"></i>
                <span className="font-medium text-slate-700 dark:text-stone-200">Full-Stack Dev</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="bi bi-check2 text-indigo-500 text-xl font-bold"></i>
                <span className="font-medium text-slate-700 dark:text-stone-200">UI/UX Design</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="bi bi-check2 text-indigo-500 text-xl font-bold"></i>
                <span className="font-medium text-slate-700 dark:text-stone-200">API Integration</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="bi bi-check2 text-indigo-500 text-xl font-bold"></i>
                <span className="font-medium text-slate-700 dark:text-stone-200">Performance</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="relative inline-flex items-center gap-2 px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-stone-900 overflow-hidden group border border-slate-900 dark:border-white font-medium"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-white flex items-center gap-2 dark:hover:text-white">
                  <i className="bi bi-download"></i>
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-white dark:bg-stone-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
