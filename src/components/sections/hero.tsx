"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/hero/hero-visual";
import { BRAND } from "@/lib/constants";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen flex-col overflow-hidden pt-24 lg:flex-row lg:items-center lg:pt-0"
      aria-label="معرفی"
    >
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 flex flex-1 flex-col justify-center px-4 pb-8 md:px-8 lg:px-12 lg:pb-0 xl:px-16"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-secondary"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          {BRAND.tagline}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="max-w-xl text-4xl font-black leading-tight md:text-5xl lg:text-6xl xl:text-7xl"
        >
          قدرت واقعی
          <br />
          <span className="text-gradient">در بدن شماست</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-lg text-base text-muted-foreground leading-relaxed md:text-lg"
        >
          در {BRAND.name} با تمرینات تخصصی، مربیان نخبه و فناوری پیشرفته،
          بهترین نسخه خود را بسازید. سفر تحول شما از همین‌جا آغاز می‌شود.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button size="lg" className="w-full sm:w-auto" asChild data-cursor="hover">
            <Link href="#contact">
              شروع رایگان
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
            data-cursor="hover"
          >
            <Play className="h-5 w-5 fill-current" />
            تماشای ویدیو
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex flex-wrap gap-8 text-sm"
        >
          {[
            { value: "۱۲۰۰+", label: "عضو فعال" },
            { value: "۹۸٪", label: "رضایت" },
            { value: "۳۰+", label: "مربی" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-gradient">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden lg:min-h-screen">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(255,23,68,0.04) 0%, rgba(0,217,255,0.03) 40%, transparent 70%)",
          }}
        />
        <HeroVisual />
      </div>
    </section>
  );
}
