'use client';

export default function Services() {
  return (
    <section id="services">
      <div className="services-header">
        <span className="services-eyebrow">What We Do</span>
        <h2 className="services-title">Our <span>Services</span></h2>
      </div>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-num">01</div>
          <div className="service-icon-wrap">✂️</div>
          <span className="service-tag">Core Offering</span>
          <div className="service-name">Post-Production</div>
          <p className="service-description">We don't just cut clips; we engineer retention. Our editors use psychological pacing and high-energy storytelling to keep your audience glued to the screen until the final second. We focus on what actually makes content work — Every element is strategically placed to maximize retention, boost engagement, and drive real growth for your brand in today's fast-moving digital landscape.</p>
        </div>

        <div className="service-card">
          <div className="service-num">02</div>
          <div className="service-icon-wrap">📱</div>
          <span className="service-tag">Always On</span>
          <div className="service-name">Social Management</div>
          <p className="service-description">We manage your presence across YouTube, Instagram, TikTok, and Facebook keeping your brand consistent, active, and growing. From planning your content and posting regularly to writing captions and maintaining a clean, cohesive look, everything is handled with care.</p>
        </div>

        <div className="service-card">
          <div className="service-num">03</div>
          <div className="service-icon-wrap">🎨</div>
          <span className="service-tag">First Impressions</span>
          <div className="service-name">High CTR Rebranding</div>
          <p className="service-description">First impressions are everything. We overhaul your channel's visual identity—from logos to banners—giving you the 'Million-Sub' look that commands authority and clicks. This includes refining logo, visual style, and complete brand personality to elevate your presence from 'just another creator' to a premium, recognizable brand.</p>
        </div>

        <div className="service-card">
          <div className="service-num">04</div>
          <div className="service-icon-wrap">📈</div>
          <span className="service-tag">Full-Stack Growth</span>
          <div className="service-name">YouTube Optimization</div>
          <p className="service-description">Our team handles everything needed to grow your YouTube channel the right way. From planning your monthly calendar to designing high-quality thumbnails and writing titles and descriptions that actually get clicks, every step is focused on growth. You'll also receive clear reports so you can see what's working and how your channel is improving over time.</p>
        </div>
      </div>

    </section>
  );
}