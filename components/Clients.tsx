'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Clients() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const logos = track.querySelectorAll('.client-logo');
    const logoCount = logos.length;

    if (logoCount === 0) return;

    // Clone logos for seamless loop
    logos.forEach((logo) => {
      const clone = logo.cloneNode(true) as HTMLElement;
      track.appendChild(clone);
    });



    // GSAP animation removed in favor of pure CSS keyframes for smoother performance
  }, []);

  return (
    <section id="clients">
      <div className="clients-inner">
        <div className="clients-header">
          <span className="clients-eyebrow">Trusted By</span>
          <h2 className="clients-title">Partners & Clients</h2>
        </div>

        <div className="clients-carousel" ref={carouselRef}>
          <div className="carousel-track" ref={trackRef}>
            <div className="client-logo">
              <img src="/partners/Dream Fest 3d.png" alt="Dream Fest" />
            </div>
            <div className="client-logo">
              <img src="/partners/Dream Productions Typo.png" alt="Dream Productions" />
            </div>
            <div className="client-logo">
              <img src="/partners/Dream Wear.png" alt="Dream Wear" />
            </div>
            <div className="client-logo">
              <img src="/partners/DS TV.png" alt="DS TV" />
            </div>
            <div className="client-logo">
              <img src="/partners/DSG.png" alt="DSG" />
            </div>
            <div className="client-logo">
              <img src="/partners/Forever Faith Black.png" alt="Forever Faith" />
            </div>
            <div className="client-logo">
              <img src="/partners/logo variation (3).jpg.jpeg" alt="Logo" />
            </div>
            <div className="client-logo">
              <img src="/partners/Total Football.png" alt="Total Football" />
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
