# Implemented functionality versus simulations

Implemented: destination search, finite plan selection, device/unlock attestations, valid trip-date checks, mock checkout with error/loading states, installation stepper, arrival, usage, exhaustion, top-up, expiry, refund, multiple trips, receipt download, browser-local persistence, corruption recovery and reset.

Simulated: all charges, tax, coverage, networks, profile installation, activation, connectivity, usage and refund settlement. No real activation credentials, QR, SM-DP+ address, ICCID or matching ID is generated.

## Future backend

core.js handles pure validated state; services.js supplies async mock interfaces; app.js orchestrates UI. Replace mocks through a secure backend, not by inserting provider keys in the browser.

Production requires authenticated accounts; server-side authoritative price/tax/catalog validation; verified signed processor/provider webhooks; idempotent orders and provisioning; payment authorization/capture/settlement availability as distinct states; fulfillment retry/compensation; reconciliation; secure genuine credential delivery; provider usage timestamps and lag disclosures; consent versions/audit events; refund/dispute support.

Do not treat localStorage as a billing/provisioning ledger or trustworthy usage record. Never commit credentials or log eSIM secrets/card data.

## Costs and configuration

Demo needs no database, paid API, analytics, third-party assets, functions, queue or Sandbox. No production secrets are required.

Obtain written supplier and processor terms, actual working-capital/reserve model, legal/tax review and commercial hosting eligibility before taking real payment. Free API access is not a live-service budget.

Preserve the studio and Neverday.com. Future domain cutover: inspect existing DNS and project attachment, back up records, explicitly intend replacing the studio, add apex/www with exact Vercel-generated records, preserve MX/TXT/unrelated records and validate email/web after propagation.
