"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function CinematicBackground() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle floating mist and botanical particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Array<{
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      alpha: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize 24 subtle ambient luminous cream & mint motes
    for (let i = 0; i < 24; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -Math.random() * 0.4 - 0.1,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) p.y = canvas.height;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 245, 230, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(52, 168, 83, 0.4)";
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Background HD Video Stream Loop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 scale-105 ${
          videoLoaded ? "opacity-35" : "opacity-0"
        }`}
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-pouring-milk-into-a-glass-in-slow-motion-42999-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Fallback & Ambient Layer: High-res Milk Pour Cinemagraph Texture */}
      <div className="absolute inset-0">
        <Image
          src="/images/craft/milk-pour-macro.jpg"
          alt="Artisan Milk & Gelato Background"
          fill
          priority
          className="object-cover object-center opacity-25 scale-105 animate-pulse duration-[10000ms]"
        />
      </div>

      {/* Deep Forest Emerald Atmospheric Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#062012]/90 via-[#0A331D]/80 to-[#062012]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_20%,#05180E_90%)]" />

      {/* Subtle Ambient Particle Mote Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
