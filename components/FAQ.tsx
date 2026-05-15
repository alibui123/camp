'use client';

import { useState } from 'react';

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Do you provide on-site filming or videography?',
      a: 'We don\'t provide on-site videography — we specialize in the "Strategy-First" approach. We help you with the A-Z Flow Engineering: scripting, hook ideation, and technical planning — so that when you do hit record, you\'re capturing footage that is guaranteed to perform.',
    },
    {
      q: 'How do you ensure my videos actually get views and retention?',
      a: 'Most videos underperform because creators unknowingly make mistakes that hurt how the algorithm pushes their content. We structure, edit, and manage every video carefully to avoid those issues — helping maximize retention, reach, and overall performance from the moment it’s posted.',
    },
    {
      q: 'Do you only edit social media shorts, or can you handle long-form?',
      a: 'Our expertise spans the entire digital ecosystem. Whether it\'s a 20-minute deep-dive YouTube documentary, a high-level corporate ad, a cinematic travel vlog, or a viral 60-second Reel — we adapt our editing style to fit the specific goals of each platform.',
    },
    {
      q: 'How do I send my raw footage to your team?',
      a: 'We\'ve made the onboarding process seamless. Once you sign up, you\'ll get access to a dedicated portal where you can drop your raw files. From there, our team takes over the entire pipeline — from the first cut and sound design to the final SEO-optimized upload.',
    },
    {
      q: 'What kind of team is behind Camp?',
      a: 'Camp isn\'t just a group of editors — it\'s a curated team of digital growth specialists. When you partner with us, your content passes through a dedicated pipeline: a Content Strategist to engineer your flow and hooks, a High-Retention Editor to craft the visual story, and a Distribution Specialist to handle SEO and multi-platform posting.',
    },
  ];

  return (
    <section id="faq">
      <div className="faq-header">
        <span className="faq-eyebrow">Got Questions?</span>
        <h2 className="faq-title">Frequently <span>Asked</span></h2>
      </div>
      <div className="faq-list">
        {faqs.map((item, i) => (
          <div key={i} className={`faq-item ${expandedIndex === i ? 'open' : ''}`}>
            <button
              className="faq-q"
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
            >
              <span className="faq-q-text">{item.q}</span>
              <div className="faq-toggle">+</div>
            </button>
            <div className="faq-a">
              <div className="faq-a-inner">{item.a}</div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}