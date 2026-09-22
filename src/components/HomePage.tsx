import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";

const packagingTypes = [
  ["Printed Laminated Rolls", "Efficient, high-quality film solutions designed for speed, shelf appeal, and seamless form-fill-seal operations.", "roll"],
  ["Stand Up Pouch", "Durable, shelf-ready pouches with resealable zippers for visibility, freshness, and strong brand presence.", "standup"],
  ["Spout Pouch", "Leak-proof pouches for liquids that are easy to pour, reseal, and transport with less bulk.", "spout"],
  ["Centre-Seal Pouch", "A reliable solution for high-speed packaging lines, compact, durable, and adaptable.", "center"],
  ["Three Side Seal Pouch", "Ideal for sachets, samples, and single-serve packs with minimal storage space.", "seal"],
  ["Gusset Pouch", "Expandable pouches that offer space-saving storage and a clean shelf presence.", "gusset"],
  ["Shape Pouch", "Distinctive pouch shapes that reflect your brand while staying functional and shelf-ready.", "shape"],
  ["Vacuum Pouch", "Seals in freshness and locks out air for long-lasting quality and safety.", "vacuum"],
  ["Flat Bottom Pouch", "Maximize shelf space and branding with 5D pouches for coffee, snacks, or pet food.", "flat"],
  ["Heavy Duty Bags", "Reinforced, tear-resistant bags built for industrial and bulk use.", "heavy"],
  ["Quad Seal Pouches", "Four-side seal design offering strength, shape, and premium branding space.", "quad"],
  ["Stock Pouches", "Off-the-shelf packaging in standard sizes, available for instant dispatch.", "stock"],
] as const;

const packagingImages = {
  roll: "/images/ZsyyMSfvjRj77FHYIbPWPWdiwMdb0f.png",
  standup: "/images/LbDetZ3Ll1kGICRCOWDqbo3n7743a81.png",
  spout: "/images/gmH7z9r6stLjmbFuOSNRdGJ0Ug4b04c.png",
  center: "/images/icNNypdlCsBCnVJOiTp1taF9Qb04c.png",
  seal: "/images/3ztfIyIUkHhhJIcRumHsd8vAVIb04c.png",
  gusset: "/images/LbDetZ3Ll1kGICRCOWDqbo3n774b04c.png",
  shape: "/images/3ztfIyIUkHhhJIcRumHsd8vAVIb04c.png",
  vacuum: "/images/gmH7z9r6stLjmbFuOSNRdGJ0Ug4b04c.png",
  flat: "/images/LbDetZ3Ll1kGICRCOWDqbo3n7743a81.png",
  heavy: "/images/ZsyyMSfvjRj77FHYIbPWPWdiwMdb0f.png",
  quad: "/images/icNNypdlCsBCnVJOiTp1taF9Qb04c.png",
  stock: "/images/3ztfIyIUkHhhJIcRumHsd8vAVIb04c.png",
} as const;

