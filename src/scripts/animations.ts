type MagneticElement = HTMLElement & {
  dataset: DOMStringMap;
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initRevealAnimations(): void {
  const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");

  if (!revealItems.length) return;

  if (prefersReducedMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          const delay = Number(target.dataset.revealDelay || 0);

          window.setTimeout(() => {
            target.classList.add("is-visible");
          }, delay);

          observer.unobserve(target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initMagneticHover(): void {
  const magneticItems = document.querySelectorAll<MagneticElement>("[data-magnetic]");

  if (!magneticItems.length || prefersReducedMotion) return;

  magneticItems.forEach((item) => {
    const strength = Number(item.dataset.magneticStrength || 18);

    item.addEventListener("mousemove", (event: MouseEvent) => {
      const rect = item.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      item.style.transform = `translate3d(${(x / rect.width) * strength}px, ${
        (y / rect.height) * strength
      }px, 0)`;
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "translate3d(0, 0, 0)";
    });
  });
}

function initParallaxCards(): void {
  const cards = document.querySelectorAll<HTMLElement>("[data-parallax-card]");

  if (!cards.length || prefersReducedMotion) return;

  cards.forEach((card) => {
    card.addEventListener("mousemove", (event: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 5;
      const rotateX = ((y / rect.height) - 0.5) * -5;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });
}

function initSmoothAnchorScroll(): void {
  const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector<HTMLElement>(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  });
}

function initInoviqaAnimations(): void {
  initRevealAnimations();
  initMagneticHover();
  initParallaxCards();
  initSmoothAnchorScroll();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initInoviqaAnimations);
} else {
  initInoviqaAnimations();
}

export {};

