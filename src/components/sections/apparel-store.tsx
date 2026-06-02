"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/layout/section-heading";
import { IMAGES } from "@/lib/images";

const items = [
  {
    name: "مچ‌بند ورزشی",
    price: "۱۸۰,۰۰۰",
    image: IMAGES.apparel.wristbands,
  },
  {
    name: "کفش ورزشی",
    price: "۲,۴۹۰,۰۰۰",
    image: IMAGES.apparel.shoes,
  },
  {
    name: "شیکر پروتئین",
    price: "۲۹۰,۰۰۰",
    image: IMAGES.apparel.shaker,
  },
  {
    name: "تیشرت جیم",
    price: "۴۵۰,۰۰۰",
    image: IMAGES.apparel.gymTee,
  },
  {
    name: "شلوارک تمرین",
    price: "۳۲۰,۰۰۰",
    image: IMAGES.apparel.shorts,
  },
  {
    name: "دستکش ورزشی",
    price: "۲۱۰,۰۰۰",
    image: IMAGES.apparel.gloves,
  },
];

export function ApparelStore() {
  return (
    <section
      id="apparel"
      className="py-24 md:py-32"
      aria-labelledby="apparel-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="تجهیزات ورزشی"
          title="پوشاک و گجت تمرین"
          description="مچ‌بند، کفش، شیکر و لباس مخصوص باشگاه — نه مد روزمره"
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {items.map((item) => (
            <motion.article
              key={item.name}
              data-animate="fade-up"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group glass overflow-hidden rounded-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="relative aspect-square overflow-hidden bg-surface/80 p-3 sm:p-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="border-t border-border p-4 md:p-5">
                <h3 className="font-bold md:text-lg">{item.name}</h3>
                <p className="mt-1 text-sm text-secondary">{item.price} تومان</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
