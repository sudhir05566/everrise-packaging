import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { MAPS_EMBED_SRC, MAPS_SHARE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Everrise Packaging for flexible packaging quotes, product inquiries, and support. We typically respond within 24 hours.",
};

const contactItems = [
  {
    title: "Email",
    description: "Reach our team directly via email",
    href: "mailto:everrisepack@gmail.com",
    label: "everrisepack@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    title: "Phone",
    description: "Speak with our support team (10 am – 6 pm)",
    href: "tel:+918882407794",
    label: "+91 88824 07794",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M6.5 3.5h3.2l1.3 4.1-2 1.2a12.5 12.5 0 0 0 5.2 5.2l1.2-2 4.1 1.3v3.2c0 .9-.7 1.6-1.6 1.6A14.9 14.9 0 0 1 4.9 5.1c0-.9.7-1.6 1.6-1.6Z" />
      </svg>
    ),
  },
  {
    title: "Address",
    description: "Sales / Admin Office, Everrise Packaging",
    href: MAPS_SHARE_URL,
    label: "D-1, Meerut Road Industrial Area, Ghaziabad, Uttar Pradesh 201001",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
] as const;

export default function ContactPage() {
  return (
    <main className="contact-page">
        <section className="contact-page-hero">
          <h1>Contact Us</h1>
          <p>
            We&apos;re here to answer your questions, explore opportunities, and help bring your ideas to life.
            Reach out to our team — we typically respond within 24 hours.
          </p>
        </section>

        <section className="contact-info-section">
          <div className="contact-info-grid">
            {contactItems.map((item) => (
              <article className="contact-info-card" key={item.title}>
                <span className="contact-info-icon">{item.icon}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href={item.href} target={item.title === "Address" ? "_blank" : undefined} rel={item.title === "Address" ? "noopener noreferrer" : undefined}>
                  {item.label}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-map-section" aria-label="Office location map">
          <iframe
            title="Everrise Packaging office location"
            src={MAPS_EMBED_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </section>

        <section id="get-a-quote" className="quote-section contact-quote-section">
          <div className="quote-card">
            <div className="quote-heading">
              <h2>Get a Quote!</h2>
              <p>
                Share your requirement and we&apos;ll get back with the best packaging solution
                <br />
                within 24 hours.
              </p>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>
  );
}
