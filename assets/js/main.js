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
}

const typewriterElements = document.querySelectorAll(".typewrite");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

document.querySelectorAll(".value[akhi]").forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("akhi"), 10);

    if (!Number.isFinite(target) || target < 0) {
        return;
    }

    if (reduceMotion) {
        counter.textContent = String(target);
        return;
    }

    const duration = 800;
    const start = performance.now();
    counter.textContent = "0";

    const updateCounter = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        counter.textContent = String(Math.floor(target * progress));

        if (progress < 1) {
            window.requestAnimationFrame(updateCounter);
        }
    };

    window.requestAnimationFrame(updateCounter);
});
