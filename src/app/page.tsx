import { Hero } from "@/components/sections/hero";
import { Statistics } from "@/components/sections/statistics";
import { Services } from "@/components/sections/services";
import { WorkoutPrograms } from "@/components/sections/workout-programs";
import { PersonalizedPlans } from "@/components/sections/personalized-plans";
import { Nutrition } from "@/components/sections/nutrition";
import { SupplementStore } from "@/components/sections/supplement-store";
import { ApparelStore } from "@/components/sections/apparel-store";
import { Trainers } from "@/components/sections/trainers";
import { TransformationGallery } from "@/components/sections/transformation-gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Statistics />
      <Services />
      <WorkoutPrograms />
      <PersonalizedPlans />
      <Nutrition />
      <SupplementStore />
      <ApparelStore />
      <Trainers />
      <TransformationGallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
