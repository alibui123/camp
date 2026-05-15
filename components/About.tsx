export default function About() {
  return (
    <section id="about" className="content-section">
      <div className="about-copy-block">
        <p className="section-kicker">About CAMP</p>
        <h2>Engineered For Growth</h2>

        <p className="section-lead about-lead">
          CAMP builds a sharper content engine for creators and brands that want more than clean edits. We engineer content around how people actually watch — optimizing pacing, emotion, retention, and packaging to maximize growth potential.
        </p>

        <div className="about-points">
          <span>Strategy first</span>
          <span>Premium motion language</span>
          <span>Built for distribution</span>
        </div>
      </div>

      <div className="about-panel">
        <div className="about-panel-copy">
          <p>
            From hooks and pacing to thumbnails and launch-ready visuals, every layer is designed to keep audiences watching and creators growing.
          </p>
        </div>

        
      </div>

      <div className="feature-grid">
        <article className="feature-card">
          <span>01</span>
          <h3>Audience Mapping</h3>
          <p>We study your audience psychology, viewing habits, and content patterns.
Every edit is shaped around what keeps your specific viewers emotionally engaged.</p>
        </article>

        <article className="feature-card">
          <span>02</span>
          <h3>Retention Systems</h3>
          <p>We build pacing, hooks, transitions, and visual tension designed to hold attention.
Every second is engineered to reduce drop-off and increase watch time.</p>
        </article>

        <article className="feature-card">
          <span>03</span>
          <h3>Package Design</h3>
          <p>Most viewers never even open the video — that’s the real battle.
We optimize thumbnails, titles, and channel presentation to turn passive scrollers into active viewers.
</p>
        </article>
        <article className="feature-card">
          <span>04</span>
          <h3>Growth-Focused Delivery</h3>
          <p>Strong content needs strong systems behind it.
From SEO and upload schedules to content calendars and monthly reports, every step is built for consistent channel growth.
</p>
        </article>
      </div>
    </section>
  );
}