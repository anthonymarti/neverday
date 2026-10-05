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

## Provider-specific boundary after research

For eSIM Access, account creation itself may accept commercial terms; perform it only in a future authorized commercial phase. API Quick Start requires deposited funds and there is no sandbox. Keep the current local mocks for $0 exploration. Do not copy public API sample LPA/ICCID/QR values into this demo.

Map actual provider packageCode and price to server-owned catalog rows; query funded balance before an idempotent order, reconcile order/profile webhooks, distinguish installed versus activated, enforce the SKU's activation/deadline/FUP/top-up rules, and timestamp usage. Use signed webhook verification where provider actually supports it; otherwise implement the documented authentication/reconciliation mechanism rather than inventing a signature format. The demo's payment-then-provider sequence is UX only; production needs compensation and funding checks if provisioning fails after capture.

Stripe integration should use hosted/embedded processor collection without raw card data in Neverday code, authoritative server amounts/tax, idempotency, validated webhook events, and separate pending/available/payout/refund/dispute states. An authorization or successful payment is not settlement.

Actual SDKs, API keys, webhook secrets, account IDs and prices have not been configured. No integration can provision service today.
