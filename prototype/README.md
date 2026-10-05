# Neverday connectivity prototype

[Protected Vercel preview](https://neverday-od1vwyxp7-anthonyrmarti-7489s-projects.vercel.app/prototype/neverday-demo.html) · [Passing checks](https://github.com/anthonymarti/neverday/actions/runs/37258044353)

Complete simulation-only travel-data product on the isolated `connectivity-prototype` branch. Studio main/root source, production and Neverday.com were preserved.

**Access limit:** Vercel preview requires the owner's existing Vercel sign-in or a deployment-only share link. Anonymous deployed browser testing is blocked. The app itself creates no account. Connected team is Hobby, whose terms do not establish eligibility for a business prototype; no upgrade was purchased. Use the local version for $0 exploration. See docs/VERIFICATION.md.

## Explore now without a web account

Open [neverday-demo.html](neverday-demo.html) in GitHub, choose **Download raw file**, and open the downloaded HTML in a browser. It includes the complete interface, styles and mock services; no install, API keys or sign-up needed. The generated file was tested through the full Chromium journey.

Choose Japan → select the sample5GB/30-day $11 pack → confirm exact-device eSIM support and carrier unlock → trip date → simulation consent → demo purchase → three installation steps → My trips → simulate arrival.

Expand **Demo lab** to try errors, usage/exhaustion, top-up, expiry and an unused-pack refund. Download a clearly labeled JSON receipt, buy/switch trips, refresh to persist, or **Reset demo**. No real charges, network traffic from the application, service, profile QR or activation credential. No phone-setting changes are needed.

File-URL storage behavior differs between browsers; the app catches unavailable storage and continues in memory. Serving locally is the more portable option.

## Run and build

Node22+, no runtime packages. From `prototype/`:

```sh
npm run lint
npm test
npm run build
npm start
```

Open http://127.0.0.1:4173. Build creates `dist/` and regenerates `neverday-demo.html`.

`npm run lint` validates JavaScript syntax; this plain-JS project has no full linter or compiled type checker. Domain tests and static build passed; Chromium tested HTTP and local-file complete journeys. No production credentials are needed.

## Architecture

- `core.js`: immutable validated catalog/lifecycle and storage restoration.
- `services.js`: async mock Payments/Connectivity interfaces, no network calls.
- `app.js`: accessible-control intent, hash navigation, UI and localStorage.
- `styles.css` / SVG: original responsive Neverday brand; system fonts.
- `scripts/`: static build/server and read-only primary-source readers.
- `tests/`: domain and full-browser journeys.

Replace mocks through an authenticated server with authoritative catalog/tax, payment webhooks, funded idempotent provisioning, reconciliation and genuine credential delivery. Browser-local state is never a production billing ledger.

## Saved decisions and evidence

- [Business direction, pricing assumptions and first subscriber](docs/BUSINESS.md)
- [Sourced provider comparison and funding terms](docs/PROVIDERS.md)
- [Primary-source research/access limitations](docs/RESEARCH.md)
- [Brand, Mobbin references and product rationale](docs/BRAND.md)
- [Implemented versus simulated and integration requirements](docs/INTEGRATIONS.md)
- [Executed checks, deployment and budget limits](docs/VERIFICATION.md)
- [Deployment and future domain cutover](docs/DEPLOYMENT.md)

No genuinely $0 immediate branded commercial launch is verified: the candidate requires prepayment and non-refundable wallet deposits, while card receipts settle later. No supplier account/contract was created; sample prices/coverage are illustrative.

## Free CI and conditions

Official GitHub documentation confirms standard hosted runners are free for public repositories. This repo is public. Workflows use ubuntu-latest, no cache, artifact uploads, larger runners or paid services. Screenshots/source excerpts live in logs, which do not count artifact storage. Browser packages are installed temporarily in runner /tmp, not runtime dependencies.

https://github.com/github/docs/blob/main/content/billing/concepts/product-billing/github-actions.md (reviewed2026-10-05). Do not introduce private-repo metered Actions, paid runners, caches/artifacts or paid APIs without checking budget authorization.
