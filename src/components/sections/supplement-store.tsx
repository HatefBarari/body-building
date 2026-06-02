"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShoppingBag } from "lucide-react";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/lib/images";

const products = [
  {
    name: "وی پروتئین",
    price: "۱,۲۹۰,۰۰۰",
    rating: 4.9,
    image: IMAGES.supplements.whey,
  },
  {
    name: "کراتین مونوهیدرات",
    price: "۴۹۰,۰۰۰",
    rating: 4.8,
    image: IMAGES.supplements.creatine,
  },
  {
    name: "BCAA",
    price: "۶۸۰,۰۰۰",
    rating: 4.7,
    image: IMAGES.supplements.bcaa,
  },
  {
    name: "مس گینر",
    price: "۱,۵۹۰,۰۰۰",
    rating: 4.9,
    image: IMAGES.supplements.massGainer,
  },
  {
    name: "امگا ۳",
    price: "۳۲۰,۰۰۰",
    rating: 4.6,
    image: IMAGES.supplements.omega3,
  },
  {
    name: "پری‌ورکاوت",
    price: "۵۹۰,۰۰۰",
    rating: 4.8,
    image: IMAGES.supplements.preworkout,
  },
];

export function SupplementStore() {
  return (
    <section
      id="supplements"
      className="py-24 md:py-32"
      aria-labelledby="supplements-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="فروشگاه"
          title="مکمل‌های پریمیوم"
          description="کیفیت دارویی، اثر تضمینی"
        />
        <div className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              data-animate="fade-up"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group glass glow-border min-w-[260px] flex-shrink-0 rounded-2xl p-6 transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(255,23,68,0.15)] md:min-w-0"
            >
              <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-surface/80 p-3 sm:p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 260px, 33vw"
                />
              </div>
              <h3 className="text-lg font-bold">{product.name}</h3>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-1 text-secondary">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
                <span className="text-sm font-bold">{product.price} تومان</span>
              </div>
              <Button variant="glass" className="mt-4 w-full gap-2" size="sm">
                <ShoppingBag className="h-4 w-4" />
                افزودن به سبد
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
