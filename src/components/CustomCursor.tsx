import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorDotPosition, setCursorDotPosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);
  let sparkleId = 0;

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 10, y: e.clientY - 10 });
      setCursorDotPosition({ x: e.clientX - 2, y: e.clientY - 2 });

      // Add sparkle effect
      if (Math.random() > 0.8) {
        setSparkles(prev => [...prev, {
          id: sparkleId++,
          x: e.clientX - 5,
          y: e.clientY - 5
        }]);
      }
    };

    // Clean up sparkles after animation
    const cleanupInterval = setInterval(() => {
      setSparkles(prev => prev.slice(-5));
    }, 1000);

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      clearInterval(cleanupInterval);
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${cursorDotPosition.x}px, ${cursorDotPosition.y}px)`
        }}
      />
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: sparkle.x,
            top: sparkle.y
          }}
        />
      ))}
    </>
  );
}