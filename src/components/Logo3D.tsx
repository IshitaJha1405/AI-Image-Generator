import React, { useRef, useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

export const Logo3D: React.FC = () => {
  const cubeRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: -15, y: 25 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMousePos.x;
    const deltaY = e.clientY - lastMousePos.y;

    setRotation(prev => ({
      x: prev.x - deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }));

    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging, lastMousePos]);

  // Auto-rotation when not being dragged
  useEffect(() => {
    if (!isDragging) {
      const interval = setInterval(() => {
        setRotation(prev => ({
          x: prev.x,
          y: prev.y + 0.2
        }));
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isDragging]);

  return (
    <div className="relative w-16 h-16 perspective-1000 drop-shadow-2xl">
      <div
        ref={cubeRef}
        className={`cube-container ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} drop-shadow-xl`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: isDragging ? 'none' : 'transform 0.1s ease-out'
        }}
        onMouseDown={handleMouseDown}
      >
        {/* Cube Faces */}
        {/* Front Face */}
        <div className="cube-face cube-front">
          <div className="face-content">
            <Palette className="w-6 h-6 text-white drop-shadow-2xl" />
            <div className="face-glow"></div>
          </div>
        </div>

        {/* Back Face */}
        <div className="cube-face cube-back">
          <div className="face-content">
            <Palette className="w-6 h-6 text-white drop-shadow-2xl transform rotate-180" />
            <div className="face-glow"></div>
          </div>
        </div>

        {/* Right Face */}
        <div className="cube-face cube-right">
          <div className="face-content">
            <Palette className="w-6 h-6 text-white drop-shadow-2xl transform rotate-90" />
            <div className="face-glow"></div>
          </div>
        </div>

        {/* Left Face */}
        <div className="cube-face cube-left">
          <div className="face-content">
            <Palette className="w-6 h-6 text-white drop-shadow-2xl transform -rotate-90" />
            <div className="face-glow"></div>
          </div>
        </div>

        {/* Top Face */}
        <div className="cube-face cube-top">
          <div className="face-content">
            <Palette className="w-6 h-6 text-white drop-shadow-2xl transform rotate-45" />
            <div className="face-glow"></div>
          </div>
        </div>

        {/* Bottom Face */}
        <div className="cube-face cube-bottom">
          <div className="face-content">
            <Palette className="w-6 h-6 text-white drop-shadow-2xl transform -rotate-45" />
            <div className="face-glow"></div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>

      {/* Reflection */}
      <div className="cube-reflection">
        <div
          className="cube-container opacity-30"
          style={{
            transform: `rotateX(${-rotation.x - 30}deg) rotateY(${rotation.y}deg) scaleY(-0.5)`,
            transformStyle: 'preserve-3d',
            filter: 'blur(1px)'
          }}
        >
          {/* Reflection faces with reduced opacity */}
          <div className="cube-face cube-front opacity-50">
            <div className="face-content">
              <Palette className="w-6 h-6 text-white/50" />
            </div>
          </div>
          <div className="cube-face cube-back opacity-50">
            <div className="face-content">
              <Palette className="w-6 h-6 text-white/50 transform rotate-180" />
            </div>
          </div>
          <div className="cube-face cube-right opacity-50">
            <div className="face-content">
              <Palette className="w-6 h-6 text-white/50 transform rotate-90" />
            </div>
          </div>
          <div className="cube-face cube-left opacity-50">
            <div className="face-content">
              <Palette className="w-6 h-6 text-white/50 transform -rotate-90" />
            </div>
          </div>
          <div className="cube-face cube-top opacity-50">
            <div className="face-content">
              <Palette className="w-6 h-6 text-white/50 transform rotate-45" />
            </div>
          </div>
          <div className="cube-face cube-bottom opacity-50">
            <div className="face-content">
              <Palette className="w-6 h-6 text-white/50 transform -rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};