const industries = ["Snacks & Bakery", "Spices & Seasonings", "Confectionery", "Cosmetics", "Tea", "Beverages", "Pharmaceuticals", "Pet Food", "Atta / Flours", "Sauces, Dips & Oil", "Dry-fruit", "Frozen Food", "Hot & Cold Beverages", "Automobile Accessories", "Electronic Accessories", "Detergent", "Hand Wash & Shampoo", "Agricultural Products"];
const testimonials = [
  ["Anuva Kakkar", "I found Everrise Packaging in 2021 and ever since then I've been sourcing packaging from them for Tiggle. We create hot chocolate and iced chocolate blends, and they supply us with 200g, 100g, and sachet packages. I love working with the Everrise team, they always understand my requirements perfectly and it is just so easy to work with them.", "/images/NxVRiqSmXc709vLRb9NAiFKTk42889.png"],
  ["Dr Nishita MD Ayurveda", "Wonderful service. The packing material is standard with good perfect printing. If anyone is looking for good packing printing in budget I would suggest Everrise Packaging.", "/images/14gGexd7p9BeY5RYZxbEeSjMrzA47cb.png"],
  ["Guneet Khurana", "We at Vecan trust Durapack pouches with our frozen food products. They are reliable and have supplied good quality products.", "/images/35ebCfIPWUzhmbzhvJYg3zGy412f3.png"],
  ["Neel Kumar", "They helped me in choosing appropriate packaging solutions and stand up pouch design for custom order. 5/5 for knowledge and service.", "/images/rtpwZQoI9B26nm0ONFefH3ZSMXg5be1.png"],
  ["Tanushka Gandhi", "Extremely satisfied with the purchase. Great quality product and got support from the team in choosing the right packaging. Thanks Everrise Packaging, looking forward to continue doing business with you.", "/images/zgMBIwfzTrzCAenr0LYFdiQU0w7654.png"],
  ["Dr Divya S", "We've been working with Everrise Packaging for several years, and their quality and consistency have never disappointed us. The packaging is durable, the printing is sharp, and deliveries are always on time. Their competitive pricing and professional approach make them a trusted long-term partner for our brand.", "/images/YIXsqso39gxIWOXaTC2T2NU80nQ5c57.png"],
] as const;
const faqs = [
  ["What types of packaging do you offer?", "We specialize in high-quality flexible packaging including pouches, laminated rolls, and customized printed films across food, pharma, cosmetics, and more."],
  ["Do you offer custom printing options?", "Yes. Choose from rotogravure, digital, static, and flexographic printing depending on your volume, finish, and turnaround requirements."],
  ["What is your minimum order quantity (MOQ)?", "Our custom pouch MOQ starts at 15,000 pieces, while ready-to-ship options are available from 500 pieces."],
  ["Do you have ready-to-ship packaging options?", "Yes. Standard-size standup, spout, side-gusset, and single-serve pouches are available for quick dispatch."],
  ["Are there any special considerations for packaging specialized teas or green teas?", "Yes. We recommend high-barrier laminated structures that protect aroma, freshness, and light-sensitive ingredients."],
  ["What industries do you serve?", "We support food, beverages, pharma, cosmetics, agriculture, pet food, automotive, and electronic accessory brands."],
  ["Do you ship internationally?", "We can support international requirements. Share your destination and product details with our team for confirmation."],
  ["How can I get a quote?", "Share your packaging requirements through the quote form or contact our team directly. We respond within 24 hours."],
] as const;

const heroPackagingImages = [
  "/images/LbDetZ3Ll1kGICRCOWDqbo3n7743a81.png",
  "/images/icNNypdlCsBCnVJOiTp1taF9Qb04c.png",
  "/images/3ztfIyIUkHhhJIcRumHsd8vAVIb04c.png",
  "/images/ClsXDBsw4AlrkRaBX8iOh0xZmo8079.png",
  "/images/ZsyyMSfvjRj77FHYIbPWPWdiwMdb0f.png",
  "/images/gmH7z9r6stLjmbFuOSNRdGJ0Ug4b04c.png",
  "/images/LbDetZ3Ll1kGICRCOWDqbo3n774b04c.png",
  "/images/14gGexd7p9BeY5RYZxbEeSjMrzAa647.png",
];

const clientLogos = [
  ["Chai Point", "/images/CBAkZgU27ZmOaSl82TRHVGmmg5531.png", 512, 278],
  ["Urban Company", "/images/mWVXulHk5ZScXrk3dsjXmhIBoEA1625.png", 734, 207],
  ["The Cinnamon Kitchen", "/images/NxVRiqSmXc709vLRb9NAiFKTk42889.png", 151, 150],
  ["Pluck", "/images/OWY42Rp5TdQAKCpnaor7XTPH4U439c.png", 688, 256],
  ["DOKI", "/images/rtpwZQoI9B26nm0ONFefH3ZSMXg5be1.png", 200, 200],
  ["Harley-Davidson", "/images/zgMBIwfzTrzCAenr0LYFdiQU0w7654.png", 320, 320],
  ["Tiggle", "/images/YIXsqso39gxIWOXaTC2T2NU80nQ5c57.png", 568, 221],
  ["Blue Tokai", "/images/35ebCfIPWUzhmbzhvJYg3zGy412f3.png", 400, 400],
] as const;

const industryShowcase = [
  ["Snacks & Bakery", "/images/gmH7z9r6stLjmbFuOSNRdGJ0Ug4b04c.png"],
  ["Spices & Seasonings", "/images/icNNypdlCsBCnVJOiTp1taF9Qb04c.png"],
  ["Confectionery", "/images/ZsyyMSfvjRj77FHYIbPWPWdiwMdb0f.png"],
  ["Cosmetics", "/images/ClsXDBsw4AlrkRaBX8iOh0xZmo8079.png"],
  ["Tea", "/images/3ztfIyIUkHhhJIcRumHsd8vAVIb04c.png"],
  ["Beverages", "/images/LbDetZ3Ll1kGICRCOWDqbo3n7743a81.png"],
] as const;

