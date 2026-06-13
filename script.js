const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = [...document.querySelectorAll("main section[id]")];
const backToTopButton = document.querySelector(".back-to-top");
const yearTarget = document.querySelector("#year");
const revealItems = document.querySelectorAll(".reveal");
const imagePlaceholders = {
  profile: {
    title: "PROFILE",
    subtitle: "Replace with images/profile.jpg",
  },
  "portfolio-1": {
    title: "PROJECT 01",
    subtitle: "Replace with images/portfolio1.jpg",
  },
  "portfolio-2": {
    title: "PROJECT 02",
    subtitle: "Replace with images/portfolio2.jpg",
  },
  "portfolio-3": {
    title: "PROJECT 03",
    subtitle: "Replace with images/portfolio3.jpg",
  },
  "portfolio-4": {
    title: "PROJECT 04",
    subtitle: "Replace with images/portfolio4.jpg",
  },
  "hobby-1": {
    title: "HOBBY 01",
    subtitle: "Replace with images/hobby1.jpg",
  },
  "hobby-2": {
    title: "HOBBY 02",
    subtitle: "Replace with images/hobby2.jpg",
  },
  "hobby-3": {
    title: "HOBBY 03",
    subtitle: "Replace with images/hobby3.jpg",
  },
};

function createPlaceholderDataUri(title, subtitle) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f8fbff" />
          <stop offset="100%" stop-color="#eaf4ff" />
        </linearGradient>
        <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#007aff" />
          <stop offset="100%" stop-color="#0a84ff" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" rx="48" fill="url(#bg)" />
      <circle cx="980" cy="120" r="170" fill="#dcecff" />
      <circle cx="240" cy="700" r="220" fill="#eff6ff" />
      <rect x="100" y="110" width="420" height="16" rx="8" fill="url(#accent)" opacity="0.92" />
      <text x="100" y="300" fill="#0f172a" font-size="92" font-family="Arial, sans-serif" font-weight="700">
        ${title}
      </text>
      <text x="100" y="388" fill="#475569" font-size="34" font-family="Arial, sans-serif">
        ${subtitle}
      </text>
      <rect x="100" y="468" width="280" height="18" rx="9" fill="#bedbff" />
      <rect x="100" y="514" width="210" height="18" rx="9" fill="#d7e9ff" />
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function handleImageFallback(image) {
  const key = image.dataset.placeholder;
  const placeholder = imagePlaceholders[key];

  if (!placeholder) {
    return;
  }

  image.src = createPlaceholderDataUri(placeholder.title, placeholder.subtitle);
  image.alt = `${placeholder.title} placeholder`;
}

document.querySelectorAll("img[data-placeholder]").forEach((image) => {
  image.addEventListener("error", () => handleImageFallback(image), { once: true });

  if (image.complete && image.naturalWidth === 0) {
    handleImageFallback(image);
  }
});

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    siteNav.classList.toggle("is-open");
    document.body.classList.toggle("menu-open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -30px 0px",
  }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
  revealObserver.observe(item);
});

function updateActiveNav() {
  const currentScroll = window.scrollY + window.innerHeight * 0.28;

  let currentId = sections[0]?.id ?? "home";

  sections.forEach((section) => {
    if (currentScroll >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const targetId = link.getAttribute("href")?.replace("#", "");
    link.classList.toggle("is-active", targetId === currentId);
  });
}

function updateBackToTop() {
  if (!backToTopButton) {
    return;
  }

  backToTopButton.classList.toggle("is-visible", window.scrollY > 520);
}

window.addEventListener("scroll", () => {
  updateActiveNav();
  updateBackToTop();
});

backToTopButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

updateActiveNav();
updateBackToTop();
