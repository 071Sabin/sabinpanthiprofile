"use client";

export default function ProjectsModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-slate-900/40 dark:bg-stone-950/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } dark:bg-stone-900`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 p-4 sm:p-5 w-[90%] max-w-sm z-50 shadow-2xl transition-all duration-300 overflow-hidden ${
          isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
        } dark:border-stone-200`}
      >
        {/* Decorative Top Line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-900 dark:bg-white dark:bg-stone-900"></div>
        
        <div className="flex items-center gap-2 mb-2">
          <i className="bi bi-terminal text-lg text-slate-900 dark:text-white"></i>
          <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
            Under Development
          </h2>
        </div>
        
        <p className="text-slate-600 dark:text-stone-400 mb-4 leading-relaxed text-xs">
          This project is currently under active development. Please check back later or
          view the GitHub repository for the latest commits and updates.
        </p>
        
        <div className="flex justify-end border-t border-slate-100 dark:border-stone-800 pt-3 dark:border-stone-100">
          <button
            className="font-mono text-[9px] font-bold tracking-widest uppercase bg-slate-900 dark:bg-white text-white dark:text-stone-900 px-4 py-1.5 hover:bg-indigo-600 dark:hover:bg-indigo-400 hover:text-white transition-colors duration-300"
            onClick={onClose}
          >
            Acknowledge
          </button>
        </div>
      </div>
    </>
  );
}
