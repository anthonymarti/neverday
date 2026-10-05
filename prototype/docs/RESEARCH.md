# Reviewed primary-source evidence — 2026-10-05

Research was read-only: HTTP extraction plus headless Chromium rendering, including opening FAQ disclosure panels. No paid trial, account signup, activation, commercial agreement, purchase or outbound sales message. Public terms are subject to change; nothing here establishes an approved partnership.

The source runs are public GitHub Actions logs:
- [Initial sources and browser journey](https://github.com/anthonymarti/neverday/actions/runs/37255993106)
- [Rendered API / hosting sources](https://github.com/anthonymarti/neverday/actions/runs/37256461008)
- [Partner terms, FAQ, cancellation and Mint owner announcement](https://github.com/anthonymarti/neverday/actions/runs/37256937712). That run's HTTP browser journey passed, but standalone test failed and was fixed in a later commit; source-reading step succeeded independently.

## Business benchmarks

[Popcorn homepage](https://popcorn.space/): “Enjoy unlimited global service for $69/mo.” Advertises 180+ countries, unlimited talk/text/data, U.S. number transfer, backup eSIM and dialer. “Unlimited” is expressly conditional. [Rules](https://popcorn.space/rules): near 50 GB/month signals imbalance; occasional hotspot, not home-Wi-Fi replacement; individual use, not resale/sharing/commercial use. Underlying supplier contracts, primary network identity and wholesale API rights were not verified.

[Mint homepage](https://www.mintmobile.com/) and help path returned 403. [T-Mobile acquisition announcement](https://www.t-mobile.com/news/business/t-mobile-closes-acquisition-mint-and-ultra-mobile) returned 200: acquisition of Ka’ena including Mint/Ultra/Plum; Mint/Ultra connectivity on T-Mobile network; direct-to-consumer prepaid brands. The 2024 article includes multi-month upfront-payment and promotional pricing footnotes, which are NOT current retail offers. No Mint reseller access inferred.

## Wholesale and embedded candidates

[eSIM Go](https://esimgo.com/): “No platform fees: you pay wholesale on what you sell and set your own retail on top.” Same page states “minimum spend is $10,000 a month,” credit for plans, not a fee. [Docs](https://docs.esim-go.com/) describe signup/portal/API key and API/webhooks. Current public minimum excludes this budget. Country/operator counts are vendor marketing, not guaranteed coverage.

[eSIM Access](https://esimaccess.com/): “No commitments. No minimums. Just start.” “No MOQ. Create an account, buy an eSIM and get started.” Powered by Redtea Mobile, order/topup/suspend and on-demand/batch plans.

[API](https://docs.esimaccess.com/): Quick Start “Deposit funds for testing and refunding.” Change history: “Offline post-paying changed to online pre-paying.” “There is no Sandbox environment. Cancel eSIM orders as needed in our live environment. Request funds for testing.” API keys in account; 8 requests/sec. We did not request testing funds, create account or provision.

[FAQ](https://esimaccess.com/faq/), opened disclosures: terms acceptance needed, business details for volume, possible verification; card/debit via Stripe, PayPal and wire; balance does not expire; pricing shown in plan list; 180-day preactivation validity, plan-length validity after activation, top-ups extend validity. FAQ wording is broad; inspect actual SKU.

[Partner agreement](https://esimaccess.com/docs/terms-of-service/), page last updated 1 September 2025: “deposit into eSIM Access can’t be refunded”; agreement takes effect at Account Creation; partner bears permits/registrations, transaction/settlement fees and respective tax obligations. Wholesale pricing can change without prior notice. Territory/advertising, sanctions/privacy and liability provisions need review. Reading is not acceptance; no account was made.

[Unused-order refund guide](https://esimaccess.com/docs/how-do-i-refund-an-unused-order/): cancel unused eSIM through console/API; activated eSIM cannot be automatically cancelled and needs support. Wallet deposit nonrefundability is separate.

[Airalo Partners](https://partners.airalo.com/): integration, reseller, co-branding, affiliate programs and developer portal advertised. Initial airalo.com/partners and guessed detailed paths returned404; we do not infer detailed funding/commission terms from them.

[1GLOBAL](https://www.1global.com/) and [Gigs](https://gigs.com/) pages read successfully. Advertise embedded API connectivity; Gigs describes Carrier of Record/compliance/tax/payment services. Public $0 startup/minimum/credit quotes not found. Sales approval still needed.

## Payments and cash availability

[Stripe pricing](https://stripe.com/pricing): standard U.S. domestic-card rate2.9%+$0.30; international +1.5%, FX +1% where applicable; no setup/monthly fees for standard Payments advertised; received-dispute $15 displayed. Do not assume eligibility, custom account pricing or every product is free.

[Payouts](https://docs.stripe.com/payouts): initial payout typically7–14days, varies by country/industry/risk. Schedule does not shorten availability; holds/bank delay matter. Instant payouts are not a guaranteed free initial bridge.

[Refunds](https://docs.stripe.com/refunds): original processing fees not returned; refunds use available balance; insufficient available funds can leave card refunds pending. Customers may see refunds in about5–10businessdays; not a fulfillment guarantee.

[Disputes](https://docs.stripe.com/disputes): reversed amount and fees debit balance. Paid supplier inventory may remain consumed.

## Jurisdiction and free-resource eligibility

[USAC contribution guidance](https://www.usac.org/service-providers/contributing-to-the-usf/who-must-contribute/) includes cellular/local resellers and explains some contribution-exempt providers still need Form499-A. This is a classification gate, not a finding that Neverday must or need not file. FCC universal-service page returned403. Actual entity/state, data-only service classification and tax obligations require qualified review before commerce.

[GitHub official Actions billing documentation](https://github.com/github/docs/blob/main/content/billing/concepts/product-billing/github-actions.md), retrieved directly in prior read: standard hosted runners in public repositories free; larger runners charged. Artifacts/cache share paid storage quota; logs/job summaries do not count artifact storage. This repo is public; ubuntu-latest only, no artifact uploads/cache/larger runners. No paid CI resource enabled.

[Vercel Hobby](https://vercel.com/docs/plans/hobby), readable [Markdown](https://vercel.com/docs/plans/hobby.md): free but restricted to noncommercial personal use; limits can pause service, e.g.100deployments/day. Connected team reports Hobby.
[Fair use](https://vercel.com/docs/limits/fair-use-guidelines.md), last updated 2026-09-14: “All commercial usage ... requires either a Pro or Enterprise plan.” Definition includes financial gain and advertising products/services. No business-prototype exception verified. Therefore this project cannot be certified as an eligible $0 public business deployment on that plan. No upgrade or paid trial started. Existing protected branch previews were generated by the existing Git integration; studio production/domain remain unchanged. Use local demo for exploration and an existing eligible plan or explicit hosting approval for public business deployment.

## Device/coverage limitations

Manufacturer guides are linked in the product for exact model/region compatibility; attestation is not an automated compatibility check. Carrier unlock is necessary for the concept. Neverday sample countries/operators/speeds are not contracted. Data-only eSIM does not supply ordinary cellular voice/SMS or an emergency-calling service. Home-line services and emergency-device behavior belong to the user's existing provider/device; confirm independently. No invented activation credentials or network guarantees.

## Additional publicly linked evidence

[Read-only terms run](https://github.com/anthonymarti/neverday/actions/runs/37257457252) succeeded. [MOQ/fees](https://esimaccess.com/docs/do-i-need-to-sign-a-contract-and-a-moq-to-kickoff/) explicitly says no MOQ, monthly setup, eSIM activation or RSP provisioning/monthly fees; signing up agrees to commercial terms. These free platform fees do not remove prepaid service cost.

[Activation methods](https://esimaccess.com/docs/what-are-the-available-esim-activation-methods/) describes QR, EID push, in-app provisioning, Apple Universal Link and manual genuine SM-DP+/AC. None is connected in the demo.

[Public pricing overview](https://app.esimaccess.com/public) advertises a publicly linked current-price tool and daily updates; initial view last-updated Oct4. It is not an approved negotiated quote. The actual Japan price table was subsequently reviewed, as recorded below.

[Airalo reseller](https://partners.airalo.com/solutions/resellers) describes buy/distribute/manage workflow, own brand/pricing and multilingual support. [Affiliate](https://partners.airalo.com/solutions/affiliates) advertises referral commissions and a dashboard; detailed commission/payout disclosures require their opened FAQ or written agreement. No signup/form submission.

[Customer FAQ](https://esimaccess.com/docs/primary-sim-esims-hotspot-sms-voice-of-using-esims/) says generally data-only unless minutes/SMS explicitly listed, travel-line roaming required, hotspot supported subject to device, and once-scanned QR cannot transfer to another device. [Routing](https://esimaccess.com/docs/how-does-our-data-roaming-work/) says primarily Home-Routed Roaming: visited network connects to home routing rather than necessarily local internet breakout. Do not infer local IP, latency or unrestricted tethering from a country name.

## Opened affiliate disclosures and funding methods

[Primary-source run](https://github.com/anthonymarti/neverday/actions/runs/37257637196) succeeded. Airalo [affiliate FAQ](https://partners.airalo.com/solutions/affiliates), expanded: standard10% commission on final sale after discounts; following month's28th payout; $15 bank/PayPal threshold; PayPal additional2%. Applications are reviewed. Cash affiliate commissions differ from referral Airmoney. No approval or zero-setup contract obtained.

[eSIM Access funding methods](https://esimaccess.com/docs/what-payment-methods-are-accepted/) accepts Stripe cards/PayPal, requests wire for deposits over$3,000 and offers opt-in auto-recharge. The $3,000 wire threshold is NOT a required minimum deposit. No card details or recharge authorization supplied. Exact minimum wallet top-up remains unanswered.

[Actual public price table](https://app.esimaccess.com/public/current-price) returned200 but still showed “Loading products...” during the initial rendered check. No rate was extracted or inferred. This initial failure was later resolved with a longer read, documented below; marketing homepage says prices are visible in an account, but account signup accepts commercial terms and was not performed.

## Final public-price evidence

[Longer rendered read](https://github.com/anthonymarti/neverday/actions/runs/37257839666) succeeded without an account. After waiting for the public table to load and filtering Japan, the supplier showed64rows; last updated10/4/2026 00:00:06. IIJ-labelled `JP_3_15_IIJ` $1.70, `JP_5_30_IIJ` $2.70, `JP_10_30_IIJ` $4.70; the IP column showsJP. HK default versions showed the same amounts; non-HK-IP versions2.86/3.96/6.60. These are list benchmarks with no Neverday approval/coverage guarantee. Full network/SKU/tax/funding terms were not verified.

The demo Japan packs were updated to3 GB/15 days $7,5 GB/30 days $11,10 GB/30 days $18. Sample retail prices are independent choices, not live contracted offers. Economics now use the published $2.70 benchmark as a conditional scenario rather than an invented wholesale quote. No funding floor, deposit refund exception or new-business credit was found.

The FTC disclosure guide URL https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers returned403. Affiliate disclosure obligations remain a legal launch gate; this inaccessible page was not claimed as inspected substantive guidance. Verify the current Endorsement Guides/disclosure rules before publishing affiliate links.
