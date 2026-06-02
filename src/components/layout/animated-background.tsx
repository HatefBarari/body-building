"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#030303]" />
      <motion.div
        className="absolute -left-1/4 top-0 h-[60vh] w-[60vw] rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,23,68,0.5) 0%, transparent 70%)",
        }}
        animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-1/4 bottom-0 h-[50vh] w-[50vw] rounded-full opacity-25 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,217,255,0.45) 0%, transparent 70%)",
        }}
        animate={{ x: [0, -60, 0], y: [0, -50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,23,68,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,217,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="energy-line absolute h-px w-full opacity-20"
          style={{ top: `${15 + i * 14}%` }}
          animate={{ opacity: [0.1, 0.35, 0.1], scaleX: [0.8, 1, 0.8] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
      <div className="noise-overlay absolute inset-0 opacity-40" />
      {[...Array(20)].map((_, i) => (
        <motion.span
          key={`p-${i}`}
          className="absolute h-1 w-1 rounded-full bg-white/30"
          style={{
            left: `${(i * 17) % 100}%`,
            top: `${(i * 23) % 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + (i % 5),
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}
