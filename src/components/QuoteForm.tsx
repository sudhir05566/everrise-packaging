"use client";

import { FormEvent, useState } from "react";
import { SITE_EMAIL } from "@/lib/site";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const requirement = String(data.get("requirement") ?? "").trim();

    const body = [
      `Name: ${name}`,
      `Company: ${company || "—"}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "Requirement:",
      requirement,
    ].join("\n");

    const mailto = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(`Quote request from ${name}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus("sent");
    form.reset();
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <label>
        Name*
        <input name="name" type="text" placeholder="Your Name" aria-label="Your name" required />
      </label>
      <label>
        Company Name
        <input name="company" type="text" placeholder="e.g. FreshBites Foods" aria-label="Company name" />
      </label>
      <label>
        Email*
        <input name="email" type="email" placeholder="name@company.com" aria-label="Email address" required />
      </label>
      <label>
        Phone Number*
        <input name="phone" type="tel" placeholder="+91 999 888 777" aria-label="Phone number" required />
      </label>
      <label className="quote-wide">
        What are you looking for?*
        <textarea
          name="requirement"
          placeholder="e.g. 3×5 inch stand-up spout pouch for juice, approx. 5,000 units"
          aria-label="What are you looking for"
          rows={4}
          required
        />
      </label>
      <p className="quote-consent">
        By submitting this form, you consent to being contacted via call or SMS on the number provided. These
        communications may be sent through a third-party service provider.
      </p>
      <button className="button button-primary quote-submit" type="submit">
        Submit
      </button>
      {status === "sent" ? (
        <p className="quote-consent">Your email app should open with the quote details. If it does not, write to {SITE_EMAIL}.</p>
      ) : null}
    </form>
  );
}
