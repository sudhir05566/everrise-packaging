import Image from "next/image";
import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Everrise Packaging pouches, laminated rolls, and custom flexible packaging for food, pharma, cosmetics, and more.",
};

const products = [
  ["Printed Laminated Rolls", "Efficient, high-quality film solutions designed for speed, shelf appeal, and seamless form-fill-seal operations.", "/images/ZsyyMSfvjRj77FHYIbPWPWdiwMdb0f.png"],
  ["Stand Up Pouch", "Durable, shelf-ready pouches with resealable zippers for visibility, freshness, and strong brand presence.", "/images/LbDetZ3Ll1kGICRCOWDqbo3n7743a81.png"],
  ["Spout Pouch", "Leak-proof pouches for liquids that are easy to pour, reseal, and transport with less bulk.", "/images/gmH7z9r6stLjmbFuOSNRdGJ0Ug4b04c.png"],
  ["Centre-Seal Pouch", "A reliable solution for high-speed packaging lines, compact, durable, and adaptable.", "/images/icNNypdlCsBCnVJOiTp1taF9Qb04c.png"],
  ["Three Side Seal Pouch", "Ideal for sachets, samples, and single-serve packs with minimal storage space.", "/images/3ztfIyIUkHhhJIcRumHsd8vAVIb04c.png"],
  ["Gusset Pouch", "Expandable pouches that offer space-saving storage and a clean shelf presence.", "/images/LbDetZ3Ll1kGICRCOWDqbo3n774b04c.png"],
  ["Shape Pouch", "Distinctive pouch shapes that reflect your brand while staying functional and shelf-ready.", "/images/3ztfIyIUkHhhJIcRumHsd8vAVIb04c.png"],
  ["Vacuum Pouch", "Seals in freshness and locks out air for long-lasting quality and safety.", "/images/gmH7z9r6stLjmbFuOSNRdGJ0Ug4b04c.png"],
  ["Flat Bottom Pouch", "Maximize shelf space and branding with 5D pouches for coffee, snacks, or pet food.", "/images/LbDetZ3Ll1kGICRCOWDqbo3n7743a81.png"],
  ["Heavy Duty Bags", "Reinforced, tear-resistant bags built for industrial and bulk use.", "/images/ZsyyMSfvjRj77FHYIbPWPWdiwMdb0f.png"],
  ["Quad Seal Pouches", "Four-side seal design offering strength, shape, and premium branding space.", "/images/icNNypdlCsBCnVJOiTp1taF9Qb04c.png"],
  ["Stock Pouches", "Off-the-shelf packaging in standard sizes, available for instant dispatch.", "/images/3ztfIyIUkHhhJIcRumHsd8vAVIb04c.png"],
] as const;

export default function ProductsPage() {
  return (
    <main>
        <section className="products-catalogue">
          <div className="products-catalogue-intro">
            <p className="products-badge"><span aria-hidden="true">▣</span> Types of Packaging</p>
            <h1>Our Range of <em>Customizable</em> Flexible Packaging</h1>
            <p>High-quality flexible packaging with fast turnaround times, low MOQs, and custom designs to elevate your brand.</p>
            <a className="button button-primary" href="#get-a-quote">Get a Quote <span aria-hidden="true">↗</span></a>
          </div>
          <div className="products-catalogue-grid">
            {products.map(([title, description, image]) => (
              <article className="catalogue-card" key={title}>
                <div className="catalogue-image">
                  <Image src={image} alt={`${title} packaging example`} fill sizes="(max-width: 650px) 100vw, (max-width: 980px) 50vw, 33vw" />
                </div>
                <div className="catalogue-copy">
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <a href="#get-a-quote" aria-label={`Get a quote for ${title}`}>Get a quote <span aria-hidden="true">↗</span></a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="get-a-quote" className="quote-section products-quote-section">
          <div className="quote-card">
            <div className="quote-heading">
              <h2>Get a Quote!</h2>
              <p>Share your requirement and we&apos;ll get back with the best packaging solution<br />within 24 hours.</p>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>
  );
}
