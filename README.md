# Everrise Packaging

Marketing website for Everrise Packaging, a flexible packaging manufacturer in India.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

The live domain is [https://everrisepackaging.com](https://everrisepackaging.com/). Set this on the host if you override it:

```bash
NEXT_PUBLIC_SITE_URL=https://everrisepackaging.com
```

Copy `.env.example` to `.env.local` for local builds.

```bash
npm run build
npm run start
```

After go-live, submit [https://everrisepackaging.com/sitemap.xml](https://everrisepackaging.com/sitemap.xml) in Google Search Console. Crawlers will also pick it up from `/robots.txt`.
