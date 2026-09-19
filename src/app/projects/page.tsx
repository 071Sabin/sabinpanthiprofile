"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectsModal from "@/components/ProjectsModal";

export default function ProjectsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const projects = [
    {
      tag: { label: "Fullstack", colorClass: "bg-green-600" },
      icon: { class: "bi bi-hospital-fill", colorClass: "text-rose-400" },
      title: "Hospital Management System",
      tech: "HTML, CSS, Tailwind, JS, Laravel, PHP",
      year: "2025 – Ongoing",
      features: [
        "Landing page with patient-first UI/UX",
        "Care team dashboard with dynamic routing",
        "Secure backend with appointment & API sync",
      ],
      links: {
        live: { onClick: openModal },
        code: { onClick: openModal },
      },
    },
    {
      tag: { label: "Fullstack", colorClass: "bg-green-600" },
      icon: { class: "bi bi-filetype-pdf", colorClass: "text-yellow-400" },
      title: "Image to Text Converter",
      tech: "Node.js, Express, Tesseract.js, Tailwind",
      year: "2024",
      features: [
        "Upload images and extract text using OCR",
        "Download output as plain text or PDF",
        "Secure backend API with real-time feedback",
      ],
      links: {
        live: { url: "/projects/img2txt/index.html" },
        code: { url: "https://github.com/071Sabin/imgtotext" },
      },
    },
    {
      tag: { label: "Fullstack", colorClass: "bg-green-600" },
      icon: { class: "bi bi-speedometer", colorClass: "text-cyan-400" },
      title: "Admin Control Panel",
      tech: "PHP, Laravel, Tailwind, Blade, JS",
      year: "Built in 2024",
      features: [
        "Approve drivers & customers with KYC verification",
        "Set commissions, manage top-ups & transactions",
        "Broadcast announcements to users",
      ],
      links: {
        live: { url: "#" },
        code: {
          url: "https://github.com/071Sabin/adminDriverCustomer",
          note: "private repo",
        },
      },
    },
    {
      tag: { label: "Frontend", colorClass: "bg-blue-600" },
      icon: { class: "bi bi-person-plus-fill", colorClass: "text-teal-400" },
      title: "People Form UI",
      tech: "HTML, CSS, JavaScript",
      year: "2024",
      features: [
        "Simple add user form with clean layout",
        "Responsive across devices",
        "Basic validation using JS",
      ],
      links: {
        live: { url: "/projects/AddUserForm/index.html" },
        code: { url: "#" },
      },
    },
    {
      tag: { label: "Frontend", colorClass: "bg-blue-600" },
      image: { src: "/projects/nikeDesign/img/nike.png", alt: "Nike Logo" },
      title: "Nike Shoe Hero Section",
      tech: "HTML, CSS, JavaScript",
      year: "2024",
      features: [
        "Animated Nike-style product hero",
        "Fully responsive on all devices",
        "Hover interactions and smooth UI",
      ],
      links: {
        live: { url: "/projects/nikeDesign/index.html" },
        code: { url: "https://github.com/071Sabin/uiNIKE" },
      },
    },
    {
      tag: { label: "Frontend", colorClass: "bg-blue-600" },
      icon: { class: "bi bi-brush", colorClass: "text-amber-400" },
      title: "Salon Landing Page",
      tech: "TailwindCSS, JavaScript, HTML",
      year: "Built in 2025",
      features: [
        "Interactive hero section with dark/light mode",
        "Responsive, mobile-first design",
        "Features overview, service highlights, contact CTA",
      ],
      links: {
        live: { url: "/projects/hairSalon/index.html" },
        code: { url: "https://github.com/071Sabin/hairSalon" },
      },
    },
    {
      tag: { label: "Frontend", colorClass: "bg-blue-600" },
      icon: { class: "bi bi-person-heart", colorClass: "text-indigo-400" },
      title: "Life Coaching Landing Page",
      tech: "HTML, CSS, TailwindCSS, JavaScript",
      year: "Built in 2025",
      features: [
        "Clean, modern design with responsive layout",
        "Optimized for light and dark themes",
        "Contact CTA section, scroll animations, and elegant visuals",
      ],
      links: {
        live: { url: "/projects/lifeCoach/index.html" },
        code: { url: "#" },
      },
    },
  ];

  return (
    <>
      <section className="bg-slate-50 dark:bg-stone-950 text-slate-900 dark:text-white py-12 pt-24 sm:py-24 sm:pt-32 px-4 lg:px-20 min-h-screen transition-colors duration-300" id="projects">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter mb-10 sm:mb-16 text-center">
          My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>

      <ProjectsModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
