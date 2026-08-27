"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Exact mouse coordinates
  const mousePos = useRef({ x: -100, y: -100 });
  // Lerped ring coordinates for smooth trail
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number>(0);

  useEffect(() => {
    // Disable custom cursor on touch devices for native UX
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Track hover state on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, .interactive, .btn")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, .interactive, .btn")) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });

    // High-performance 60/120fps render loop
    const render = () => {
      const { x: targetX, y: targetY } = mousePos.current;

      // 1. Instant zero-lag hardware position for precision dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      }

      // 2. High-speed smooth lerp (0.2 factor) for outer glowing ring
      ringPos.current.x += (targetX - ringPos.current.x) * 0.22;
      ringPos.current.y += (targetY - ringPos.current.y) * 0.22;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameId.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isVisible]);

  if (isTouch) return null;

  return (
    <>
      {/* Precision Core Dot — Instant 0ms Lag */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[100] transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
          willChange: "transform",
        }}
      >
        <div
          className={`rounded-full transition-transform duration-150 ease-out ${
            isClicking ? "scale-50" : isHovering ? "scale-0" : "scale-100"
          }`}
          style={{
            width: "8px",
            height: "8px",
            background: "linear-gradient(135deg, #818cf8, #a78bfa)",
            boxShadow: "0 0 10px rgba(129, 140, 248, 0.9), 0 0 20px rgba(167, 139, 250, 0.6)",
          }}
        />
      </div>

      {/* Outer Cyberpunk Glowing Ring — Smooth Interpolation */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[99] transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
          willChange: "transform",
        }}
      >
        <div
          className={`rounded-full transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) flex items-center justify-center`}
          style={{
            width: isHovering ? "52px" : "32px",
            height: isHovering ? "52px" : "32px",
            background: isHovering
              ? "rgba(129, 140, 248, 0.12)"
              : "transparent",
            border: isHovering
              ? "1.5px solid rgba(129, 140, 248, 0.6)"
              : "1px solid rgba(167, 139, 250, 0.35)",
            boxShadow: isHovering
              ? "0 0 25px rgba(129, 140, 248, 0.3), inset 0 0 15px rgba(129, 140, 248, 0.1)"
              : "0 0 10px rgba(167, 139, 250, 0.15)",
            backdropFilter: isHovering ? "blur(4px)" : "none",
            transform: isClicking ? "scale(0.85)" : "scale(1)",
          }}
        />
      </div>
    </>
  );
}
