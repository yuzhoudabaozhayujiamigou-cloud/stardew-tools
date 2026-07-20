# AdSense Content Audit

Date: 2026-07-20

## Objective

Prepare `https://www.stardewprofit.com` for a new AdSense review after a low-value-content rejection. This audit does not guarantee approval and does not authorize the final review submission.

## Verified Technical State

- Production domain: `https://www.stardewprofit.com`
- Public `ads.txt`: HTTP 200 with the expected publisher record.
- AdSense script: present on representative content pages.
- Policy and trust routes: About, Contact, Privacy Policy, Cookie Policy, Terms, and Disclaimer.
- Non-Stardew Lethal Company cluster: excluded from sitemap and returned as HTTP 410 with `noindex, nofollow, noarchive` by middleware.

## Content Classification

### Core Pages

- `/`
- `/calculator`
- `/crops`
- `/blog`
- `/secret-notes`
- `/methodology`

These pages explain the site's purpose, calculation model, navigation, and primary user workflows.

### Decision Pages Improved in This Pass

- `/tools/keg-vs-preserves-jar`
- `/tools/seed-maker`
- `/tools/sprinkler-coverage-calculator`
- `/best-crops/summer`
- `/best-crops/fall`
- `/best-crops/winter`

Changes focus on assumptions, opportunity cost, worked examples, and links to the shared calculator rather than additional keyword variants.

### Supporting Pages Retained

Season, day-limit, greenhouse, and artisan guides are retained when they answer a distinct planning question. Quick-answer pages are not automatically removed: a short answer can be useful when it states assumptions and points to a deeper workflow.

### Pages Excluded from the Stardew Index

- `/guides/lethal-company/*`
- `/tools/lethal-company/*`
- `/tools/quota-calculator`

These routes are outside the site's Stardew Valley topic. They remain excluded from the sitemap; the Lethal Company routes return 410 and the quota calculator redirects to the main calculator.

## Submission Gates

Do not request another AdSense review until all of the following are true:

1. Production build and representative route smoke tests pass.
2. Sitemap contains the core, seasonal, methodology, and trust pages.
3. Public `ads.txt` still returns the publisher record after deployment.
4. AdSense has had time to recrawl the site and Ads.txt status.
5. The account owner completes required payment information and site association.
6. The account owner explicitly confirms the final `Apply for review` action.

## Residual Risks

- Several quick-answer articles target nearby search intents and should be consolidated only with traffic and Search Console evidence; mass deletion without that evidence could remove useful entry pages.
- Existing calculator code has non-blocking unused-variable lint warnings.
- Google makes the final quality decision; passing these gates improves review readiness but cannot guarantee approval.
