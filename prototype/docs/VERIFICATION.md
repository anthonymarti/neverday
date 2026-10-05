# Verification ledger

Prior chat draft: 37 domain assertions, five mock failures and three JavaScript parser checks passed in a V8 isolate. That draft was not saved; this persisted source must be independently verified.

Configured current checks:
- Node JavaScript syntax checks
- Six domain tests covering full lifecycle, validation, immutability, refund/multiple trips, persistence corruption, quota bounds
- Static build and standalone HTML generation
- Real headless Chromium desktop/mobile/320px journey, failures, receipts, persistence, reset and overflow checks
- Browser console/error and external-request checks
- Desktop/mobile home/dashboard screenshots in logs

Do not claim configured checks passed until the actual run confirms. No full linter, compiled type checker or screen-reader compliance claim is made. Deployed verification is separate from local CI browser tests.

Free runner evidence: GitHub official billing docs retrieved 2026-10-05 state standard runners for public repos are free. Use ubuntu-latest only, no caches, uploaded artifacts or larger runners. Logs/job summaries do not count toward artifact storage. https://github.com/github/docs/blob/main/content/billing/concepts/product-billing/github-actions.md
