"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { EnergyRing } from "./energy-ring";
import { IMAGES } from "@/lib/images";
import { cn } from "@/lib/utils";

type HoveredSide = "left" | "right" | null;

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<HoveredSide>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const athleteY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const smokeOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[50vh] w-full items-center justify-center md:h-full md:min-h-[600px]"
    >
      <motion.div
        style={{ opacity: smokeOpacity }}
        className="absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(255,23,68,0.08) 0%, rgba(0,217,255,0.05) 35%, transparent 70%)",
          }}
        />
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${100 + i * 35}px`,
              height: `${70 + i * 25}px`,
              left: `${25 + i * 12}%`,
              top: `${35 + (i % 2) * 12}%`,
              background:
                i % 2 === 0 ? "rgba(255,23,68,0.1)" : "rgba(0,217,255,0.08)",
            }}
            animate={{
              x: [0, 20, -15, 0],
              y: [0, -15, 10, 0],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <motion.div
        style={{ rotate: ringRotate }}
        className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center"
      >
        <div className="relative h-[280px] w-[280px] md:h-[420px] md:w-[420px] lg:h-[520px] lg:w-[520px]">
          <div
            className="absolute inset-[12%] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,23,68,0.06) 0%, rgba(0,217,255,0.04) 40%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-[8%] rounded-full border border-white/[0.04]"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.03) 0%, transparent 55%)",
            }}
          />
          <div className="absolute inset-0 animate-spin-slow rounded-full border border-primary/10 shadow-[0_0_60px_rgba(255,23,68,0.15),0_0_90px_rgba(0,217,255,0.12)]" />
          <div className="absolute inset-4 hidden md:block">
            <EnergyRing className="h-full w-full" />
          </div>
          <div
            className="absolute inset-0 rounded-full md:hidden"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(255,23,68,0.6), rgba(0,217,255,0.6), rgba(255,23,68,0.6))",
              mask: "radial-gradient(transparent 62%, black 63%)",
              WebkitMask: "radial-gradient(transparent 62%, black 63%)",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        style={{ y: athleteY }}
        className="relative z-10 flex items-end justify-center [perspective:1200px]"
        onMouseLeave={() => setHovered(null)}
      >
        <AthleteCard
          src={IMAGES.hero.female}
          alt="ورزشکار زن"
          side="left"
          hovered={hovered}
          onHover={() => setHovered("left")}
          delay={0.15}
        />
        <AthleteCard
          src={IMAGES.hero.male}
          alt="ورزشکار مرد"
          side="right"
          hovered={hovered}
          onHover={() => setHovered("right")}
          delay={0.3}
        />
      </motion.div>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 z-[2] h-28 w-2/3 -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,23,68,0.25) 0%, rgba(0,217,255,0.12) 45%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-24 bg-gradient-to-t from-background via-background/60 to-transparent"
        aria-hidden
      />
    </div>
  );
}

function AthleteCard({
  src,
  alt,
  side,
  flip = false,
  hovered,
  onHover,
  delay,
}: {
  src: string;
  alt: string;
  side: "left" | "right";
  flip?: boolean;
  hovered: HoveredSide;
  onHover: () => void;
  delay: number;
}) {
  const isActive = hovered === side;
  const isInactive = hovered !== null && hovered !== side;

  return (
    <motion.figure
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{
        opacity: isInactive ? 0.88 : 1,
        y: isActive ? -28 : isInactive ? 12 : 0,
        scale: isActive ? 1.1 : isInactive ? 0.94 : 1,
      }}
      transition={{ delay: hovered === null ? delay : 0, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{
        zIndex: isActive ? 30 : isInactive ? 10 : side === "left" ? 20 : 15,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={onHover}
      className={cn(
        "group relative w-[42vw] max-w-[220px] cursor-pointer md:max-w-[280px] lg:max-w-[320px]",
        side === "left" && "-mr-10 md:-mr-20",
        side === "right" && "-ml-10 md:-ml-20",
      )}
      data-cursor="hover"
    >
      <div
        className={cn(
          "absolute -inset-4 rounded-3xl blur-2xl transition-opacity duration-500",
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60",
        )}
        style={{
          background:
            "linear-gradient(135deg, rgba(255,23,68,0.35), rgba(0,217,255,0.35))",
        }}
        aria-hidden
      />
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border transition-all duration-500",
          isActive
            ? "border-primary/30 shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
            : "border-white/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.3)]",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 z-10 transition-opacity duration-500",
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
          )}
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 40%, rgba(0,217,255,0.12) 45%, rgba(255,23,68,0.15) 55%, transparent 60%),
              linear-gradient(-45deg, transparent 40%, rgba(255,23,68,0.1) 48%, transparent 58%)
            `,
            mixBlendMode: "screen",
          }}
          aria-hidden
        />
        <Image
          src={src}
          alt={alt}
          width={320}
          height={480}
          className={cn(
            "h-auto w-full object-cover object-top",
            flip && "scale-x-[-1]",
          )}
          priority
          sizes="(max-width: 768px) 42vw, 320px"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
      </div>
    </motion.figure>
  );
}
