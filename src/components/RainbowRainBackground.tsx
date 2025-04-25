
import { useEffect, useRef } from 'react';

interface Cloud {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  opacity: number;
}

interface RainDrop {
  x: number;
  y: number;
  speed: number;
  size: number;
  opacity: number;
}

interface Lightning {
  x: number;
  points: { x: number; y: number }[];
  opacity: number;
  duration: number;
  timeLeft: number;
}

const RainbowRainBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const thunderTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Initialize state
    const clouds: Cloud[] = [];
    const raindrops: RainDrop[] = [];
    let lightnings: Lightning[] = [];
    let rainbowOpacity = 0;
    let showRainbow = false;

    // Create clouds
    for (let i = 0; i < 8; i++) {
      clouds.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.3,
        width: 200 + Math.random() * 300,
        height: 80 + Math.random() * 80,
        speed: 0.2 + Math.random() * 0.2,
        opacity: 0.5 + Math.random() * 0.3
      });
    }

    // Create raindrops
    for (let i = 0; i < 200; i++) {
      raindrops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 5 + Math.random() * 7,
        size: 1 + Math.random() * 2,
        opacity: 0.3 + Math.random() * 0.3
      });
    }

    // Generate lightning path
    const createLightning = () => {
      const startX = Math.random() * canvas.width;
      let points: { x: number; y: number }[] = [{ x: startX, y: 0 }];
      let currentY = 0;
      
      while (currentY < canvas.height * 0.7) {
        currentY += Math.random() * 20 + 10;
        const offsetX = (Math.random() - 0.5) * 40;
        points.push({ x: points[points.length - 1].x + offsetX, y: currentY });
        
        // Add branches occasionally
        if (Math.random() < 0.3) {
          const branchLength = Math.floor(Math.random() * 3) + 2;
          let branchX = points[points.length - 1].x;
          let branchY = currentY;
          
          for (let i = 0; i < branchLength; i++) {
            branchY += Math.random() * 20 + 5;
            const branchOffsetX = (Math.random() - 0.5) * 50;
            points.push({ x: branchX + branchOffsetX, y: branchY });
          }
        }
      }

      return {
        x: startX,
        points,
        opacity: 1,
        duration: 500 + Math.random() * 500,
        timeLeft: 500 + Math.random() * 500
      };
    };

    // Schedule thunder
    const scheduleThunder = () => {
      const nextThunder = 5000 + Math.random() * 15000;
      thunderTimeoutRef.current = window.setTimeout(() => {
        lightnings.push(createLightning());
        
        // Show rainbow after thunder
        setTimeout(() => {
          showRainbow = true;
          // And hide it after a while
          setTimeout(() => {
            showRainbow = false;
          }, 10000 + Math.random() * 8000);
        }, 2000);
        
        scheduleThunder();
      }, nextThunder);
    };

    // Start thunder schedule
    scheduleThunder();

    // Draw cloud
    const drawCloud = (cloud: Cloud) => {
      ctx.save();
      ctx.fillStyle = `rgba(60, 30, 70, ${cloud.opacity})`;
      
      // Draw cloud shape using multiple circles
      const centerX = cloud.x + cloud.width / 2;
      const centerY = cloud.y + cloud.height / 2;
      const radiusX = cloud.width / 2;
      const radiusY = cloud.height / 2;
      
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Add some details to the cloud
      ctx.beginPath();
      ctx.ellipse(centerX - radiusX * 0.5, centerY, radiusX * 0.7, radiusY * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.beginPath();
      ctx.ellipse(centerX + radiusX * 0.5, centerY, radiusX * 0.6, radiusY * 0.7, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    // Draw rainbow
    const drawRainbow = () => {
      if (!showRainbow) {
        rainbowOpacity = Math.max(0, rainbowOpacity - 0.01);
        if (rainbowOpacity <= 0) return;
      } else {
        rainbowOpacity = Math.min(0.7, rainbowOpacity + 0.01);
      }
      
      const centerX = canvas.width * 0.5;
      const bottomY = canvas.height * 1.1;
      const radiusX = canvas.width * 0.7;
      const radiusY = canvas.height * 0.9;
      
      // Rainbow colors
      const colors = [
        `rgba(255, 0, 0, ${rainbowOpacity})`,
        `rgba(255, 127, 0, ${rainbowOpacity})`,
        `rgba(255, 255, 0, ${rainbowOpacity})`,
        `rgba(0, 255, 0, ${rainbowOpacity})`,
        `rgba(0, 0, 255, ${rainbowOpacity})`,
        `rgba(75, 0, 130, ${rainbowOpacity})`,
        `rgba(148, 0, 211, ${rainbowOpacity})`
      ];
      
      // Draw rainbow arcs
      for (let i = 0; i < colors.length; i++) {
        const arcWidth = 10;
        const gap = 5;
        const radius = radiusX - (i * (arcWidth + gap));
        
        ctx.beginPath();
        ctx.strokeStyle = colors[i];
        ctx.lineWidth = arcWidth;
        ctx.arc(centerX, bottomY, radius, Math.PI, 0);
        ctx.stroke();
      }
    };

    // Draw lightning
    const drawLightning = (lightning: Lightning) => {
      ctx.save();
      ctx.strokeStyle = `rgba(255, 255, 240, ${lightning.opacity})`;
      ctx.lineWidth = 3;
      ctx.beginPath();
      
      // Draw main bolt
      ctx.moveTo(lightning.points[0].x, lightning.points[0].y);
      for (let i = 1; i < lightning.points.length; i++) {
        ctx.lineTo(lightning.points[i].x, lightning.points[i].y);
      }
      
      // Draw lightning glow
      ctx.shadowColor = 'rgba(255, 255, 200, 0.8)';
      ctx.shadowBlur = 20;
      
      ctx.stroke();
      ctx.restore();
      
      // Update lightning
      lightning.timeLeft -= 16; // Roughly 16ms per frame
      lightning.opacity = lightning.timeLeft / lightning.duration;
      
      // Add bright background flash
      ctx.fillStyle = `rgba(255, 255, 240, ${lightning.opacity * 0.2})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with a dark bluish-purple gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#1A1F2C');
      gradient.addColorStop(0.5, '#2a1b3d');
      gradient.addColorStop(1, '#3b1640');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw clouds
      clouds.forEach(cloud => {
        cloud.x += cloud.speed;
        if (cloud.x > canvas.width + cloud.width) {
          cloud.x = -cloud.width;
        }
        drawCloud(cloud);
      });
      
      // Draw rainbow
      drawRainbow();
      
      // Update and draw lightning
      lightnings = lightnings.filter(lightning => lightning.timeLeft > 0);
      lightnings.forEach(lightning => drawLightning(lightning));
      
      // Update and draw raindrops
      raindrops.forEach(drop => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(200, 220, 255, ${drop.opacity})`;
        ctx.ellipse(drop.x, drop.y, drop.size / 2, drop.size, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Update raindrop position
        drop.y += drop.speed;
        
        // Reset raindrop if it goes off screen
        if (drop.y > canvas.height) {
          drop.y = -10;
          drop.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();

    window.addEventListener('resize', setCanvasSize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (thunderTimeoutRef.current) {
        clearTimeout(thunderTimeoutRef.current);
      }
    };
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
