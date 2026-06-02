"use client";

import { SectionHeading } from "@/components/layout/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "عضویت چگونه است؟",
    a: "پس از مشاوره رایگان، پلن ماهانه، فصلی یا سالانه متناسب با اهداف شما انتخاب می‌شود. امکان لغو با ۳۰ روز اطلاع قبلی وجود دارد.",
  },
  {
    q: "آیا برنامه تغذیه شامل می‌شود؟",
    a: "بله، تمام پلن‌های پریمیوم شامل برنامه غذایی شخصی‌سازی شده و پیگیری هفتگی توسط متخصص تغذیه هستند.",
  },
  {
    q: "ساعات کاری باشگاه؟",
    a: "شنبه تا پنج‌شنبه ۶ صبح تا ۱۱ شب، جمعه‌ها ۸ صبح تا ۹ شب. اعضای VIP دسترسی ۲۴ ساعته دارند.",
  },
  {
    q: "آیا امکان تمرین آنلاین وجود دارد؟",
    a: "بله، اپلیکیشن BANDGYM با ویدیوهای آموزشی، پیگیری پیشرفت و ارتباط مستقیم با مربی در دسترس است.",
  },
  {
    q: "تجهیزات باشگاه چگونه است؟",
    a: "مجهز به جدیدترین دستگاه‌های Hammer Strength، رک‌های المپیکی، zona کاردیو و استودیوهای گروهی.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <SectionHeading
          eyebrow="سوالات"
          title="پرسش‌های متداول"
          description="پاسخ سریع به دغدغه‌های شما"
        />
        <Accordion type="single" collapsible className="w-full" data-animate="fade-up">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={`item-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
