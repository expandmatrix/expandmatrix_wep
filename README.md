# Expand Matrix

This repository contains the code for the Expand Matrix website built with Next.js and TypeScript.

## Local development

First run `npm install` or `./setup.sh` (which calls `npm install` and disables Next.js telemetry). This
also prepares the environment for `npm run lint` and `npm run type-check`:

```bash
./setup.sh
npm run dev
npm run lint
npm run type-check
```

Skipping the installation step will lead to the error `Module not found: Can't resolve 'react-icons/fa'`.

The site will be available at `http://localhost:3000`.

Before submitting changes, ensure that the linting and type checks pass.

## VPS page with Systrix theme

The VPS landing page lives under `app/[lang]/systrix/vps`. Each language is served from the `[lang]` segment, for example:

- `app/cs/systrix/vps`
- `app/en/systrix/vps`

When running locally, navigate to `http://localhost:3000/en/systrix/vps` (replace `en` with another language code if needed) to view the page.

The `systrix-theme.module.css` file in the same folder overrides default styles. If you remove this theme file and related imports, the main VPS content still works because the page relies on components in `components/vps/`.

