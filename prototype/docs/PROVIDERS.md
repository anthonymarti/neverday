# Provider comparison — retrieved 2026-10-05

Primary pages and rendered API documentation were read in Chromium and a read-only HTTP research script. Public marketing is evidence of what a provider advertises, not a contract or Neverday approval. No account was opened, funds deposited, service provisioned or sales message sent.

## Decision

Finite travel-data resale is the initial product direction. **eSIM Access is the conditional supplier candidate**, because its public API and no-MOQ offer fit a small retailer better than the alternatives examined. It is NOT a partner. Its documented prepayment defeats an immediate, customer-receipt-funded $0 branded launch. Public Japan list prices were reviewed; approved Neverday SKU terms, funding floor and account eligibility remain unanswered.

| Business/provider | Verified public facts | Funding/onboarding/API conclusion |
|---|---|---|
| [Mint Mobile](https://www.mintmobile.com/) | Mint pages returned HTTP 403 in HTTP and Chromium. [T-Mobile’s 2024 acquisition announcement](https://www.t-mobile.com/news/business/t-mobile-closes-acquisition-mint-and-ultra-mobile), successfully retrieved, identifies Mint as a direct-to-consumer prepaid brand on T-Mobile’s network and includes multi-month upfront-payment terms. These dated terms are not verified 2026 retail offers. Current Mint offers/rates could not be verified directly. | Retail plans do not establish wholesale reseller rights. No public no-capital reseller agreement was verified. Do not copy promotional retail pricing into a wholesale model. |
| [Popcorn](https://popcorn.space/) | Site advertises $69/month, all-inclusive, U.S. number, talk/text/data in 180+ countries, number transfer, eSIM, optional AI assistant, backup eSIM and in-app backup dialer. “Unlimited” is subject to its [Play by the Rules](https://popcorn.space/rules) policy: nearing 50 GB/month is flagged, occasional hotspot only, not home-Wi-Fi replacement; personal use, no resale/sharing/commercial use. These are vendor claims, not Neverday coverage. | A full U.S. phone service with global roaming is substantially broader than travel-data resale. Site does not establish underlying wholesale supplier identity, available API rights, settlement or reseller credit. Global connectivity can use roaming agreements and supplemental profiles; the marketing page alone cannot prove its contractual architecture. |
| [eSIM Go](https://esimgo.com/) / [API docs](https://docs.esim-go.com/) | Homepage says no platform fees, pay wholesale on what you sell, and **minimum spend $10,000/month**, credited against plans sold. Advertises 190+ countries/500+ networks; API, webhooks and portal. Docs describe portal signup/API key. | Excluded from this budget under the current public offer. Do not confuse “no platform fees” with no commitments. Example storefront figures in docs are not a verified wholesale price book. |
| [eSIM Access](https://esimaccess.com/) / [API docs](https://docs.esimaccess.com/) | Advertises “No commitments. No minimums” and “No MOQ.” [Fee documentation](https://esimaccess.com/docs/do-i-need-to-sign-a-contract-and-a-moq-to-kickoff/) explicitly advertises no monthly setup, eSIM activation or RSP provisioning/monthly fees. Redtea Mobile-powered; console, on-demand/batch ordering, top-up/suspend APIs. API Quick Start says “Deposit funds for testing and refunding.” Changelog says offline post-paying changed to online pre-paying. API explicitly says **no sandbox**, live orders must be cancelled as needed; testing funds may be requested. | Best conditional fit; requires supplier-side funds before order. No zero-deposit credit agreement verified. API keys obtained in account; 8 requests/sec documented. [Customer FAQ](https://esimaccess.com/docs/primary-sim-esims-hotspot-sms-voice-of-using-esims/) describes generally data-only SKUs, data roaming required, hotspot support, no transfer of a once-scanned QR to a different device; [routing guide](https://esimaccess.com/docs/how-does-our-data-roaming-work/) says mainly Home-Routed Roaming. Treat these as supplier-level guidance and verify actual SKU/model details. FAQ says terms acceptance, business details for volume, possible account verification; card/PayPal/wire funding and non-expiring balance. [Partner terms](https://esimaccess.com/docs/terms-of-service/) explicitly say deposits cannot be refunded, prices may change without notice, partner bears transaction/tax/registration obligations, and agreement takes effect at account creation. Exact funding floor, account approval and final account-specific SKU terms/rates remain unverified; public Japan list benchmarks appear below. No account created and no live API calls made. |
| [Airalo Partners](https://partners.airalo.com/) | Public site lists Partner Integrations, Reseller Platform, Co-branding and Affiliate programs and a developer portal. [Reseller](https://partners.airalo.com/solutions/resellers) advertises purchasing/distributing/managing eSIMs; [affiliate](https://partners.airalo.com/solutions/affiliates) advertises commissions/referral links. | Reseller and affiliate are distinct. Opened affiliate FAQ states standard 10% commission on final sale after discounts; payout on the following month's28th, $15 threshold, bank/PayPal (PayPal extra2%). Application is reviewed before approval. Referral Airmoney is a separate program, not cash commission. No reseller credit/deposit terms or Neverday program approval verified. Affiliate could leave Airalo as seller and collector, avoiding Neverday inventory funding, subject to acceptance and written zero-fee terms. No API partnership claimed. |
| [1GLOBAL](https://www.1global.com/) | Advertises embedded branded connectivity, APIs and broad international connectivity/network licensing. | Sales-led commercial terms. No public no-setup/no-minimum/credit terms or applicable wholesale rates verified. Not the first budget candidate. |
| [Gigs](https://gigs.com/) | Advertises embedded cellular APIs and Carrier of Record/compliance/payment/tax services. | A relevant domestic enablement alternative; onboarding, fees, commitments, deposits and division of legal duties need a quote. No $0 arrangement verified; “Carrier of Record” is not proof that Neverday has no obligations. |

## Public Japan wholesale benchmarks

[Official public table](https://app.esimaccess.com/public/current-price), read on 2026-10-05; table last updated 2026-10-04 00:00UTC. These are published list figures, NOT negotiated quotes, Neverday approval or taxes/fees-inclusive fulfillment guarantees.

| Listed supplier SKU | Published USD | Prototype retail hypothesis |
|---|---:|---:|
| Japan 3GB 15Days (IIJ), `JP_3_15_IIJ` | $1.70 | $7 |
| Japan 5GB 30Days (IIJ), `JP_5_30_IIJ` | $2.70 | $11 |
| Japan 10GB 30Days (IIJ), `JP_10_30_IIJ` | $4.70 | $18 |

Default HK-IP rows showed the same 1.70/2.70/4.70; non-HK-IP rows showed2.86/3.96/6.60. The table's IIJ row labels IP asJP; that is vendor metadata, not measured local routing/latency or an operator/coverage guarantee. Exact network/FUP/top-up/activation and account-specific pricing still need verification. Supplier prices may change.

The Japanese demo was updated to those durations with independently chosen illustrative retail prices. Other destinations and the3GB/$7 top-up remain sample UX data. No public top-up quote or per-SKU coverage promise was inferred.

## Supplier cancellation versus cash refunds

[eSIM Access cancellation guide](https://esimaccess.com/docs/how-do-i-refund-an-unused-order/) says unused orders can be cancelled via console/API; activated eSIMs cannot be automatically cancelled and require support. Its FAQ says 180-day preactivation validity and that top-ups extend validity. That differs from Neverday’s simulated same-expiry top-up. Confirm exact per-SKU behavior. Cancelling an order does NOT mean the non-refundable wallet deposit is returned to the bank.

The public partner terms allocate permits/registrations and their costs to the partner; territory/advertising approvals, sanctions/data obligations, price-change risk and per-order liability limitations require review. Merely creating an account may enter an agreement, so no supplier account was created under the user’s prohibition.

## What remains necessary for a real supplier selection

Written setup/monthly/minimum/inventory/deposit/wallet-top-up terms; new-business credit approval and due dates; payment-method/FX fees; supplier entity/tax invoices; cancellation/refund windows and method (cash versus wallet credit); KYC/entity and jurisdiction eligibility; service SLA/support and liability.

Obtain an authenticated SKU quote with country/operator list, LTE/5G, speed/FUP, tethering, network priority, IP routing/latency, install deadline, activation trigger, expiry, reinstall/device transfer, long-stay/roaming restrictions, usage lag, top-up eligibility and outage/refund terms. Coverage lists and marketing country counts are not coverage guarantees.

Neverday's sample Japan/Europe plans, arrival-triggered validity, preactivation refund and same-expiry top-up are **simulated product decisions**, not established provider entitlements. Replace them with contracted SKU behavior.

## Settlement prevents “receipts first” from being assumed

[Stripe pricing](https://stripe.com/pricing), [payouts](https://docs.stripe.com/payouts), [refunds](https://docs.stripe.com/refunds), [disputes](https://docs.stripe.com/disputes) were retrieved successfully:

- Standard U.S. domestic-card example: 2.9% + $0.30; no setup/monthly fees advertised for standard Payments. International-card +1.5%, currency conversion +1% where applicable. Merchant eligibility, actual account pricing/reserves and taxes still need verification.
- First payout typically 7–14 days, with country/industry/risk exceptions. Payout schedule does not shorten settlement availability. A successful charge is not withdrawable cash.
- Original processing fees are not returned on refunds. Refunds draw on available balance; insufficient funds can delay card refunds.
- Disputes reverse the payment and debit the balance, plus dispute fees. Pricing page displayed a $15 received-dispute fee; additional defense/manual-dispute terms and actual account terms must be checked.
- Instant payouts cost extra and require eligibility; they are not a free or guaranteed new-business bridge.

No customer-funded immediate fulfillment sequence was verified. Deposit + unavailable card receipts = working capital. See BUSINESS.md for clearly assumed amounts.

## Evidence and limits

RESEARCH.md records reviewed statements and access failures. The cited vendor pages can change; current public text is not a binding quotation. Mint current retail plans, approved Neverday wholesale terms, wallet funding floor, supplier credit, onboarding approval, exact tax/regulatory classification and affiliate zero-setup eligibility and Neverday program acceptance remain unverified; public affiliate payout timing/threshold were reviewed.
