import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Relations",
  description: "Corporate announcements, regulatory filings, and investor updates from Everrise Packaging.",
};

const investorLinks = [
  ["Financial Results", "Quarterly and annual performance updates"],
  ["Annual Reports", "Yearly reports and company highlights"],
  ["Shareholding Pattern", "Ownership and investor disclosures"],
  ["Corporate Announcements", "Latest filings and important updates"],
] as const;

const announcements = [
  ["18 Sep 2026", "Intimation of Board Meeting scheduled on 25 Sep 2026"],
  ["12 Sep 2026", "Outcome of Board Meeting held on 12 Sep 2026"],
  ["04 Sep 2026", "Notice of record date for investor communications"],
  ["28 Aug 2026", "Submission of financial statements for the quarter ended Jun 2026"],
  ["16 Aug 2026", "Change in registered office correspondence details"],
  ["07 Aug 2026", "Notice of Annual General Meeting and e-voting information"],
  ["29 Jul 2026", "Outcome of Board Meeting and approval of results"],
  ["15 Jul 2026", "Shareholding pattern for the quarter ended Jun 2026"],
  ["30 Jun 2026", "Intimation regarding closure of trading window"],
  ["12 Jun 2026", "Appointment of authorised signatory"],
  ["28 May 2026", "Audited financial results for the year ended Mar 2026"],
  ["19 May 2026", "Outcome of Board Meeting held on 19 May 2026"],
  ["05 May 2026", "Notice of Board Meeting for approval of annual results"],
  ["31 Mar 2026", "Shareholding pattern for the quarter ended Mar 2026"],
  ["14 Mar 2026", "Closure of trading window for designated persons"],
  ["28 Feb 2026", "Unaudited financial results for the quarter ended Dec 2025"],
  ["11 Feb 2026", "Outcome of Board Meeting held on 11 Feb 2026"],
  ["31 Dec 2025", "Shareholding pattern for the quarter ended Dec 2025"],
  ["19 Dec 2025", "Intimation of Board Meeting and investor presentation"],
  ["30 Nov 2025", "Unaudited financial results for the quarter ended Sep 2025"],
  ["14 Nov 2025", "Outcome of Board Meeting held on 14 Nov 2025"],
  ["30 Sep 2025", "Shareholding pattern for the quarter ended Sep 2025"],
  ["18 Aug 2025", "Notice of Annual General Meeting and annual report"],
  ["31 Jul 2025", "Audited financial results for the year ended Mar 2025"],
] as const;

export default function InvestorRelationsPage() {
  return (
    <main className="investor-page">
        <section className="investor-hero">
          <p className="investor-kicker">Investor information</p>
          <h1>Investor Relations</h1>
          <p>Stay informed with EverRise Packaging&apos;s latest corporate announcements, regulatory filings, and important updates for shareholders and investors.</p>
          <div className="investor-link-grid">
            {investorLinks.map(([title, description]) => (
              <a className="investor-link-card" href="#announcements" key={title}>
                <strong>{title}</strong>
                <span>{description}</span>
              </a>
            ))}
          </div>
        </section>
        <section id="announcements" className="announcements-section">
          <div className="announcements-heading">
            <p className="investor-kicker">Latest updates</p>
            <h2>Corporate Announcements</h2>
            <p>Important disclosures, regulatory filings, and company updates for our investors.</p>
          </div>
          <div className="announcements-table-wrap">
            <table className="announcements-table">
              <thead>
                <tr><th>Date</th><th>Name</th><th>Full File</th></tr>
              </thead>
              <tbody>
                {announcements.map(([date, title]) => (
                  <tr key={`${date}-${title}`}>
                    <td>{date}</td>
                    <td>{title}</td>
                    <td><a href="mailto:everrisepack@gmail.com?subject=Investor%20relations%20file%20request">View PDF <span aria-hidden="true">↗</span></a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
  );
}
