# Deployment and Neverday.com

## Current delivered source

Existing GitHub repository: https://github.com/anthonymarti/neverday/tree/connectivity-prototype/prototype

Repository creation tool was unavailable; the clearly related public repo was reused on a separate branch. Its root studio source and main ref were preserved. No private/public visibility was changed and no secrets were committed.

Existing Vercel project `neverday` remains linked to the repository. The existing Git integration automatically creates branch PREVIEWS on push; no production promotion occurred. No new paid project/resource/trial was created.

Tested app preview:
https://neverday-2w0jt8iyz-anthonyrmarti-7489s-projects.vercel.app/prototype/neverday-demo.html

This explicit HTML path is self-contained, so it avoids subfolder slash/relative-asset issues. Other branch deployments may exist from documentation commits; application source is unchanged unless stated.

## Access and plan blockers

Project preview authentication remains enabled, to preserve the studio's protection. Owner can use existing Vercel sign-in; anonymous browser reached Login. For external exploration, create a **deployment-only Share link** in the Vercel deployment UI and verify it in a fresh logged-out browser. Do not disable project-wide protection or put bypass secrets into public source/CI.

Connected team is Hobby. Vercel [Hobby](https://vercel.com/docs/plans/hobby) and [fair-use](https://vercel.com/docs/limits/fair-use-guidelines) restrict it to personal noncommercial use; definition includes advertising a service. A business-prototype exception was not verified. No upgrade or trial is authorized. Use local HTML for exploration; an already-paid eligible account or explicit Vercel eligibility is necessary to certify a $0 public business deployment.

An authenticated connector fetch of a protected URL is not public-access verification. Actual deployed browser journey remains blocked by authentication; local HTTP/file Chromium checks passed.

## Future dedicated project

Once hosting eligibility is established, import the intended source into a dedicated project, e.g. `neverday-connectivity-demo`, with:
- source branch explicitly `connectivity-prototype` (or a future dedicated repository);
- root directory `prototype`;
- Node22; build command `npm run build`; output directory `dist`;
- no install/runtime dependencies or production secrets for demo;
- prototype/vercel.json security headers;
- deployment-only sharing / intended public protection settings on that dedicated project;
- no paid integrations, functions, analytics, databases or Sandbox.

The connected create-project tool builds the repository's production branch; current production branch is the studio main. Do not repoint that branch or the existing studio project's root merely to simplify deployment. Use Vercel UI/CLI or an authorized source setup capable of selecting this branch.

For live commerce, introduce a secure backend and budget-approved services; do not reuse localStorage or mock checkout as billing infrastructure. Commercially eligible Pro/Enterprise may incur subscription/usage charges; an existing paid plan does not make all incremental usage free. Verify limits, spend controls and actual usage first.

## Domain: preserve current studio

Neverday.com redirects to www.neverday.com, which currently serves the studio. Production remains intact; no domain/DNS was changed. Domain purchase is unnecessary.

Future intended cutover, after commercial readiness and explicit intent to replace the studio:
1. Export existing DNS and list attached Vercel projects/domains. Record apex/www routing and all MX/TXT, SPF/DKIM/DMARC and unrelated records.
2. Deploy and browser-verify the connectivity project on its Vercel URL first.
3. Move/add apex and www attachment to the intended dedicated project. If Vercel reports a conflict, remove only the intended web-domain attachment from the old project after cutover approval.
4. Use the EXACT verification/CNAME/A/ALIAS records returned by Vercel for that project. Do not guess IPs or overwrite the zone.
5. Preserve mail and unrelated records. Configure apex↔www redirect consistently.
6. Verify HTTPS, all routes/assets and logged-out access after propagation; verify existing email records/service. Keep a rollback plan to the studio's known deployment/domain configuration.

No DNS credentials or full DNS zone inspection tool was available; current web service and Vercel project/domain linkage were inspected. Exact record values must be obtained at cutover, not fabricated here.
