import { useEffect, useRef } from 'react';

export default function PixelBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const pixelSize = 40;
    let cols = Math.floor(width / pixelSize) + 1;
    let rows = Math.floor(height / pixelSize) + 1;

    let pixels: { x: number, y: number, alpha: number, targetAlpha: number, speed: number }[] = [];

    const initPixels = () => {
      pixels = [];
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (Math.random() > 0.85) {
            pixels.push({
              x: i * pixelSize,
              y: j * pixelSize,
              alpha: Math.random() * 0.3,
              targetAlpha: Math.random() * 0.3,
              speed: 0.005 + Math.random() * 0.01
            });
          }
        }
      }
    };

    initPixels();

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      for (let i = 0; i <= cols; i++) {
        ctx.beginPath();
        ctx.moveTo(i * pixelSize, 0);
        ctx.lineTo(i * pixelSize, height);
        ctx.stroke();
      }
      for (let j = 0; j <= rows; j++) {
        ctx.beginPath();
        ctx.moveTo(0, j * pixelSize);
        ctx.lineTo(width, j * pixelSize);
        ctx.stroke();
      }

      // Draw animated pixels
      pixels.forEach(p => {
        if (Math.abs(p.alpha - p.targetAlpha) < 0.01) {
          p.targetAlpha = Math.random() * 0.2;
        }
        if (p.alpha < p.targetAlpha) p.alpha += p.speed;
        else p.alpha -= p.speed;

        // Gold-ish color for pixels
        ctx.fillStyle = `rgba(212, 175, 55, ${Math.max(0, p.alpha)})`;
        ctx.fillRect(p.x, p.y, pixelSize, pixelSize);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      cols = Math.floor(width / pixelSize) + 1;
      rows = Math.floor(height / pixelSize) + 1;
      initPixels();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-50"
    />
  );
}
