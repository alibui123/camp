'use client';

export default function Team() {
  return (
    <section id="team">
      <div className="team-header">
        <span className="team-eyebrow">The People Behind the Cuts</span>
        <h2 className="team-title">Our <span>Pipeline</span></h2>
        <p className="team-sub">Tailored for attention, engineered for growth. When you partner with Camp, your content passes through a dedicated three-stage pipeline.</p>
      </div>
      <div className="team-row">
        <div className="team-card">
          <div className="team-role-icon">🧠</div>
          <span className="team-role">Stage 01</span>
          <div className="team-name">Content Strategist</div>
          <p className="team-desc">Builds the foundation for high-performing content through strategic ideation, scripting, hooks, and production planning. Every concept is designed to capture attention early and create content worth watching through to the end.</p>
        </div>
        <div className="team-card">
          <div className="team-role-icon">🎬</div>
          <span className="team-role">Stage 02</span>
          <div className="team-name">High-Retention Editor</div>
          <p className="team-desc">Transforms raw footage into fast-paced, visually engaging content engineered to hold attention. Through strategic pacing, storytelling, and motion design, every second is crafted to keep viewers watching.</p>
        </div>
        <div className="team-card">
          <div className="team-role-icon">📡</div>
          <span className="team-role">Stage 03</span>
          <div className="team-name">Distribution Specialist</div>
          <p className="team-desc">Publishes and optimizes your content across platforms like YouTube, Instagram, TikTok, and Facebook. Focused on SEO, consistency, and reach, ensuring your content gets seen by the right audience.</p>
        </div>
      </div>

    </section>
  );
}