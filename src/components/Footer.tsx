import Image from "next/image";
import Link from "next/link";
import { MAPS_SHARE_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="section-container footer-grid">
        <div>
          <Link className="brand footer-brand" href="/" aria-label="Everrise Packaging home">
            <Image className="footer-logo" src="/everrise-logo.jpeg" alt="EverRise Packaging Industries" width={250} height={196} />
          </Link>
          <p>All types of pouching job works and spout fixing.</p>
        </div>
        <div>
          <h3>Navigation</h3>
          <Link href="/products">Products</Link>
          <Link href="/industry">Industries</Link>
          <Link href="/investor-relations">Investor Relations</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="tel:+918882407794">+91 88824 07794</a>
          <a href="tel:+919990407775">+91 99904 07775</a>
          <a href="mailto:everrisepack@gmail.com">everrisepack@gmail.com</a>
          <a href={MAPS_SHARE_URL} target="_blank" rel="noopener noreferrer">D-1, Meerut Road Industrial Area Ghaziabad, Uttar Pradesh - 201001</a>
        </div>
        <div>
          <h3>Let&apos;s talk packaging</h3>
          <p>Have a product to pack? Our team is ready.</p>
          <a className="button button-light" href="https://wa.me/918882407794">Talk to Us <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="footer-bottom section-container">
        <span>© 2026 Everrise Packaging</span>
        <span>Food-grade packaging. Fast delivery across India.</span>
      </div>
    </footer>
  );
}
