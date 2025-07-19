const body = document.body;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Load theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
  themeIcon.classList.add("bi-brightness-high");
} else {
  document.documentElement.classList.remove("dark");
  themeIcon.classList.add("bi-moon-fill");
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  if (isDark) {
    themeIcon.classList.remove("bi-moon-fill");
    themeIcon.classList.add("bi-brightness-high");
  } else {
    themeIcon.classList.remove("bi-brightness-high");
    themeIcon.classList.add("bi-moon-fill");
  }
});

const menuBtn = document.getElementById("mobile-menu-button");
const navLinks = document.getElementById("nav-links");
const menuIcon = menuBtn.querySelector("i");

// Toggle mobile menu
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");

  // Swap icon
  if (navLinks.classList.contains("hidden")) {
    menuIcon.classList.remove("bi-x");
    menuIcon.classList.add("bi-list");
  } else {
    menuIcon.classList.remove("bi-list");
    menuIcon.classList.add("bi-x");
  }
});

// Optional: Auto-close on link click (for mobile UX)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 1024 && !navLinks.classList.contains("hidden")) {
      navLinks.classList.add("hidden");
      menuIcon.classList.remove("bi-x");
      menuIcon.classList.add("bi-list");
    }
  });
});

// Optional: Close nav if screen resizes to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    navLinks.classList.add("hidden");
    menuIcon.classList.remove("bi-x");
    menuIcon.classList.add("bi-list");
  }
});

const observeElements = document.querySelectorAll(
  ".animate-on-scroll, .element-reveal, .section-title"
);

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const animationDelay = element.dataset.delay
          ? parseFloat(element.dataset.delay) * 1000
          : 0;

        // Add is-visible class after a delay
        setTimeout(() => {
          element.classList.add("is-visible");
        }, animationDelay);

        // Stop observing once animated
        observer.unobserve(element);
      }
    });
  },
  {
    rootMargin: "0px",
    threshold: 0.2, // Trigger when 20% of the element is visible
  }
);

observeElements.forEach((element) => {
  observer.observe(element);
});

const phrases = [
  "Precision Cuts",
  "Classic Shaves",
  "Modern Style",
  "Elevate Your Look",
];

const textEl = document.getElementById("dynamic-text");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  let displayedText = currentPhrase.substring(0, charIndex);

  textEl.textContent = displayedText;

  if (!isDeleting) {
    if (charIndex < currentPhrase.length) {
      charIndex++;
      setTimeout(typeEffect, 100); // Typing speed
    } else {
      setTimeout(() => {
        isDeleting = true;
        setTimeout(typeEffect, 100);
      }, 1500); // Pause before deleting
    }
  } else {
    if (charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 60); // Deleting speed
    } else {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeEffect, 300); // Pause before typing next phrase
    }
  }
}

// Start typing
typeEffect();
