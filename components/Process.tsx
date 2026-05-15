'use client';

export default function Process() {
  return (
    <section id="process">
      <div className="process-inner">
        <h2 className="process-title">How We <span style={{ color: 'var(--accent)' }}>Work</span></h2>
        <div className="steps" style={{ position: 'relative' }}>
          <div className="process-line" id="process-line"></div>
          <div className="step">
            <div className="step-num">01<span className="step-icon">🎯</span></div>
            <div className="step-title">Strategy</div>
            <p className="step-desc">We understand your content, goals, and the audience behind your niche.
              Using viewer psychology and market research, we build a strategy designed for long-term channel growth.</p>
          </div>
          <div className="step">
            <div className="step-num">02<span className="step-icon">✂️</span></div>
            <div className="step-title">Engineer</div>
            <p className="step-desc">We engineer hooks, pacing, storytelling, and visual flow to keep viewers engaged till the end.
              Every part of the structure is intentionally built to maximize retention and watch time.
            </p>
          </div>
          <div className="step">
            <div className="step-num">03<span className="step-icon">🔁</span></div>
            <div className="step-title">Refine</div>
            <p className="step-desc">Most creators lose viewers before the video even starts.
              We refine thumbnails, titles, and overall channel packaging to increase clicks and make your content instantly more appealing.</p>
          </div>
          <div className="step">
            <div className="step-num">04<span className="step-icon">🚀</span></div>
            <div className="step-title">Launch</div>
            <p className="step-desc">Growth comes from consistency, optimization, and data-driven execution.
              From SEO and posting systems to content calendars and monthly reporting, everything is built to scale the channel strategically.</p>
          </div>
        </div>
      </div>

    </section>
  );
}