const header = document.querySelector(".ds-header");
const pageContent = document.querySelector(".ds-banner, .ds-main-section");

if (header && pageContent) {
    pageContent.style.marginTop = `${header.offsetHeight}px`;
}

if (header) {
    const updateHeader = () => {
        header.classList.toggle("ds-fixed-header", window.scrollY >= 10);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    const footer = document.querySelector(".ds-footer");
    if (footer && "IntersectionObserver" in window) {
        const footerObserver = new IntersectionObserver(([entry]) => {
            header.classList.toggle("ds-footer-visible", entry.isIntersecting);
        }, { threshold: 0.08 });
        footerObserver.observe(footer);
    }
}

const typewriterElements = document.querySelectorAll(".typewrite");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion && "IntersectionObserver" in window) {
    const revealTargets = document.querySelectorAll(
        ".ds-about-section, .ds-skills-section .col-12, .ds-experience-list > .col-12, .project-card, .personal-card, .ai-panel"
    );

    if (revealTargets.length > 0) {
        document.documentElement.classList.add("has-scroll-reveal");

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });

        revealTargets.forEach((target) => {
            target.classList.add("reveal-on-scroll");
            revealObserver.observe(target);
        });
    }
}

if (!reduceMotion) {
    typewriterElements.forEach((element) => {
        const phrases = JSON.parse(element.dataset.type || "[]");

        if (!Array.isArray(phrases) || phrases.length === 0 || !phrases.every((phrase) => typeof phrase === "string")) {
            return;
        }

        const output = document.createElement("span");
        output.className = "wrap";
        element.replaceChildren(output);

        let phraseIndex = 0;
        let characterIndex = 0;
        let deleting = false;

        const tick = () => {
            const phrase = phrases[phraseIndex];

            characterIndex += deleting ? -1 : 1;
            output.textContent = phrase.slice(0, characterIndex);

            let delay = deleting ? 75 : 125;

            if (!deleting && characterIndex === phrase.length) {
                deleting = true;
                delay = Number.parseInt(element.dataset.period, 10) || 2000;
            } else if (deleting && characterIndex === 0) {
                deleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                delay = 500;
            }

            window.setTimeout(tick, delay);
        };

        tick();
    });
}
