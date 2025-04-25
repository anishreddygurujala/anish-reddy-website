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

interface Sun {
  x: number;
  y: number;
  radius: number;
  glowRadius: number;
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
    
    // Initialize sun
    const sun: Sun = {
      x: 0,
      y: canvas.height * 0.3,
      radius: 50,
      glowRadius: 80
    };

    // Calculate sun position based on time
    const updateSunPosition = () => {
      const now = new Date();
      const hours = now.getHours() + now.getMinutes() / 60;
      
      // Map 24 hours to canvas width (6am to 6pm is visible)
      const dayProgress = (hours - 6) / 12;
      sun.x = canvas.width * dayProgress;
      
      // Add slight vertical movement (arc)
      sun.y = canvas.height * 0.3 - Math.sin(dayProgress * Math.PI) * 50;
    };

    // Create clouds
    for (let i = 0; i < 8; i++) {
      clouds.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.3,
        width: 200 + Math.random() * 300,
        height: 80 + Math.random() * 80,
        speed: 0.2 + Math.random() * 0.2,
        opacity: 0.3 + Math.random() * 0.2
      });
    }

    // Create raindrops
    for (let i = 0; i < 200; i++) {
      raindrops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 5 + Math.random() * 7,
        size: 1 + Math.random() * 2,
        opacity: 0.2 + Math.random() * 0.2
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
      const nextThunder = 8000 + Math.random() * 20000;
      thunderTimeoutRef.current = window.setTimeout(() => {
        lightnings.push(createLightning());
        scheduleThunder();
      }, nextThunder);
    };

    scheduleThunder();

    // Draw sun with glow effect
    const drawSun = () => {
      ctx.save();
      
      // Create gradient for sun glow
      const gradient = ctx.createRadialGradient(
        sun.x, sun.y, sun.radius,
        sun.x, sun.y, sun.glowRadius
      );
      gradient.addColorStop(0, 'rgba(255, 220, 100, 1)');
      gradient.addColorStop(0.3, 'rgba(255, 220, 100, 0.3)');
      gradient.addColorStop(1, 'rgba(255, 220, 100, 0)');
      
      // Draw glow
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(sun.x, sun.y, sun.glowRadius, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw sun core
      ctx.fillStyle = '#FFE87C';
      ctx.beginPath();
      ctx.arc(sun.x, sun.y, sun.radius, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    // Draw cloud
    const drawCloud = (cloud: Cloud) => {
      ctx.save();
      ctx.fillStyle = `rgba(200, 200, 210, ${cloud.opacity})`;
      
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
      
      lightning.timeLeft -= 16;
      lightning.opacity = lightning.timeLeft / lightning.duration;
      
      // Add bright background flash
      ctx.fillStyle = `rgba(255, 255, 240, ${lightning.opacity * 0.1})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with a light blue-gray gradient for daytime
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#87CEEB');
      gradient.addColorStop(1, '#B0C4DE');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw sun
      updateSunPosition();
      drawSun();
      
      // Update and draw clouds
      clouds.forEach(cloud => {
        cloud.x += cloud.speed;
        if (cloud.x > canvas.width + cloud.width) {
          cloud.x = -cloud.width;
        }
        drawCloud(cloud);
      });
      
      // Update and draw lightning
      lightnings = lightnings.filter(lightning => lightning.timeLeft > 0);
      lightnings.forEach(lightning => drawLightning(lightning));
      
      // Draw raindrops
      raindrops.forEach(drop => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(220, 230, 240, ${drop.opacity})`;
        ctx.ellipse(drop.x, drop.y, drop.size / 2, drop.size, 0, 0, Math.PI * 2);
        ctx.fill();
        
        drop.y += drop.speed;
        
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
