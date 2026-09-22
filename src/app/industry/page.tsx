import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Industries",
  description: "Flexible packaging solutions from Everrise Packaging for food, beverages, pharmaceuticals, cosmetics, and industrial brands.",
};

const industries = [
  ["Tea", "🫖"],
  ["Coffee", "☕"],
  ["Spices & Seasonings", "🌶️"],
  ["Pulses", "🌾"],
  ["Pet Food", "🐶"],
  ["Pharmaceuticals", "💊"],
  ["Snacks & Bakery", "🍪"],
  ["Atta / Flours", "🥖"],
  ["Sauces, Dips & Oil", "🫙"],
  ["Dry-fruit", "🥜"],
  ["Frozen Food", "❄️"],
  ["Hot & Cold Beverages", "🥤"],
  ["Automobile Accessories", "🚘"],
  ["Electronic Accessories", "⚙️"],
  ["Detergent", "🧴"],
  ["Confectionery", "🍬"],
  ["Hand Wash & Shampoo", "🧴"],
  ["Agricultural Products", "🌱"],
  ["Cosmetics", "💄"],
] as const;

export default function IndustryPage() {
  return (
    <main>
        <section className="industry-directory">
          <div className="industry-directory-intro">
            <p className="industry-directory-badge">✦ 13+ Industries</p>
            <h1>Trusted Packaging Experts<br />Across Diverse Industries</h1>
            <p>From food to pharma, we manufacture high-quality packaging across<br />the world that protects, preserves, and promotes your products.</p>
            <div className="industry-directory-actions">
              <a className="button button-primary" href="https://wa.me/918882407794">Talk to Us! <span aria-hidden="true">↗</span></a>
              <a className="button button-secondary" href="#get-a-quote">Get a Quote! <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="industry-directory-pills">
            {industries.map(([name, icon]) => (
              <a href="#get-a-quote" key={name}><span aria-hidden="true">{icon}</span>{name}</a>
            ))}
          </div>
        </section>
        <section id="get-a-quote" className="quote-section industry-quote-section">
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
