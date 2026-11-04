# Project Guidelines

## Project structure

- This is a static HTML/CSS/JavaScript portfolio; avoid introducing a build system or framework for simple changes.
- Keep the portfolio in `index.html` and the printable CV in `cv.html` consistent for shared career information.
- Store local images and official organization logos in `assets/images/`.

## Content accuracy

- Do not invent employers, responsibilities, dates, education details, technologies, outcomes, or metrics.
- Keep the OpenStudio CDI and the full-time Crédit Agricole Centre France client assignment clearly distinguished.
- At Crédit Agricole, the confirmed primary technologies are Symfony and Angular; the delivery pipeline uses GitLab CI/CD.
- OpenStudio and Drosalys work environments are described as open source / Ubuntu.
- Claude and GitHub Copilot are used daily on professional and personal projects; describe them as coding assistants, not autonomous decision-makers.

## Validation

- Check `git diff --check` and verify local links and images after content or layout changes.
- Test responsive pages in a browser when editing the portfolio or CV.
- Keep the generated CV PDF at one A4 page; regenerate `assets/pdf/BOUGRAT Alexandre CV.pdf` after editing `cv.html`.
- See `README.md` for local preview and PDF generation commands.
