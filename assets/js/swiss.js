const root = document.documentElement;

const sectionLinks = [...document.querySelectorAll('.side-link[href^="#"]')];
const sections = sectionLinks.map((link) => document.getElementById(link.hash.slice(1)));

if (sections.length) {
    const sectionNav = document.querySelector(".side-nav");

    function updateNavigation() {
        const scrollPadding = Number.parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;
        const threshold = scrollPadding + 24;
        let current = 0;

        sections.forEach((section, index) => {
            if (section.getBoundingClientRect().top <= threshold) current = index;
        });

        const atBottom = window.scrollY > 0 &&
            window.scrollY + window.innerHeight >= root.scrollHeight - 2;
        if (atBottom) current = sections.length - 1;

        sectionLinks.forEach((link, index) => {
            if (index === current) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
        });
    }

    function updateScrollPadding() {
        const navHeight = getComputedStyle(sectionNav).position === "sticky" ? sectionNav.offsetHeight : 0;
        root.style.setProperty("--section-nav-height", `${navHeight}px`);
        updateNavigation();
    }

    window.addEventListener("scroll", updateNavigation, { passive: true });
    window.addEventListener("resize", updateScrollPadding);
    if ("ResizeObserver" in window) {
        new ResizeObserver(updateScrollPadding).observe(sectionNav);
    }
    updateScrollPadding();
}

if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add("has-entered");
                observer.unobserve(entry.target);
            }
        }
    }, { threshold: 0.1 });

    document.querySelectorAll(".pub-row, .news-row").forEach((row) => revealOnScroll.observe(row));
}
