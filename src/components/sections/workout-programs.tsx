"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Flame, ArrowLeft } from "lucide-react";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/lib/images";

const programs = [
  {
    title: "هیبرید قدرت",
    desc: "ترکیب قدرت و استقامت برای بدنی فوق‌العاده",
    difficulty: "پیشرفته",
    duration: "۱۲ هفته",
  },
  {
    title: "چربی‌سوزی شدید",
    desc: "کاهش درصد چربی با حفظ عضله",
    difficulty: "متوسط",
    duration: "۸ هفته",
  },
  {
    title: "بدنسازی کلاسیک",
    desc: "حجم‌دهی حرفه‌ای و فرم‌دهی",
    difficulty: "حرفه‌ای",
    duration: "۱۶ هفته",
  },
  {
    title: "آمادگی عملکردی",
    desc: "قدرت، چابکی و انعطاف همزمان",
    difficulty: "مبتدی",
    duration: "۶ هفته",
  },
].map((program, i) => ({
  ...program,
  image: IMAGES.programs[i]!,
}));

export function WorkoutPrograms() {
  return (
    <section
      id="programs"
      className="py-24 md:py-32"
      aria-labelledby="programs-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="برنامه‌ها"
          title="برنامه‌های تمرینی"
          description="طراحی شده توسط مربیان المپیکی"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <motion.article
              key={program.title}
              data-animate="fade-up"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card"
              style={{ perspective: 1000 }}
              whileHover={{ rotateX: 2, rotateY: -2 }}
            >
              <div className="relative h-64 overflow-hidden md:h-72">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:shadow-[inset_0_0_60px_rgba(255,23,68,0.2)]" />
              </div>
              <div className="relative p-6">
                <div className="mb-3 flex flex-wrap gap-3 text-xs">
                  <span className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-primary">
                    <Flame className="h-3 w-3" />
                    {program.difficulty}
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-secondary/10 px-3 py-1 text-secondary">
                    <Clock className="h-3 w-3" />
                    {program.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-bold">{program.title}</h3>
                <p className="mt-2 text-muted-foreground">{program.desc}</p>
                <Button variant="ghost" className="mt-4 gap-2 p-0" asChild>
                  <Link href="#contact">
                    شروع برنامه
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
