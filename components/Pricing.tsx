'use client';

export default function Pricing() {
  return (
    <section id="pricing">
      <h2 className="pricing-title">Simple <span style={{ color: 'var(--accent)' }}>Pricing</span></h2>
      <p className="pricing-sub">No hidden fees. No surprises. Just premium content that delivers results.</p>
      <div className="cards-row">
        <div className="price-card">
          <div className="price-tier">Tier 01</div>
          <div className="price-name">Starter</div>
          <p style={{ color: 'var(--white-dim)', fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.6 }}>Perfect for social content, reels, and short-form video creators.</p>
          <div className="price-amount"><sup>$</sup>390</div>
          <ul className="price-features">
            <li>5 shorts or 1 long video per week</li>
            <li>SSM(1 platform)</li>
            <li>Content Calendar</li>
            <li>24/7 Email & Chat Support</li>

          </ul>
          <a href="#cta" className="price-btn">Get Started</a>
        </div>
        <div className="price-card featured-card">
          <div className="featured-badge">Most Popular</div>
          <div className="price-tier">Tier 02</div>
          <div className="price-name">Professional</div>
          <p style={{ color: 'var(--white-dim)', fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.6 }}>For brands and agencies that need premium commercial-grade edits.</p>
          <div className="price-amount"><sup>$</sup>990</div>
          <ul className="price-features">
            <li>1 Long Video Per Week</li>
            <li>7 Short Videos Per Week</li>
            <li>Thumbnail Designs</li>
            <li>SSM(2 platforms)</li>
            <li>Dedicated Account Manager</li>
            <li>Priority Email & Chat Support</li>

          </ul>
          <a href="#cta" className="price-btn">Book Now</a>
        </div>
        <div className="price-card">
          <div className="price-tier">Tier 03</div>
          <div className="price-name">Cinematic</div>
          <p style={{ color: 'var(--white-dim)', fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.6 }}>Full-scale productions: documentaries, brand films, and campaigns.</p>
          <div className="price-amount"><sup>$</sup>1490</div>
          <ul className="price-features">
            <li>2 Long videos Per Week</li>
            <li>7 Short Videos per Week</li>
            <li>Complete Rebranding</li>
            <li>Thumbnail Designs with A/B Testing</li>
            <li>SSM(4 platforms)</li>
            <li>Monthly Growth Reports & Analytics</li>
            <li>Content Stratergy</li>
          </ul>
          <a href="#cta" className="price-btn">Let's Talk</a>
        </div>
      </div>

    </section>
  );
}