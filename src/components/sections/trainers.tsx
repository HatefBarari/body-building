"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Share2, Globe } from "lucide-react";
import { SectionHeading } from "@/components/layout/section-heading";
import {
  genderFromPersianName,
  type CoachGender,
} from "@/lib/coach-gender";
import { IMAGES } from "@/lib/images";

const coachImageByGender: Record<CoachGender, [string, string]> = {
  male: [IMAGES.trainers.male, IMAGES.trainers.maleAlt],
  female: [IMAGES.trainers.female, IMAGES.trainers.femaleAlt],
};

type TrainerEntry = {
  name: string;
  role: string;
  exp: string;
  certs: string;
  image?: string;
};

const trainers: TrainerEntry[] = [
  {
    name: "آرش راد",
    role: "مربی بدنسازی",
    exp: "۱۲ سال",
    certs: "IFBB Pro · NASM",
    image: IMAGES.trainers.female,
  },
  {
    name: "سارا امینی",
    role: "مربی عملکرد",
    exp: "۸ سال",
    certs: "CSCS · Precision Nutrition",
    image: IMAGES.trainers.femaleBodybuilder,
  },
  {
    name: "کیوان نوری",
    role: "مربی قدرت",
    exp: "۱۵ سال",
    certs: "USAW · CrossFit L3",
    image: IMAGES.trainers.maleBodybuilder,
  },
  {
    name: "مینا کاظمی",
    role: "مربی تغذیه",
    exp: "۱۰ سال",
    certs: "RD · ISSN",
  },
];

/** trainer-2 is pinned to آرش; skip female pool slot 0 for مینا. */
const genderSlot: Record<CoachGender, number> = { male: 0, female: 1 };

const trainersWithImages = trainers.map((trainer) => {
  const gender = genderFromPersianName(trainer.name);
  if (trainer.image) {
    return { ...trainer, gender, image: trainer.image };
  }
  const pool = coachImageByGender[gender];
  const slot = genderSlot[gender]++;
  return {
    ...trainer,
    gender,
    image: pool[slot % pool.length]!,
  };
});

export function Trainers() {
  return (
    <section
      id="trainers"
      className="py-24 md:py-32"
      aria-labelledby="trainers-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="تیم"
          title="مربیان نخبه"
          description="تجربه جهانی، نتایج محلی"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainersWithImages.map((trainer) => (
            <motion.article
              key={trainer.name}
              data-animate="fade-up"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-5 transition-all duration-500 group-hover:pb-8">
                <h3 className="text-xl font-bold">{trainer.name}</h3>
                <p className="text-sm text-secondary">{trainer.role}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {trainer.exp} تجربه
                </p>
                <div className="mt-0 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-4 group-hover:max-h-40 group-hover:opacity-100">
                  <p className="text-xs text-muted-foreground">{trainer.certs}</p>
                  <div className="mt-3 flex gap-3">
                    <a
                      href="#"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label={`اینستاگرام ${trainer.name}`}
                    >
                      <Share2 className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground transition-colors hover:text-secondary"
                      aria-label={`لینکدین ${trainer.name}`}
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
