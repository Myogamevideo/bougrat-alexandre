# Project Guidelines

## Project structure

- This is a static HTML/CSS/JavaScript portfolio; avoid introducing a build system or framework for simple changes.
- Keep the portfolio in `index.html` and the printable CV in `cv.html` consistent for shared career information.
- Store local images and official organization logos in `assets/images/`.
- The CACF mission began in February 2023 and ends in November 2026; OpenStudio employment began in January 2023 and remains a CDI.
- The CACF section presents 18 anonymized realization cards in a native disclosure panel. Generalize descriptions to avoid exposing internal app names, detailed business rules, or system-specific implementation details.
- The portfolio also presents personal homelab/IoT work covering Proxmox, Docker, Home Assistant, MQTT, and energy monitoring.

## Content accuracy

- Do not invent employers, responsibilities, dates, education details, technologies, outcomes, or metrics.
- Keep the OpenStudio CDI and the full-time Crédit Agricole Centre France client assignment clearly distinguished.
- At Crédit Agricole, the confirmed primary technologies are Symfony and Angular; the delivery pipeline uses GitLab CI/CD.
- PHPUnit was used for testing. Python, Node.js, React, PWA, and Storyblok were studied in school and must not be presented as professional experience.
- Describe English as reading technical documentation only; do not assign a CEFR level.
- The user is in a CDI and is open to opportunities; do not suggest they are unemployed or immediately available without qualification.
- The user has asked to omit deployment platform technologies for which they have little or no hands-on experience.
- Present the CACF commit and line counts as repository-history volumes; do not describe them as commits personally authored by Alexandre.
- Keep internal application names, repository identifiers, codenames, detailed rules, and sensitive SI details out of public project titles and descriptions.
- The user explicitly confirmed the CACF mission ends in November 2026; keep OpenStudio employment separate from the client assignment.
- Do not add explanations that a project’s line-count volume was inflated by reused-base histories.
- OpenStudio and Drosalys work environments are described as open source / Ubuntu.
- Claude and GitHub Copilot are used daily on professional and personal projects; describe them as coding assistants, not autonomous decision-makers.

## Validation

- Check `git diff --check` and verify local links and images after content or layout changes.
- Test responsive pages in a browser when editing the portfolio or CV.
- Keep the generated CV PDF at one A4 page; regenerate `assets/pdf/BOUGRAT Alexandre CV.pdf` after editing `cv.html`.
- See `README.md` for local preview and PDF generation commands.
