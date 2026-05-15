'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export default function GlobalScripts() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Handle all anchor links for smooth scrolling without stutter
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (target) {
        const href = target.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          lenis.scrollTo(href, { offset: -80 }); // Offset for the fixed navbar
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    // Cursor removed — no custom cursor handling

    const ctx = gsap.context(() => {
      // Progress bar
      gsap.to('#progress-bar', {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      });

      // About animations
      gsap.utils.toArray('.word-inner').forEach((el: any, i: number) => {
        gsap.to(el, {
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
          delay: i * 0.1,
        });
      });

      gsap.to('.about-accent-bar', {
        scaleX: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.about-accent-bar', start: 'top 85%' },
      });

      gsap.to('.about-body', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.about-body', start: 'top 85%' },
      });

      gsap.utils.toArray('.stat').forEach((el: any, i: number) => {
        gsap.set(el, { x: -20 });
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
          delay: i * 0.12,
        });
      });

      gsap.to('.about-img-wrap', {
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.about-img-wrap', start: 'top 80%' },
      });

      gsap.to('.about-tag', {
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.about-tag', start: 'top 85%' },
      });

      // Services animations
      gsap.to('.services-eyebrow', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '#services', start: 'top 80%' },
      });
      gsap.set('.services-eyebrow', { y: 20 });

      gsap.to('.services-title', {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '#services', start: 'top 78%' },
        delay: 0.1,
      });
      gsap.set('.services-title', { y: 30 });

      gsap.utils.toArray('.service-card').forEach((card: any, i: number) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 88%' },
          delay: (i % 2) * 0.12,
        });
      });

      // Work animations
      gsap.utils.toArray('.work-card').forEach((card: any) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#work',
            start: 'top 72%',
            once: true,
          },
        });
      });

      // When the filter changes, animate any work cards that were added after initial load
      const onFilterChange = () => {
        gsap.utils.toArray('.work-card').forEach((card: any) => {
          const style = window.getComputedStyle(card);
          if (parseFloat(style.opacity) < 0.99) {
            gsap.to(card, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
          }
        });
      };

      window.addEventListener('workFilterChanged', onFilterChange as EventListener);

      // Process animations
      gsap.utils.toArray('.step').forEach((step: any, i: number) => {
        gsap.to(step, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: '#process', start: 'top 70%' },
          delay: i * 0.15,
        });
      });

      gsap.to('#process-line', {
        width: '84%',
        duration: 1.8,
        ease: 'power3.inOut',
        scrollTrigger: { trigger: '#process', start: 'top 65%' },
      });

      // Team animations
      gsap.set('.team-eyebrow', { y: 20 });
      gsap.set('.team-title', { y: 30 });
      gsap.set('.team-sub', { y: 20 });

      gsap.to('.team-eyebrow', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '#team', start: 'top 80%' },
      });

      gsap.to('.team-title', {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '#team', start: 'top 78%' },
        delay: 0.1,
      });

      gsap.to('.team-sub', {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '#team', start: 'top 76%' },
        delay: 0.2,
      });

      gsap.utils.toArray('.team-card').forEach((card: any, i: number) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 88%' },
          delay: i * 0.15,
        });
      });

      // FAQ animations
      gsap.set('.faq-eyebrow', { y: 20 });
      gsap.set('.faq-title', { y: 30 });

      gsap.to('.faq-eyebrow', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '#faq', start: 'top 80%' },
      });

      gsap.to('.faq-title', {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '#faq', start: 'top 78%' },
        delay: 0.1,
      });

      gsap.utils.toArray('.faq-item').forEach((item: any, i: number) => {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 90%' },
          delay: i * 0.08,
        });
      });

      // Pricing animations
      gsap.utils.toArray('.price-card').forEach((card: any, i: number) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: '#pricing', start: 'top 75%' },
          delay: i * 0.15,
        });
      });

      // CTA animations
      gsap.set(['.cta-eyebrow', '.cta-title', '.cta-body', '.cta-actions'], { y: 40 });

      const ctaTl = gsap.timeline({ 
        scrollTrigger: { trigger: '#cta', start: 'top 70%' }
      });

      ctaTl
        .to('.cta-eyebrow', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0)
        .to('.cta-title', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, 0.15)
        .to('.cta-body', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 0.35)
        .to('.cta-actions', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.5);

      // Parallax chapter labels
      gsap.utils.toArray('.chapter-label').forEach((el: any) => {
        gsap.to(el, {
          y: -30,
          scrollTrigger: {
            trigger: el.closest('section'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      });

      // Hero headline parallax
      gsap.to('.hero-headline-wrap', {
        y: -120,
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      return () => {
        window.removeEventListener('workFilterChanged', onFilterChange as EventListener);
      };
    });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      // cleanup (no-op for cursor)
    };
  }, []);

  return null;
}
