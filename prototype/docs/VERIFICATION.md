# Executed verification — 2026-10-05

## Passing source and browser checks

[Final application verification run](https://github.com/anthonymarti/neverday/actions/runs/37258044353) completed SUCCESS for commit `dca4b7578bf57ad1971453cad8ce73fca27ddad5`.

- Node22 JavaScript syntax checks passed for runtime/build/server/test/source-reader files.
- All six Node domain tests passed: lifecycle, invalid purchase, immutability/refund, multiple orders, persisted/corrupt state, quota/top-up bounds.
- Static dist build and standalone HTML generation passed.
- Real Playwright1.56.1 Chromium ran the complete journey twice: HTTP-served app and generated `file://` standalone. Both passed.
- Destination search/empty/clear and France→Europe mapping; finite selection; native compatibility/unlock/date/simulation validation.
- Payment/provider/install/network/top-up failure and retry; no false order/activation/balance transitions.
- Installation/arrival, .25GB usage, exhaustion, 3GB top-up, same demo expiry, expired state, unused-pack refund.
- JSON receipt asserts actualCharged=0, illustrative total and no activation credentials.
- Multiple trips, refresh persistence, corrupt-storage recovery, reset cancel/confirm.
- Keyboard skip link focus checked and fixed; native dialog exercised.
- Desktop1440×1000, mobile390×844, all routes at390px/320px: no horizontal overflow.
- Both runs reported zero browser errors and zero external application requests.

Desktop/mobile home/dashboard JPEGs were emitted to logs and visually inspected. Home artwork clipping found on an earlier mobile screenshot was corrected. Dashboard capture sometimes reflects browser focus scrolling; no layout overflow found.

An additional standalone test initially failed because string replacement interpreted literal dollar syntax; build replacement callbacks fixed it and the complete standalone journey subsequently passed. Historical failing run is not the final status.

Plain JavaScript: no compiled type checker or full ESLint run. `npm run lint` is explicitly syntax validation. No screen-reader audit, cross-browser Safari test, physical-device/carrier test or WCAG conformance certification is claimed.

## Deployment, access and preservation

Vercel Git integration produced a READY preview for the tested app commit:
https://neverday-od1vwyxp7-anthonyrmarti-7489s-projects.vercel.app/prototype/neverday-demo.html

Inspector:
https://vercel.com/anthonyrmarti-7489s-projects/neverday/7zmF1NNWbvX81cZKdJnj6MPNBkrJ

Authenticated connector fetch returned HTTP200 and HTML with the exact committed standalone content plus Vercel's injected feedback script. Static CSS/index assets also returned200 on the earlier preview.

**Unauthenticated Chromium reached Vercel Login rather than the app.** Therefore a full end-to-end journey on the actual deployment and anonymous accessibility remain unverified/blocked. Local HTTP and local-file tests are distinct from deployed browser testing. A deployment-only share link was requested; project-wide protection was preserved. Do not present an authenticated connector fetch as proof of public access.

Main Git ref remains `a358f34bc7d867611d23311080c565ab90ba2d63`; no studio root source or production branch was changed. https://www.neverday.com/ returned200 with the studio HTML and no connectivity prototype. No DNS/domain/email changes were made.

## Budget verification and eligibility limit

GitHub's official billing documentation confirms standard hosted runners in public repositories are free. This existing repo is public; ubuntu-latest only; no cache, artifact upload or larger runner. Logs/job summaries do not count artifact storage:
https://github.com/github/docs/blob/main/content/billing/concepts/product-billing/github-actions.md

No runtime dependencies, paid assets/fonts, DB, functions, analytics, live provider/payment API, Sandbox, paid trial or commercial agreement was added. Browser tools run temporarily in the free runner.

The connected Vercel team is Hobby; no upgrade or paid resource was activated. However Hobby restricts personal noncommercial use and its fair-use definition includes business promotion. **Commercial eligibility for this branded business prototype cannot be certified.** A $0 public Vercel business deployment is blocked unless an existing eligible plan or explicit eligibility is established. Read RESEARCH.md; cost-free technical deployment alone does not establish permitted use.

Final Japan revision:3GB/15days $7,5GB/30days $11,10GB/30days $18. Public list benchmarks were sourced independently; retail prices/coverage remain simulated. Revised HTTP and standalone journeys both passed in the final linked run. Final receipt assertion is actualCharged=0, sampleTotal=$18 after $11 pack+$7 illustrative top-up. The final deployed standalone returned200 through the authenticated connector; its HTML equals the committed app content plus only Vercel's feedback script.
