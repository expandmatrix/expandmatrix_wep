#!/usr/bin/env bash
# Setup script for the Expand Matrix project.
# Installs dependencies and optionally disables Next.js telemetry.
# After running this, you can use `npm run lint` and `npm run type-check`.
set -euo pipefail

npm install

# Disable Next.js telemetry; ignore errors if npx or Next.js is missing
npx next telemetry disable >/dev/null 2>&1 || true
