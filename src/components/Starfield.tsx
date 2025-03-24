"use client";

import { useEffect, useRef } from "react";

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Create stars
    class Star {
      x: number;
      y: number;
      size: number;
      color: string;
      speed: number;
      canvasWidth: number;
      canvasHeight: number;

      constructor(width: number, height: number) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.x = Math.random() * this.canvasWidth;
        this.y = Math.random() * this.canvasHeight;
        this.size = Math.random() * 1.5;
        
        // Neon theme colors
        const colors = [
          "rgba(74, 222, 128, 0.8)", // neon green
          "rgba(45, 212, 191, 0.7)", // cyber teal
          "rgba(56, 189, 248, 0.6)", // tech blue
          "rgba(255, 255, 255, 0.9)", // white
        ];
        
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speed = 0.05 + Math.random() * 0.1;
      }

      update() {
        // Simple pulsing effect
        this.size = this.size + Math.sin(Date.now() * 0.001 * this.speed) * 0.1;
        
        // Optional: slow drift effect
        this.x += Math.sin(Date.now() * 0.001) * 0.05;
        this.y += Math.cos(Date.now() * 0.001) * 0.05;
        
        // Wrap around edges
        if (this.x < 0) this.x = this.canvasWidth;
        if (this.x > this.canvasWidth) this.x = 0;
        if (this.y < 0) this.y = this.canvasHeight;
        if (this.y > this.canvasHeight) this.y = 0;
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    // Create star array
    const stars: Star[] = [];
    const starCount = window.innerWidth < 768 ? 50 : 100; // Fewer stars on mobile
    
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star(canvas.width, canvas.height));
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach((star) => {
        star.update();
        star.draw(ctx);
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
} 