"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type MenuItem = [string, string, string?];

const productColumns: MenuItem[][] = [
  [
    ["Printed Laminated Rolls", "Custom printed flexible film rolls for FFS machines"],
    ["Standup Pouches", "Standing pouch with bottom gusset and Zipper"],
    ["Center-Seal Pouches", "Tube-form pouches for pillow packs"],
    ["Three-Side Seal Pouches", "Flat sachets for powders & granules"],
    ["Gusset Pouches", "Expandable base for high-volume fills"],
    ["Stock Pouches", "Pre-made, unprinted, available packaging"],
  ],
  [
    ["Spout Pouches", "Resealable spout for liquids & pastes"],
    ["Vacuum Pouches", "Airtight seal for extended shelf life"],
    ["Flat Bottom Pouches", "Rigid base, stands upright on shelf"],
    ["Heavy Duty Bags", "Thick-gauge film for industrial loads"],
    ["Quad-Seal Pouches", "Four-panel structure for bulk storage"],
    ["Shape Pouches", "Die-cut pouches in any custom shape"],
  ],
];

const industryColumns: MenuItem[][] = [
  [
    ["Tea Packaging", "Moisture & aroma barrier laminated pouches", "🫖"],
    ["Coffee", "Degassing valve pouches for roasted beans", "☕"],
    ["Spices & Seasonings", "High-barrier pouches for longer shelf life", "🌶️"],
    ["Pulses", "Resealable stand-up pouches with zip lock", "🌾"],
    ["Pet Food", "Resealable pouches with odour barrier film", "🐶"],
    ["Pharmaceuticals", "Tamper-evident pouches for medical grades", "💊"],
    ["Snacks & Bakery", "BOPP pouches that retain crunch & freshness", "🍪"],
    ["Atta / Flours", "Multi-layer pouches for powders & grains", "🥖"],
    ["Sauces, Dips & Oil", "Leak-proof spout pouches for liquids", "🫙"],
  ],
  [
    ["Dry-fruit", "Zipper pouches with UV & moisture protection", "🥜"],
    ["Frozen Food", "High-barrier pouches for freezer storage", "❄️"],
    ["Hot & Cold Beverages", "Foil pouches for powder & concentrate", "🥤"],
    ["Automobile Accessories", "Puncture-resistant pouches for parts & oils", "🚘"],
    ["Electronic Accessories", "Anti-static pouches for component safety", "⚙️"],
    ["Detergent", "Heavy-duty pouches for powders & liquids", "🧴"],
    ["Confectionery", "Multilayer pouches with grease resistance", "🍬"],
    ["Cosmetics", "Matte & gloss finish flexible pouches", "💄"],
    ["Agricultural Products", "UV-resistant pouches for seeds & chemicals", "🌱"],
    ["Hand Wash & Shampoo", "Spout pouches for viscous liquids", "🧴"],
  ],
];

function Chevron({ up = false }: { up?: boolean }) {
  return <span className={`chevron ${up ? "chevron-up" : ""}`} aria-hidden="true" />;
}

export default function Header() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState<"products" | "industries" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="contact-bar">
        <div className="header-container contact-inner">
          <div className="contact-details">
            <a className="contact-phone" href="tel:+918882407794"><span className="contact-icon">☎</span> +91 88824 07794</a>
            <a className="contact-phone contact-phone-alt" href="tel:+919990407775"><span className="contact-icon">☎</span> +91 99904 07775</a>
            <a className="contact-email" href="mailto:everrisepack@gmail.com"><span className="contact-icon mail-icon">✉</span> everrisepack@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="navigation-bar">
        <div className="header-container navigation-inner">
          <Link className="brand" href="/" aria-label="Everrise Packaging home">
            <Image className="brand-logo" src="/everrise-logo.jpeg" alt="EverRise Packaging Industries" width={170} height={133} priority />
          </Link>

          <button
            className="mobile-menu-button"
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="main-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="menu-lines" aria-hidden="true" />
            Menu
          </button>

          <nav id="main-navigation" className={`main-navigation ${mobileOpen ? "is-mobile-open" : ""}`}>
            <div
              className="products-menu"
              onMouseEnter={() => setActiveMenu("products")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`nav-link product-trigger ${activeMenu === "products" ? "is-active" : ""}`}
                type="button"
                aria-expanded={activeMenu === "products"}
                onClick={() => {
                  setMobileOpen(false);
                  setActiveMenu(null);
                  router.push("/products");
                }}
              >
                Products <Chevron up={activeMenu === "products"} />
              </button>
              {activeMenu === "products" && (
                <div className="mega-menu products-mega-menu">
                  {productColumns.map((column, columnIndex) => (
                    <div className={`menu-column ${columnIndex === 0 ? "menu-column-primary" : "product-column"}`} key={columnIndex}>
                      {columnIndex === 0 && <Link className="all-products" href="/products">All Everrise Products</Link>}
                      {column.map(([title, description]) => (
                        <Link className="product-item" href="/products" key={title}>
                          <span>{title}</span>
                          <small>{description}</small>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div
              className="products-menu industries-menu"
              onMouseEnter={() => setActiveMenu("industries")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`nav-link product-trigger ${activeMenu === "industries" ? "is-active" : ""}`}
                type="button"
                aria-expanded={activeMenu === "industries"}
                onClick={() => {
                  setMobileOpen(false);
                  setActiveMenu(null);
                  router.push("/industry");
                }}
              >
                Industries <Chevron up={activeMenu === "industries"} />
              </button>
              {activeMenu === "industries" && (
                <div className="mega-menu industries-mega-menu">
                  {industryColumns.map((column, columnIndex) => (
                    <div className={`menu-column ${columnIndex === 0 ? "menu-column-primary" : "product-column"}`} key={columnIndex}>
                      {columnIndex === 0 && <Link className="all-products" href="/industry">ALL INDUSTRIES</Link>}
                      {column.map(([title, description, icon]) => (
                        <Link className="product-item industry-item" href="/industry" key={title}>
                          <span><i aria-hidden="true">{icon}</i>{title}</span>
                          <small>{description}</small>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link className="nav-link" href="/investor-relations" onClick={() => setMobileOpen(false)}>Investors</Link>
            <Link className="nav-link" href="/about-us" onClick={() => setMobileOpen(false)}>About</Link>
            <Link className="nav-link" href="/contact-us" onClick={() => setMobileOpen(false)}>Contact Us</Link>
            <Link className="stock-button" href="/#products" onClick={() => setMobileOpen(false)}>Shop Stock Pouches</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
