export const SITE_NAME = "Everrise Packaging";
export const SITE_EMAIL = "everrisepack@gmail.com";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://everrisepackaging.com"
).replace(/\/$/, "");

export const SITE_DESCRIPTION =
  "Everrise Packaging is a flexible packaging manufacturer in India offering custom laminated rolls, printed pouches and ready-to-ship packaging for diverse industries.";

export const NAV_ROUTES = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/products", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/industry", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/about-us", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/contact-us", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/investor-relations", changeFrequency: "weekly" as const, priority: 0.6 },
] as const;
