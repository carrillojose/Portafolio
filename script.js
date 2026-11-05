
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpen = navToggle.getAttribute('aria-expanded') === 'true';

        navToggle.setAttribute('aria-expanded', String(!isOpen));
        navToggle.setAttribute(
            'aria-label',
            isOpen ? 'Abrir menú' : 'Cerrar menú'
        );

        navLinks.classList.toggle('is-open', !isOpen);
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Abrir menú');
        });
    });
}



/* =========================================
   HERO — ANIMACIONES DE ENTRADA
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".reveal");

    // Mostrar todo si el navegador no admite IntersectionObserver.
    if (!("IntersectionObserver" in window)) {
        elements.forEach((element) => {
            element.classList.add("is-visible");
        });

        return;
    }

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
        elements.forEach((element) => {
            element.classList.add("is-visible");
        });

        return;
    }

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    currentObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -25px 0px"
        }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll(".work-filter");
    const cards = document.querySelectorAll(".work-card");

    filters.forEach((filter) => {
        filter.addEventListener("click", () => {
            const category = filter.dataset.filter;

            filters.forEach((button) => {
                button.classList.remove("is-active");
                button.removeAttribute("aria-pressed");
            });

            filter.classList.add("is-active");
            filter.setAttribute("aria-pressed", "true");

            cards.forEach((card) => {
                const matches =
                    category === "all" ||
                    card.dataset.category === category;

                card.classList.toggle("is-hidden", !matches);
            });
        });
    });

    filters.forEach((filter) => {
        filter.setAttribute(
            "aria-pressed",
            filter.classList.contains("is-active") ? "true" : "false"
        );
    });
});
