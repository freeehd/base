# Base Trading website

Next.js 16 and React 19 marketing website for Base Trading, a USA-based international trading and marketplace-sales company.

## Site structure

- `/` — homepage, product catalog, marketplace overview, services, industries, process and FAQ.
- `/products` — seven product categories with equipment/goods filters and category-specific quote links.
- `/online-stores` — Amazon, Walmart Marketplace, eBay and TikTok Shop; brand partnerships.
- `/services` — sourcing, new/used equipment, import/export, wholesale, marketplace operations and procurement.
- `/about` — company background, sourcing and service approach.
- `/contact` — quote request that opens a drafted email in the user's configured email app.

The request form **does not send data to a backend**. Users must review and send the email in their email app. If no email app is configured, they can contact `contact@thebasetrading.com` directly. Never display a submitted/success state without an actual receipt.

## Development

```bash
npm ci
npm run dev
npm run build
```

The supplied `Base Trading – Homepage.html` is the content source for the November 2026 update. The site's existing dark/amber brand language, fonts, components and layout are preserved rather than copying the source HTML's separate stylesheet.

Product availability and used equipment condition are confirmed during quotation. Marketplace mentions are descriptions, not verified storefront links. Imagery is illustrative, not proof of current stock.

# Build stability

This repository uses **npm** as its package manager. The authoritative lockfile is `package-lock.json`.

## Install and build

```bash
npm ci
npm run build
```

The production build intentionally uses `next build --webpack` to bypass a Turbopack/PostCSS worker failure reported with Next.js 16.3.0. Tailwind CSS v4 remains configured through `@tailwindcss/postcss` in `postcss.config.mjs`.

For a clean local rebuild:

```bash
npm run clean
npm ci
npm run build
```

`.next/` is already gitignored and is not tracked in GitHub. Deployment platforms may maintain separate build caches; clear those through their deployment settings if necessary.

To retry the Turbopack production build once the underlying worker issue is resolved, use `npm run build:turbo`. Restore the default build command only after a successful test.

**Note:** This is a targeted bundler workaround, not a dependency upgrade. The npm lockfile's root package name has been synchronized with `package.json`; dependency versions are unchanged. A dependency upgrade should be done separately with registry access and a regenerated lockfile.

## Security and bot traffic

- Production uses Next.js 16.4.6 and npm overrides for `proxy-addr >=2.0.8` and `systeminformation >=5.33.16`. The lockfile must be regenerated with `npm install --package-lock-only` and committed before deploying.
- `next.config.mjs` applies browser-facing security headers.
- `proxy.ts` rejects common scanner probes such as `/.env`, `/.git`, `/wp-login.php` and `/xmlrpc.php` without inspecting or blocking normal visitors or legitimate search engine crawlers.
- `robots.txt` disallows indexing internal API and framework paths. Robots directives are voluntary and **not** a security boundary.
- The existing quote form opens the visitor's email app, so there is currently no public form-submission endpoint to rate-limit.
- **Important hosting action:** Enable Vercel Firewall managed rules and rate limiting/challenges for abnormal request volume and bot attacks in the Vercel dashboard. Application-level checks cannot provide distributed rate limiting or DDoS defense.
- The GitHub security workflow audits production dependencies and builds on PRs and weekly; Dependabot opens upgrade PRs.
- Do not treat a successful npm audit as proof that all security issues are eliminated. Review transitive and development dependency advisories and rerun a complete `npm audit`.
