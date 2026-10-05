# Neverday connectivity prototype

A complete simulation-only travel data product. This folder lives on the isolated connectivity-prototype branch. The studio's main branch, root files, deployment and domain must be preserved.

## Run

Node 22+, no runtime dependencies, accounts, API keys, payments or additional resources.

From prototype/:
- npm run lint — JavaScript syntax validation; not a full lint/type-check claim.
- npm test — domain tests.
- npm run build — dist/ plus a self-contained neverday-demo.html.
- npm start — http://127.0.0.1:4173.

The generated neverday-demo.html can also be opened as a local file. localStorage behavior for file URLs varies; the app catches storage failures and continues in memory.

Plain JavaScript has no compiled type-check step. Production adoption should introduce typed contracts and backend validation.

## Explore

Choose a destination → finite pack → exact-device and carrier-unlock attestations → trip date → acknowledge simulation → demo purchase → three installation steps → My trips → simulate arrival.

Demo lab supports payment/provider/installation/network/top-up failure, usage and exhaustion, expiry, and an unused-pack refund. Receipt download creates a clearly labeled JSON demo receipt. New trips can be purchased and switched. Refresh persists progress. Reset deletes only neverday.demo.v1.

All coverage, prices, activation, usage and payments are illustrative. No real QR, SM-DP+ address, ICCID, matching ID or activation credential exists. Never change your phone settings for the demo.

## Architecture

- core.js: immutable validated lifecycle and catalog.
- services.js: async mock Payments/Connectivity interfaces; no network calls.
- app.js: UI, hash navigation and localStorage.
- styles.css: original responsive identity and accessible-control intent.
- scripts/: static build/server and primary-source retrieval.
- tests/: domain and Playwright complete-journey checks.

## Free verification

GitHub's current official billing documentation says standard hosted runners in public repositories are free. This existing repository is public. The workflow uses ubuntu-latest, no larger runner, no cache, no artifact upload, no deployment credentials. Its screenshots/results/source excerpts are logged; GitHub says logs/job summaries do not count toward artifact storage. Browser packages are temporarily installed in runner /tmp and are not production dependencies.

Source: https://github.com/github/docs/blob/main/content/billing/concepts/product-billing/github-actions.md (retrieved 2026-10-05).

Check the actual Actions run before claiming success. A configured workflow is not evidence of executed checks.

## Deployment and domain

The connected Vercel team reports Hobby. Verify current commercial-use eligibility and usage limits before deployment; no upgrade or paid trial is authorized. No database, server function, paid image/font, analytics, queue or Sandbox resource is needed.

Use a dedicated permitted Vercel project, rootDirectory=prototype, buildCommand=npm run build, outputDirectory=dist. Set the source branch explicitly. Do not repoint the studio project or merge blindly into main. Inspect deployment protection and verify a permanent unauthenticated URL.

Neverday.com/www currently serve the studio. Do not attach or change DNS. Later, after an intended cutover, back up DNS, attach the apex/www using exact Vercel-returned records, retain MX/TXT and unrelated records, and verify web and email behavior. Domain cutover must not prevent prototype delivery.

## Production

Read docs/INTEGRATIONS.md and docs/BUSINESS.md before taking real payment. A browser-local prototype is not a provisioning/billing backend.
