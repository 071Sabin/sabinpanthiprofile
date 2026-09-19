export default function Expertise() {
  return (
    <>
      <section id="expertise" className="bg-white dark:bg-stone-900 text-slate-900 dark:text-white py-12 sm:py-24 px-4 sm:px-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 border-b border-slate-200 dark:border-stone-800 pb-8 dark:border-stone-200">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Expertise & Specializations
            </h2>
            <p className="lg:max-w-xl text-slate-600 dark:text-stone-400 text-base sm:text-lg leading-relaxed">
              My expertise spans frontend and backend development, database
              management, and UI design. I’m proficient in Laravel, JavaScript,
              TailwindCSS, and related tools — delivering robust, performant, and
              elegant web solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 md:gap-y-12">
            
            {/* Skill 1 */}
            <div className="group">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-mono text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase font-bold text-slate-800 dark:text-stone-200">
                  Frontend Development
                </h3>
                <span className="font-mono text-xs text-slate-500 dark:text-stone-500">90%</span>
              </div>
              <div className="w-full h-[2px] bg-slate-200 dark:bg-stone-800 relative dark:bg-stone-200">
                <div className="absolute top-0 left-0 h-full bg-slate-900 dark:bg-white w-[90%] origin-left transition-transform duration-1000 ease-out group-hover:scale-x-[1.02] dark:bg-stone-900"></div>
              </div>
            </div>

            {/* Skill 2 */}
            <div className="group">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-mono text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase font-bold text-slate-800 dark:text-stone-200">
                  Backend Development
                </h3>
                <span className="font-mono text-xs text-slate-500 dark:text-stone-500">95%</span>
              </div>
              <div className="w-full h-[2px] bg-slate-200 dark:bg-stone-800 relative dark:bg-stone-200">
                <div className="absolute top-0 left-0 h-full bg-slate-900 dark:bg-white w-[95%] origin-left transition-transform duration-1000 ease-out group-hover:scale-x-[1.02] dark:bg-stone-900"></div>
              </div>
            </div>

            {/* Skill 3 */}
            <div className="group">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-mono text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase font-bold text-slate-800 dark:text-stone-200">
                  Database Management
                </h3>
                <span className="font-mono text-xs text-slate-500 dark:text-stone-500">85%</span>
              </div>
              <div className="w-full h-[2px] bg-slate-200 dark:bg-stone-800 relative dark:bg-stone-200">
                <div className="absolute top-0 left-0 h-full bg-slate-900 dark:bg-white w-[85%] origin-left transition-transform duration-1000 ease-out group-hover:scale-x-[1.02] dark:bg-stone-900"></div>
              </div>
            </div>

            {/* Skill 4 */}
            <div className="group">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-mono text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase font-bold text-slate-800 dark:text-stone-200">
                  UI/UX Design
                </h3>
                <span className="font-mono text-xs text-slate-500 dark:text-stone-500">80%</span>
              </div>
              <div className="w-full h-[2px] bg-slate-200 dark:bg-stone-800 relative dark:bg-stone-200">
                <div className="absolute top-0 left-0 h-full bg-slate-900 dark:bg-white w-[80%] origin-left transition-transform duration-1000 ease-out group-hover:scale-x-[1.02] dark:bg-stone-900"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-stone-950 text-slate-900 dark:text-white px-4 py-12 sm:px-6 sm:py-24 transition-colors duration-300 border-t border-slate-200 dark:border-stone-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6">
            Engineer. Creator. Problem Solver.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-stone-400 max-w-3xl mx-auto leading-relaxed">
            I specialize in building scalable, impactful web systems using modern
            technologies. From UI development to backend architecture and database
            performance — I bring technical depth, clean code, and a design-driven
            mindset to every project.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          <div className="bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 p-8 sm:p-10 transition-colors duration-300 hover:border-slate-400 dark:hover:border-stone-500 group relative overflow-hidden dark:border-stone-200 dark:hover:border-stone-400">
            <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
              <i className="bi bi-code text-8xl"></i>
            </div>
            <div className="relative z-10">
              <h3 className="font-mono text-sm tracking-widest uppercase font-bold text-slate-800 dark:text-stone-200 mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-slate-900 dark:bg-white inline-block dark:bg-stone-900"></span>
                Frontend Development
              </h3>
              <p className="text-slate-600 dark:text-stone-400 leading-relaxed text-base sm:text-lg">
                Crafting pixel-perfect, responsive, and accessible user interfaces
                with HTML, CSS, JavaScript, and TailwindCSS. Every component is
                built with performance and UX in mind.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 p-8 sm:p-10 transition-colors duration-300 hover:border-slate-400 dark:hover:border-stone-500 group relative overflow-hidden dark:border-stone-200 dark:hover:border-stone-400">
            <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
              <i className="bi bi-terminal text-8xl"></i>
            </div>
            <div className="relative z-10">
              <h3 className="font-mono text-sm tracking-widest uppercase font-bold text-slate-800 dark:text-stone-200 mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-slate-900 dark:bg-white inline-block dark:bg-stone-900"></span>
                Backend Development
              </h3>
              <p className="text-slate-600 dark:text-stone-400 leading-relaxed text-base sm:text-lg">
                Building robust backend systems using Laravel and PHP. From RESTful
                APIs to authentication and complex business logic — stability and
                security are core priorities.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 p-8 sm:p-10 transition-colors duration-300 hover:border-slate-400 dark:hover:border-stone-500 group relative overflow-hidden dark:border-stone-200 dark:hover:border-stone-400">
            <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
              <i className="bi bi-database text-8xl"></i>
            </div>
            <div className="relative z-10">
              <h3 className="font-mono text-sm tracking-widest uppercase font-bold text-slate-800 dark:text-stone-200 mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-slate-900 dark:bg-white inline-block dark:bg-stone-900"></span>
                Database Management
              </h3>
              <p className="text-slate-600 dark:text-stone-400 leading-relaxed text-base sm:text-lg">
                Designing optimized, scalable databases with MySQL, PostgreSQL, and
                Laravel’s Eloquent ORM. Ensuring performance, structure, and
                security for long-term maintainability.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 p-8 sm:p-10 transition-colors duration-300 hover:border-slate-400 dark:hover:border-stone-500 group relative overflow-hidden dark:border-stone-200 dark:hover:border-stone-400">
            <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
              <i className="bi bi-palette text-8xl"></i>
            </div>
            <div className="relative z-10">
              <h3 className="font-mono text-sm tracking-widest uppercase font-bold text-slate-800 dark:text-stone-200 mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-slate-900 dark:bg-white inline-block dark:bg-stone-900"></span>
                UI/UX Design
              </h3>
              <p className="text-slate-600 dark:text-stone-400 leading-relaxed text-base sm:text-lg">
                Blending functionality with design. I deliver interfaces that are
                both beautiful and intuitive, focusing on layout, accessibility, and
                micro-interactions that enhance usability.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
