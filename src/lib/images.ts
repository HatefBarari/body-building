/** Local assets under /public/images — avoids remote CDN failures. */
export const IMAGES = {
  hero: {
    male: "/images/hero-athlete-male.png",
    female: "/images/hero-athlete-female.png",
  },
  trainers: {
    male: "/images/trainer-1.jpg",
    maleAlt: "/images/trainer-3.jpg",
    female: "/images/trainer-2.jpg",
    femaleAlt: "/images/trainer-4.jpg",
    femaleBodybuilder: "/images/hero-athlete-female.png",
    maleBodybuilder: "/images/hero-athlete-male.png",
  },
  programs: [
    "/images/programs/hybrid-training.jpg",
    "/images/programs/fat-burning.jpg",
    "/images/programs/hypertrophy.jpg",
    "/images/programs/mobility.jpg",
  ],
  services: {
    personalTraining: "/images/services/personal-training.webp",
  },
  nutrition: "/images/nutrition/meal-prep.jpg",
  gallery: {
    before: "/images/transformation-before.png",
    after: "/images/transformation-after.png",
  },
  apparel: {
    wristbands: "/images/apparel/wristbands.png",
    shoes: "/images/apparel/sports-shoes.png",
    shaker: "/images/apparel/protein-shaker.png",
    gymTee: "/images/apparel/gym-tee.png",
    shorts: "/images/apparel/training-shorts.png",
    gloves: "/images/apparel/gym-gloves.png",
  },
  supplements: {
    whey: "/images/supplements/whey-protein.png",
    creatine: "/images/supplements/creatine.webp",
    bcaa: "/images/supplements/bcaa.webp",
    massGainer: "/images/supplements/mass-gainer.png",
    omega3: "/images/supplements/omega3.png",
    preworkout: "/images/supplements/preworkout.png",
  },
} as const;
