"use client";

import { useEffect, useRef } from "react";

export function CreamChurnVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let step = 0;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 600;
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      step += 0.012;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Layer 1: Soft warm cream background wave
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 10) {
        const y = Math.sin(x * 0.003 + step) * 25 + Math.cos(x * 0.002 - step * 0.7) * 20 + height * 0.7;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fillStyle = "rgba(240, 235, 220, 0.4)";
      ctx.fill();

      // Layer 2: Botanical Emerald wave
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 10) {
        const y = Math.sin(x * 0.004 - step * 1.2) * 20 + Math.cos(x * 0.003 + step * 0.8) * 15 + height * 0.78;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fillStyle = "rgba(11, 72, 34, 0.04)";
      ctx.fill();

      // Layer 3: Velvet Milk churn crest
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 8) {
        const y = Math.sin(x * 0.005 + step * 0.9) * 15 + Math.cos(x * 0.004 - step) * 12 + height * 0.85;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fillStyle = "rgba(37, 135, 66, 0.06)";
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
