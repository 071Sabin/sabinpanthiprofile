import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black py-10 px-4 sm:p-10 border-t border-slate-200 dark:border-stone-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* CTA Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 mb-16">
          
          {/* Question & CTA Text */}
          <div className="max-w-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              Have a project in mind?
            </h2>
            <p className="text-slate-600 dark:text-stone-400 text-sm leading-relaxed">
              Let's connect and build something extraordinary together. My inbox is always open for new opportunities.
            </p>
          </div>

          {/* All Existing Social Icons - Styled Professionally */}
          <div className="flex flex-row flex-wrap sm:flex-nowrap justify-center sm:justify-start items-center gap-2 sm:gap-6 w-full sm:w-auto">
            <a
              href="https://www.github.com/071Sabin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center border border-slate-300 dark:border-stone-700 text-slate-600 dark:text-stone-400 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-stone-900 hover:border-slate-900 dark:hover:border-white transition-all duration-300 group"
              title="GitHub"
            >
              <i className="bi bi-github text-base sm:text-xl group-hover:scale-110 transition-transform"></i>
            </a>
            <a
              href="https://www.twitter.com/PanthiSabin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center border border-slate-300 dark:border-stone-700 text-slate-600 dark:text-stone-400 hover:bg-sky-500 hover:text-white dark:hover:text-white hover:border-sky-500 transition-all duration-300 group"
              title="Twitter"
            >
              <i className="bi bi-twitter text-base sm:text-xl group-hover:scale-110 transition-transform"></i>
            </a>
            <a
              href="https://www.facebook.com/071.sabin.panthi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center border border-slate-300 dark:border-stone-700 text-slate-600 dark:text-stone-400 hover:bg-blue-600 hover:text-white dark:hover:text-white hover:border-blue-600 transition-all duration-300 group"
              title="Facebook"
            >
              <i className="bi bi-facebook text-base sm:text-xl group-hover:scale-110 transition-transform"></i>
            </a>
            <a
              href="https://www.instagram.com/sabin_panthi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center border border-slate-300 dark:border-stone-700 text-slate-600 dark:text-stone-400 hover:bg-pink-500 hover:text-white dark:hover:text-white hover:border-pink-500 transition-all duration-300 group"
              title="Instagram"
            >
              <i className="bi bi-instagram text-base sm:text-xl group-hover:scale-110 transition-transform"></i>
            </a>
            <a
              href="mailto:071.sabin.panthi@gmail.com"
              className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center border border-slate-300 dark:border-stone-700 text-slate-600 dark:text-stone-400 hover:bg-indigo-600 hover:text-white dark:hover:text-white hover:border-indigo-600 transition-all duration-300 group"
              title="Email"
            >
              <i className="bi bi-envelope-fill text-base sm:text-xl group-hover:scale-110 transition-transform"></i>
            </a>
          </div>
        </div>

        {/* Bottom Minimal Details */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-200 dark:border-stone-900">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-bold text-slate-900 dark:text-white text-lg tracking-tight">Sabin Panthi.</span>
            <span className="hidden sm:block text-slate-300 dark:text-stone-700">|</span>
            <span className="text-slate-500 dark:text-stone-500 font-mono text-[10px] uppercase tracking-widest mt-0.5">Software Engineer</span>
          </div>
          <p className="font-mono text-[10px] text-slate-400 dark:text-stone-500 uppercase tracking-widest">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
