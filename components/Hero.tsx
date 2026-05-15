'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const heroLogoEl = document.getElementById('hero-logo-big');
    const heroHeadEl = document.getElementById('hero-headline-wrap');
    const heroScrollHint = document.getElementById('hero-scroll-hint');

    // Initial states
    gsap.set(heroLogoEl, { opacity: 0, scale: 0.8, transformOrigin: 'center center' });
    gsap.set(heroHeadEl, { opacity: 0 });
    gsap.set(heroScrollHint, { opacity: 0 });

    const heroTl = gsap.timeline({ delay: 0.3 });

    // CAMP logo: fade in in neon yellow (glow eases with fade-in), then fade out, then headline fades in
    heroTl
      .call(() => {
        if (heroLogoEl) (heroLogoEl as HTMLElement).classList.add('neon');
      }, undefined, 0)
      .to(
        heroLogoEl,
        {
          opacity: 1,
          scale: 1.04,
          duration: 0.9,
          ease: 'power4.out',
          '--neon-blur': '8px',
          '--neon-alpha': 0.6,
        } as any,
        0
      )
      .to(heroLogoEl, { opacity: 0, duration: 0.8, ease: 'power3.out' }, 1.6)
      .to(
        heroHeadEl,
        {
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        },
        1.9
      )
      .to(
        heroScrollHint,
        {
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        },
        2.3
      );
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 100);
    camera.position.set(0, 0, 5);

    // Particles
    const count = 2200;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      size: 0.028,
      color: 0xe8ff47,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    // Torus
    const torusGeo = new THREE.TorusGeometry(1.2, 0.06, 16, 80);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0xe8ff47,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    scene.add(torus);

    let targetX = 0;
    let targetY = 0;
    window.addEventListener('mousemove', (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 1.2;
      targetY = (e.clientY / window.innerHeight - 0.5) * -0.8;
    });

    ScrollTrigger.create({
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      onUpdate: (self) => {
        camera.position.z = 5 + self.progress * 3;
        particles.material.opacity = 0.55 - self.progress * 0.55;
      },
    });

    let t = 0;
    const render = () => {
      requestAnimationFrame(render);
      t += 0.004;
      particles.rotation.y += 0.00035;
      particles.rotation.x += 0.00015;
      torus.rotation.x += 0.003;
      torus.rotation.y += 0.005;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      renderer.render(scene, camera);
    };
    render();

    const handleResize = () => {
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
      camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="hero">
      <canvas id="hero-canvas" ref={canvasRef}></canvas>

      <div className="hero-logo-big" id="hero-logo-big">
        CAMP
      </div>

      <div className="hero-headline-wrap" id="hero-headline-wrap">
        <span className="hero-eyebrow">Content Engineering Studio · Est. 2024</span>
        <h1 className="hero-headline">
          we turn raw footages
          <br />
          <span className="hl2">Into Engaging Stories</span>
        </h1>
        <p className="hero-sub">
          At Camp, we turn your raw footage into high-retention assets designed to trigger the algorithm and force the
          "Suggested" feed to work for you.
        </p>
        <a href="#work" className="hero-cta">
          Explore Our Work ↓
        </a>
      </div>

      <div className="hero-scroll-hint" id="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>


    </section>
  );
}