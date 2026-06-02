"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Users,
  Apple,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { SectionHeading } from "@/components/layout/section-heading";
import { IMAGES } from "@/lib/images";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Dumbbell,
    title: "تمرین شخصی",
    desc: "برنامه اختصاصی با مربی خصوصی",
    span: "md:col-span-2 md:row-span-2",
    accent: "from-primary/20 to-transparent",
    image: IMAGES.services.personalTraining,
  },
  {
    icon: Users,
    title: "تمرین گروهی",
    desc: "انرژی تیمی و انگیزه بالا",
    span: "md:col-span-1",
    accent: "from-secondary/20 to-transparent",
  },
  {
    icon: Apple,
    title: "تغذیه ورزشی",
    desc: "رژیم علمی متناسب با هدف",
    span: "md:col-span-1",
    accent: "from-accent/20 to-transparent",
  },
  {
    icon: Sparkles,
    title: "برنامه تحول",
    desc: "تغییر بدنی ۹۰ روزه",
    span: "md:col-span-1",
    accent: "from-primary/15 to-secondary/10",
  },
  {
    icon: TrendingUp,
    title: "قدرت‌سازی",
    desc: "افزایش حجم و قدرت عضلانی",
    span: "md:col-span-1",
    accent: "from-secondary/15 to-transparent",
  },
  {
    icon: Zap,
    title: "عملکرد ورزشی",
    desc: "آمادگی حرفه‌ای و سرعت",
    span: "md:col-span-2",
    accent: "from-primary/10 via-secondary/10 to-transparent",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="خدمات"
          title="خدمات پریمیوم"
          description="هر آنچه برای رسیدن به اوج فیزیکی نیاز دارید"
        />
        <div className="grid auto-rows-[minmax(160px,auto)] grid-cols-1 gap-4 md:grid-cols-4 md:gap-5">
          {services.map((service) => (
            <motion.article
              key={service.title}
              data-animate="fade-up"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={cn(
                "glow-border group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(0,217,255,0.12)]",
                service.span,
              )}
            >
              {service.image ? (
                <>
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    aria-hidden
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/85 to-card/50" />
                </>
              ) : null}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  service.accent,
                )}
              />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <service.icon className="mb-4 h-10 w-10 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:text-secondary" />
                <div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
