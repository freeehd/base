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
