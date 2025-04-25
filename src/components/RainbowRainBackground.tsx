
import { useEffect, useRef } from 'react';

const RainbowRainBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let raindrops: { x: number; y: number; speed: number; size: number }[] = [];
    const numberOfDrops = 100;

    // Initialize raindrops
    for (let i = 0; i < numberOfDrops; i++) {
      raindrops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 2 + Math.random() * 3,
        size: 1 + Math.random() * 2
      });
    }

    // Create rainbow gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'rgba(255, 0, 0, 0.2)');
    gradient.addColorStop(0.2, 'rgba(255, 165, 0, 0.2)');
    gradient.addColorStop(0.4, 'rgba(255, 255, 0, 0.2)');
    gradient.addColorStop(0.6, 'rgba(0, 255, 0, 0.2)');
    gradient.addColorStop(0.8, 'rgba(0, 0, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(238, 130, 238, 0.2)');

    const animate = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw rainbow background
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update raindrops
      ctx.fillStyle = 'rgba(200, 200, 255, 0.3)';
      raindrops.forEach((drop, index) => {
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.size, 0, Math.PI * 2);
        ctx.fill();

        // Update raindrop position
        drop.y += drop.speed;

        // Reset raindrop if it goes off screen
        if (drop.y > canvas.height) {
          drop.y = -5;
          drop.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default RainbowRainBackground;
