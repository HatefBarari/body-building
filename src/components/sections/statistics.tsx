"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { SectionHeading } from "@/components/layout/section-heading";

const stats = [
  { value: 1200, suffix: "+", label: "اعضای فعال", labelEn: "Members" },
  { value: 50, suffix: "+", label: "برنامه تمرینی", labelEn: "Programs" },
  { value: 30, suffix: "+", label: "مربی حرفه‌ای", labelEn: "Coaches" },
  { value: 98, suffix: "%", label: "نرخ موفقیت", labelEn: "Success Rate" },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span className="text-4xl font-black text-gradient md:text-6xl">
      {count.toLocaleString("fa-IR")}
      {suffix}
    </span>
  );
}

function StatCard({
  stat,
}: {
  stat: (typeof stats)[number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      data-animate="fade-up"
      className="glow-border group relative rounded-2xl border border-border bg-card/60 p-8 text-center backdrop-blur-sm transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(255,23,68,0.15)]"
    >
      <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
      <p className="mt-3 text-lg font-semibold">{stat.label}</p>
      <p className="text-xs uppercase tracking-widest text-muted-foreground">
        {stat.labelEn}
      </p>
    </div>
  );
}

export function Statistics() {
  return (
    <section
      id="statistics"
      className="relative py-24 md:py-32"
      aria-labelledby="statistics-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="آمار و دستاورد"
          title="اعداد حرف می‌زنند"
          description="اعتماد هزاران ورزشکار به کیفیت خدمات و نتایج ما"
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