const aboutHighlights = [
  ["/images/14gGexd7p9BeY5RYZxbEeSjMrzAa647.png", "Our Manufacturing Facility", "Spread across 70,000 sq. ft. of innovation and state-of-the-art technology."],
  ["/images/3HGTOtwYZICdUUvjwiLqPsMJmWUf13c.png", "Advanced Printing Technology", "Monthly production of 200 metric tons of film laminate."],
  ["/images/1T91tirTFYU8KI27DW5kjp0InMAddc7.png", "Quality Check - Timely Dispatch", "Smart automation with quality checks at every step."],
] as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="section-container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> 40 YEARS OF RELIABLE PACKAGING</p>
            <h1>Manufacturing Custom Laminated Rolls & Pouches</h1>
            <p className="hero-meta"><span>🇮🇳 Made in India</span><b>|</b><span>⏳ Fast Turnaround Times</span><b>|</b><span>📦 High - Low MOQs</span></p>
            <p className="hero-lead">Trusted, fresh packaging that enhances your brand. Custom premium packaging for businesses old and new.</p>
            <p className="hero-note">Food-grade Packaging, Fast delivery across India</p>
            <div className="hero-actions"><a className="button button-primary" href="https://wa.me/918882407794">Talk to Us! <Arrow /></a><a className="button button-secondary" href="#get-a-quote">Get a Quote <Arrow /></a></div>
          </div>
          <div className="hero-visual hero-visual-marquee" aria-hidden="true">
            <div className="hero-gallery-column hero-gallery-up">
              {heroPackagingImages.slice(0, 4).map((image, index) => (
                <Image src={image} alt="" className="hero-gallery-image" key={`up-${image}`} width={700} height={1000} sizes="50vw" priority={index < 2} />
              ))}
              {heroPackagingImages.slice(0, 4).map((image) => (
                <Image src={image} alt="" className="hero-gallery-image hero-gallery-dup" key={`up-dup-${image}`} width={700} height={1000} sizes="50vw" />
              ))}
            </div>
            <div className="hero-gallery-column hero-gallery-down">
              {heroPackagingImages.slice(4).map((image) => (
                <Image src={image} alt="" className="hero-gallery-image" key={`down-${image}`} width={700} height={1000} sizes="50vw" />
              ))}
              {heroPackagingImages.slice(4).map((image) => (
                <Image src={image} alt="" className="hero-gallery-image hero-gallery-dup" key={`down-dup-${image}`} width={700} height={1000} sizes="50vw" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="metric-strip"><div className="section-container metrics">{[["20 Million+", "Pouches Monthly"], ["40 Crore+", "Annual Turnover"], ["20,000+", "Happy Clients"], ["70,000 sq. ft", "Manufacturing Unit"]].map(([number, label]) => <div className="metric" key={number}><strong>{number}</strong><span>{label}</span></div>)}</div><div className="client-logo-strip" aria-label="Selected customers"><div className="client-logo-track">{[...clientLogos, ...clientLogos].map(([name, source, width, height], index) => <div className="client-logo" key={`${name}-${index}`}><Image src={source} alt={index < clientLogos.length ? name : ""} width={width} height={height} /></div>)}</div></div></section>

      <section id="products" className="section-container content-section products-section">
        <div className="products-intro"><p className="products-badge"><span aria-hidden="true">▣</span> Types of Packaging</p><h2>Our Range of <em>Customizable</em> Flexible Packaging</h2><p>High-quality flexible packaging with fast turnaround times <span aria-hidden="true">⌛</span>, low MOQs <span aria-hidden="true">📦</span>, and custom designs to elevate your brand</p><div className="products-actions"><a className="button button-primary" href="#get-a-quote">Talk to Us! <Arrow /></a><a className="button button-secondary" href="#get-a-quote">Get a Quote! <Arrow /></a></div></div>
        <div className="packaging-grid">{packagingTypes.map(([title, description, visual]) => <a className="packaging-card" href="#get-a-quote" key={title}><div className={`packaging-visual ${visual}`}><Image src={packagingImages[visual]} alt={`${title} packaging example`} className="packaging-card-image" fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" /></div><div className="packaging-card-copy"><h3>{title}</h3><p>{description}</p><Arrow /></div></a>)}</div>
      </section>

      <section className="materials-band"><div className="materials-inner"><p className="materials-badge">MATERIALS WE OFFER</p><p className="materials-copy">We manufacture diverse packaging structures using <strong>Polyester, BOPP, Metallized Polyester, Aluminum Foil, BOPA, Multi-Layer Films, and Kraft Paper.</strong></p></div></section>

      <section id="about" className="about-section"><div className="about-inner"><div className="about-copy"><h2>About Everrise Packaging</h2><p><strong>Established in 1986, Everrise Packaging</strong> is a leading Indian manufacturer specializing in <strong>high-quality flexible laminated packaging solutions.</strong></p><p><strong>Our Rewari facility</strong> features advanced imported machinery, including <strong>Roto Gravure printing,</strong> pouching, lamination, spout fixing, slitting, and inspection, ensuring precision and excellence in packaging solutions.</p><a className="about-button" href="/about-us">Learn More</a></div><div className="about-highlights">{aboutHighlights.map(([image, title, description]) => <article className="about-highlight" key={title}><Image src={image} alt={title} width={512} height={400} /><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

      <section className="printing-band"><div className="printing-inner"><div className="printing-heading"><p className="printing-badge">▣ Printing Technologies</p><h2>Types of Printing</h2><p>Rotogravure, digital, static, flexographic or ready-to-ship — we offer pouches that fit your product and your brand.</p></div><div className="printing-feature"><Image src="/images/3ztfIyIUkHhhJIcRumHsd8vAVIb04c.png" alt="Printed packaging pouch" width={700} height={1000} /><div className="printing-feature-copy"><p className="printing-label">INDUSTRY RECOMMENDED</p><h3>Rotogravure Printing<br />(Cylinder Print)</h3><strong>MOQ 15,000+ pcs</strong><p>Sharp detail, vibrant colors, and lasting durability for high-volume production.</p><ul><li>High-quality, long-lasting print</li><li>Cost-effective for large quantities</li><li>Low per-unit cost at scale</li><li>Custom printed rolls available</li></ul><a className="printing-cta" href="https://wa.me/918882407794">Talk to Us! <Arrow /></a></div></div><div className="printing-small-grid"><article className="printing-small-card"><h3>Ready-to-Ship Pouches</h3><Image src="/images/LbDetZ3Ll1kGICRCOWDqbo3n7743a81.png" alt="Ready-to-ship pouches" width={700} height={1000} /><strong>MOQ 500+ pcs</strong><p>Fast, flexible packaging ready for quick dispatch in standard sizes.</p><a className="printing-cta" href="#get-a-quote">Talk to Us! <Arrow /></a></article><article className="printing-small-card"><h3>Digital Printing | Static Printing</h3><Image src="/images/gmH7z9r6stLjmbFuOSNRdGJ0Ug4b04c.png" alt="Digital printed pouches" width={700} height={1000} /><strong>MOQ 1,000+ pcs</strong><p>Choose vibrant digital printing or static printing for seasonal and smaller runs.</p><a className="printing-cta" href="#get-a-quote">Talk to Us! <Arrow /></a></article></div></div></section>

      <section id="get-a-quote" className="quote-section"><div className="quote-card"><div className="quote-heading"><h2>Get a Quote!</h2><p>Share your requirement and we’ll get back with the best packaging solution<br />within 24 hours.</p></div><QuoteForm /></div></section>

      

      <section id="industries" className="industries-section"><div className="industries-heading"><h2>Trusted Packaging Experts Across Diverse Industries</h2><p>From food to pharma, we manufacture high-quality packaging across the world that protects, preserves, and promotes your products.</p></div><div className="industry-showcase-track">{[...industryShowcase, ...industryShowcase].map(([name, image], index) => <article className="industry-showcase-card" key={`${name}-${index}`}><Image src={image} alt={name} width={700} height={1000} /><strong>{name}</strong></article>)}</div><div className="industry-pills">{industries.map((industry, index) => <a href="#contact" key={industry}><span>{["🍪", "🌶️", "🍬", "💄", "🫖", "🥤", "💊", "🐶"][index % 8]}</span>{industry}</a>)}</div></section>

      <section className="testimonial-section"><div className="testimonial-heading"><p className="testimonial-badge">♡ Testimonials</p><h2>Trusted by corporates &amp; small businesses</h2></div><div className="testimonial-grid">{[[testimonials[0], testimonials[3]], [testimonials[1], testimonials[4]], [testimonials[2], testimonials[5]]].map((column, columnIndex) => <div className="testimonial-column" key={columnIndex}>{column.map(([name, quote, avatar]) => <article className="testimonial" key={name}><p>“{quote}”</p><div className="testimonial-author"><Image src={avatar} alt="" width={40} height={40} /><strong>{name}</strong></div></article>)}</div>)}</div></section>

      

      <section className="faq-section"><div className="faq-intro"><p className="faq-badge">◉ FAQ&apos;S</p><h2>Got a quick question?</h2><p>We&apos;re here to help you make the right decision. Explore our frequently asked questions and find answers below.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{index + 1}. {question}<span>{index === 0 ? "×" : "+"}</span></summary><p>{answer}</p></details>)}</div></section>
    </main>
  );
}
