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

const filmDialog = document.getElementById("project-film");

if (filmDialog && typeof filmDialog.showModal === "function") {
    const title = filmDialog.querySelector("h2");
    const video = filmDialog.querySelector("video");
    const fallback = filmDialog.querySelector(".project-film-fallback");
    const fallbackLink = fallback.querySelector("a");

    document.querySelectorAll("[data-film-title]").forEach((link) => {
        link.addEventListener("click", (event) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

            event.preventDefault();
            title.textContent = `${link.dataset.filmTitle} film`;
            fallbackLink.href = link.href;
            fallback.hidden = true;
            video.src = link.href;
            filmDialog.showModal();
        });
    });

    video.addEventListener("error", () => { fallback.hidden = false; });
    filmDialog.addEventListener("close", () => {
        video.pause();
        video.removeAttribute("src");
        video.load();
    });
}
