"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/layout/section-heading";
import { IMAGES } from "@/lib/images";

const benefits = [
  "برنامه غذایی شخصی‌سازی شده",
  "محاسبه دقیق ماکروها",
  "منوی هفتگی متنوع",
  "پشتیبانی تغذیه‌ای ۲۴/۷",
  "هماهنگی با برنامه تمرینی",
];

export function Nutrition() {
  return (
    <section
      id="nutrition"
      className="py-24 md:py-32"
      aria-labelledby="nutrition-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="تغذیه"
          title="تغذیه علمی"
          description="سوخت بدن شما برای عملکرد حداکثری"
        />
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            data-animate="fade-up"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src={IMAGES.nutrition}
              alt="وعده غذایی سالم"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-secondary/20" />
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-6 right-6 rounded-xl glass px-4 py-3"
            >
              <p className="text-sm font-bold">۲۴۰۰ kcal</p>
              <p className="text-xs text-muted-foreground">پروتئین بالا</p>
            </motion.div>
          </motion.div>

          <motion.div data-animate="fade-up" className="space-y-6">
            <h3 className="text-3xl font-bold">
              تغذیه‌ای که با <span className="text-gradient">اهداف شما</span>{" "}
              هم‌راستا است
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              تیم متخصص تغذیه BANDGYM با تحلیل دقیق متابولیسم، ترکیب بدنی و
              سبک زندگی شما، برنامه‌ای طراحی می‌کند که نه تنها نتیجه می‌دهد،
              بلکه پایدار و لذت‌بخش است.
            </p>
            <ul className="space-y-4">
              {benefits.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
