import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function AnimatedGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize);
    onResize();
    
    if (!canvasRef.current) return;
    
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.05, 0.05, 0.05],
      markerColor: [212/255, 175/255, 55/255], // Gold markers
      glowColor: [0.1, 0.1, 0.1],
      markers: [
        { location: [28.6139, 77.2090], size: 0.1 }, // New Delhi
        { location: [37.7595, -122.4367], size: 0.05 }, // SF
        { location: [51.5074, -0.1278], size: 0.05 }, // London
        { location: [25.2048, 55.2708], size: 0.06 }, // Dubai
        { location: [1.3521, 103.8198], size: 0.05 }, // Singapore
        { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += 0.003; // Slow rotation
        }
        state.phi = phi + pointerInteractionMovement.current;
        state.width = width * 2;
        state.height = width * 2;
      }
    });
    
    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = '1';
    });
    
    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div style={{
      width: '100%',
      aspectRatio: 1,
      margin: 'auto',
      position: 'relative',
    }}>
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing';
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.01;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.01;
          }
        }}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'grab',
          contain: 'layout paint size',
          opacity: 0,
          transition: 'opacity 1s ease',
        }}
      />
    </div>
  );
}
