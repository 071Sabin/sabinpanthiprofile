export default function Services() {
  const services = [
    {
      icon: "bi-laptop",
      title: "Frontend Development",
      description:
        "Building responsive, pixel-perfect user interfaces using HTML, CSS, React, and Tailwind CSS. Focus on usability and modern aesthetics.",
    },
    {
      icon: "bi-server",
      title: "Backend Development",
      description:
        "Developing robust and secure server-side applications and APIs using PHP, Laravel, Node.js, and Express.",
    },
    {
      icon: "bi-database",
      title: "Database Management",
      description:
        "Designing efficient database schemas and managing data with MySQL, MongoDB, and PostgreSQL.",
    },
    {
      icon: "bi-phone",
      title: "Responsive Design",
      description:
        "Ensuring applications look and function flawlessly across all devices, from desktops to smartphones.",
    },
    {
      icon: "bi-diagram-3",
      title: "API Integration",
      description:
        "Connecting systems seamlessly by integrating third-party APIs and building custom RESTful services.",
    },
    {
      icon: "bi-speedometer2",
      title: "Performance Optimization",
      description:
        "Improving load times and application speed for better user experience and SEO rankings.",
    },
  ];

  return (
    <section className="bg-slate-50 dark:bg-stone-950 py-12 sm:py-24 transition-colors duration-300 dark:bg-stone-50" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 dark:border-stone-800 pb-6 dark:border-stone-200">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            My Services
          </h2>
          <p className="text-slate-600 dark:text-stone-400 max-w-sm text-base sm:text-lg">
            Specialized solutions for modern web infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 p-8 transition-all duration-300 hover:border-slate-900 dark:hover:border-white overflow-hidden dark:border-stone-200 dark:hover:border-stone-900"
            >
              {/* Techy Accent Line on Hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-900 dark:bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out dark:bg-stone-900"></div>
              
              <div className="mb-8">
                <i
                  className={`bi ${service.icon} text-3xl text-slate-900 dark:text-white transition-transform duration-300 group-hover:scale-110 inline-block`}
                ></i>
              </div>
              
              <h3 className="font-mono text-sm tracking-widest uppercase font-bold text-slate-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-stone-400 leading-relaxed text-base">
                {service.description}
              </p>
              
              {/* Subtle tech decorative element */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 dark:text-stone-200"></h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
