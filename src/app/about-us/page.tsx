import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Everrise Packaging — a flexible packaging manufacturer established in 1986, delivering quality laminated pouches and films across India.",
};

const values = [
  [
    "Integrity, Always",
    "We believe strong partnerships are built on trust. Through transparent processes, honest communication, and consistent delivery, we ensure reliability at every stage of production.",
  ],
  [
    "Precision in Quality",
    "Every pouch we manufacture reflects our commitment to precision. From material selection to lamination and printing, we maintain strict quality standards to deliver performance you can depend on.",
  ],
  [
    "Built Around You",
    "Your product, your timelines, your growth — our solutions are designed around them. We collaborate closely to deliver packaging that enhances shelf presence and scales with your business.",
  ],
] as const;

export default function AboutPage() {
  return (
    <main className="about-page">
        <section className="about-page-hero">
          <h1>About Everrise</h1>
        </section>

        <section className="about-story-section">
          <div className="about-story-grid">
            <div className="about-story-copy">
              <h2>Our Story</h2>
              <p>
                Everrise Packaging was established in <strong>1986</strong> as a manufacturer specializing in high-quality flexible laminated packaging solutions. With decades of technical expertise and a customer-first approach, our goal has remained clear —{" "}
                <em>to make quality packaging keeping the customer at the core.</em>
              </p>
              <p>
                Our Rewari facility features advanced imported machinery, including Roto Gravure printing, pouching, lamination, spout fixing, slitting, and inspection. We believe in fostering a culture that values accountability, reliability, and security — delivering packaging that protects products and strengthens brands.
              </p>
            </div>
            <div className="about-story-media">
              <Image
                src="/images/14gGexd7p9BeY5RYZxbEeSjMrzAa647.png"
                alt="Everrise Packaging manufacturing facility"
                width={720}
                height={520}
                className="about-story-image"
                priority
              />
            </div>
          </div>
        </section>

        <section className="about-values-section">
          <div className="about-values-grid">
            <h2>Our Values</h2>
            <ul className="about-values-list">
              {values.map(([title, description]) => (
                <li key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
  );
}
