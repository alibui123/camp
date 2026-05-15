'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 100);
    camera.position.z = 5;

    const icGeo = new THREE.IcosahedronGeometry(2.4, 2);
    const icMat = new THREE.MeshBasicMaterial({
      color: 0xe8ff47,
      wireframe: true,
      transparent: true,
      opacity: 0.09,
    });
    const ico = new THREE.Mesh(icGeo, icMat);
    scene.add(ico);

    ScrollTrigger.create({
      trigger: '#cta',
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        ico.rotation.y = self.progress * Math.PI * 2;
        ico.rotation.x = self.progress * Math.PI;
      },
    });

    const render = () => {
      requestAnimationFrame(render);
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
    <section id="cta">
      <canvas id="cta-canvas" ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}></canvas>
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p className="cta-eyebrow">Ready When You Are</p>
        <h2 className="cta-title">
          Let's Create<br />
          <span className="stroke-text">Something</span><br />
          Amazing
        </h2>
        <p className="cta-body">Have a project in mind? We're accepting new clients now. Let's build content that moves people — and the algorithm.</p>
        <div className="cta-actions">
          <a href="mailto:contact@camps.agency" className="btn-primary">Book a Free Call</a>
          <a href="mailto:contact@camps.agency" className="btn-ghost">Email Us</a>
        </div>
      </div>
      <div className="cta-marquee-wrap">
        <div className="marquee-track">
          <span className="marquee-item">Post-Production <span className="dot">✦</span></span>
          <span className="marquee-item">Social Media Management <span className="dot">✦</span></span>
          <span className="marquee-item">YouTube Optimization <span className="dot">✦</span></span>
          <span className="marquee-item">High CTR Rebranding <span className="dot">✦</span></span>
          <span className="marquee-item">Retention Engineering <span className="dot">✦</span></span>
          <span className="marquee-item">Algorithm Strategy <span className="dot">✦</span></span>
          <span className="marquee-item">Post-Production <span className="dot">✦</span></span>
          <span className="marquee-item">Social Media Management <span className="dot">✦</span></span>
          <span className="marquee-item">YouTube Optimization <span className="dot">✦</span></span>
          <span className="marquee-item">High CTR Rebranding <span className="dot">✦</span></span>
          <span className="marquee-item">Retention Engineering <span className="dot">✦</span></span>
          <span className="marquee-item">Algorithm Strategy <span className="dot">✦</span></span>
        </div>
      </div>

    </section>
  );
}