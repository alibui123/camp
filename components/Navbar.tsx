'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
  useEffect(() => {
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e: any) => {
        const target = document.querySelector(a.getAttribute('href')!);
        if (target) {
          e.preventDefault();
          gsap.to(window, { scrollTo: target, duration: 1.2, ease: 'power3.inOut' });
        }
      });
    });
  }, []);

  return (
    <>
      <div id="noise"></div>
      <div id="progress-bar"></div>
      <nav id="nav">
        <a href="#" className="nav-logo" aria-label="CAMP Home">
          <div className="logo-mark">
            <img src="/logo_resize.png" alt="CAMP" />
          </div>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#process">Process</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#cta">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
