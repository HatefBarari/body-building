"use client";

import { useEffect, useRef } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (!isDesktop) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let x = 0;
    let y = 0;
    let ringX = 0;
    let ringY = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      cursor.style.transform = `translate(${x}px, ${y}px)`;
    };

    const animate = () => {
      ringX += (x - ringX) * 0.15;
      ringY += (y - ringY) * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(animate);
    };
    animate();

    const interactive = document.querySelectorAll(
      "a, button, [data-cursor='hover']",
    );
    const onEnter = () => {
      ring.style.width = "56px";
      ring.style.height = "56px";
      ring.style.opacity = "0.9";
    };
    const onLeave = () => {
      ring.style.width = "40px";
      ring.style.height = "40px";
      ring.style.opacity = "0.6";
    };

    interactive.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    window.addEventListener("mousemove", onMove);
    document.body.classList.add("cursor-hidden");

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.classList.remove("cursor-hidden");
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <style jsx global>{`
        @media (min-width: 1024px) {
          body.cursor-hidden,
          body.cursor-hidden * {
            cursor: none !important;
          }
        }
      `}</style>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-1 -mt-1 h-2 w-2 rounded-full bg-white mix-blend-difference"
        aria-hidden
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] -ml-5 -mt-5 h-10 w-10 rounded-full border border-transparent opacity-60 transition-all duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(255,23,68,0.25) 0%, rgba(0,217,255,0.2) 50%, transparent 70%)",
          boxShadow:
            "0 0 20px rgba(255,23,68,0.4), 0 0 30px rgba(0,217,255,0.3)",
        }}
        aria-hidden
      />
    </>
  );
}
