const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = [...document.querySelectorAll("main section[id]")];
const backToTopButton = document.querySelector(".back-to-top");
const revealItems = document.querySelectorAll(".reveal");

function createPlaceholderDataUri(title, subtitle) {
  const safeTitle = title ?? "IMAGE";
  const safeSubtitle = subtitle ?? "Replace this image file.";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" role="img" aria-label="${safeTitle}">
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
      <rect width="1200" height="800" rx="56" fill="url(#bg)" />
      <circle cx="980" cy="140" r="190" fill="#dbeeff" />
      <circle cx="190" cy="710" r="220" fill="#eef6ff" />
      <rect x="96" y="104" width="380" height="16" rx="8" fill="url(#accent)" opacity="0.92" />
      <text x="96" y="300" fill="#0a1628" font-size="82" font-family="Arial, sans-serif" font-weight="700">
        ${safeTitle}
      </text>
      <text x="96" y="382" fill="#51657c" font-size="32" font-family="Arial, sans-serif">
        ${safeSubtitle}
      </text>
      <rect x="96" y="468" width="320" height="18" rx="9" fill="#c4dcff" />
      <rect x="96" y="514" width="220" height="18" rx="9" fill="#d8e8ff" />
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function applyImageFallback(image) {
  image.src = createPlaceholderDataUri(
    image.dataset.placeholderTitle,
    image.dataset.placeholderSubtitle
  );
}

document.querySelectorAll("img[data-placeholder-title]").forEach((image) => {
  image.addEventListener("error", () => applyImageFallback(image), { once: true });

  if (image.complete && image.naturalWidth === 0) {
    applyImageFallback(image);
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
    threshold: 0.16,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 70, 320)}ms`;
  revealObserver.observe(item);
});

function updateActiveNav() {
  const currentScroll = window.scrollY + window.innerHeight * 0.3;
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

updateActiveNav();
updateBackToTop();
