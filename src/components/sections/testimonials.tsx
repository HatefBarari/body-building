"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/layout/section-heading";

const MARQUEE_COPIES = 4;

const testimonials = [
  {
    name: "امیر حسینی",
    role: "کارآفرین",
    text: "در ۶ ماه ۱۴ کیلو چربی سوزاندم و عضله ساختم. تیم BANDGYM فوق‌العاده حرفه‌ای است.",
    rating: 5,
  },
  {
    name: "نیلوفر احمدی",
    role: "پزشک",
    text: "برنامه تغذیه و تمرین کاملاً شخصی‌سازی شده بود. بهترین سرمایه‌گذاری برای سلامتی.",
    rating: 5,
  },
  {
    name: "پویا مرادی",
    role: "ورزشکار",
    text: "فضای باشگاه و تجهیزات در سطح بین‌المللی. مربیان واقعاً کنارتان هستند.",
    rating: 5,
  },
  {
    name: "الهام رضایی",
    role: "طراح",
    text: "از نظر طراحی و تجربه کاربری اپ هم عالی است. همه چیز یکپارچه و لوکس.",
    rating: 5,
  },
  {
    name: "سارا کریمی",
    role: "مهندس نرم‌افزار",
    text: "با شلوغی کار، برنامه انعطاف‌پذیر بود. هر هفته پیشرفتم را در اپ می‌دیدم و انگیزه‌ام بیشتر شد.",
    rating: 5,
  },
  {
    name: "رضا جعفری",
    role: "بازیکن فوتبال",
    text: "تمرینات قدرتی و ریکاوری دقیقاً مطابق فصل مسابقاتم بود. عملکردم روی زمین محسوس بهتر شد.",
    rating: 5,
  },
  {
    name: "مریم صادقی",
    role: "مادر دو فرزند",
    text: "کلاس‌های گروهی و ساعت‌های متنوع باعث شد بدون استرس خانواده، منظم تمرین کنم.",
    rating: 5,
  },
  {
    name: "کامران نوری",
    role: "مدیر بازاریابی",
    text: "مربی تغذیه واقعاً گوش می‌دهد. وزن و انرژی‌ام پایدار شد و دیگر رژیم‌های موقت نمی‌زنم.",
    rating: 5,
  },
  {
    name: "آرش محمودی",
    role: "عکاس",
    text: "نورپردازی و فضای باشگاه برای کارم هم جذاب است؛ هم بدنسازی می‌کنم هم از محیط لذت می‌برم.",
    rating: 5,
  },
  {
    name: "فاطمه موسوی",
    role: "دانشجوی پزشکی",
    text: "فرم و تکنیک حرکات را از اول درست یاد گرفتم. دیگر درد کمر و زانو ندارم.",
    rating: 5,
  },
  {
    name: "بهرام قاسمی",
    role: "صاحب کسب‌وکار",
    text: "پکیج VIP ارزشش را داشت؛ پیگیری روزانه مربی و گزارش هفتگی دقیقاً همان چیزی بود که می‌خواستم.",
    rating: 5,
  },
  {
    name: "حسین ملکی",
    role: "معلم",
    text: "کلاس‌های صبح قبل از مدرسه عالی است. انرژی‌ام تا آخر روز بالا می‌ماند.",
    rating: 5,
  },
  {
    name: "لیلا باقری",
    role: "حسابدار",
    text: "پس از زایمان با برنامه تدریجی برگشتم. مربیان صبور و دقیق بودند.",
    rating: 5,
  },
  {
    name: "امین توکلی",
    role: "دانشجوی مهندسی",
    text: "قیمت شفاف و بدون هزینه پنهان. برای دانشجو هم پکیج مناسب دارند.",
    rating: 5,
  },
  {
    name: "شیدا حکیمی",
    role: "مدیر منابع انسانی",
    text: "تیم شرکت‌مان قرارداد سازمانی گرفت. حضور و غیاب و گزارش در اپ خیلی راحت است.",
    rating: 5,
  },
  {
    name: "مجید رستمی",
    role: "بازنشسته",
    text: "در ۵۵ سالگی دوباره احساس جوانی می‌کنم. تمرینات ایمن و کنترل‌شده طراحی شده بود.",
    rating: 5,
  },
  {
    name: "پریا نجفی",
    role: "اینفلوئنسر",
    text: "کیفیت فیلم‌برداری و نور برای محتوا عالی است. باشگاه واقعاً حرفه‌ای به نظر می‌رسد.",
    rating: 5,
  },
  {
    name: "دانیال شریفی",
    role: "برنامه‌نویس",
    text: "ساعت ۲۴ ساعته برای شبانه‌کارها عالی است. دیگر بهانه «باشگاه بسته است» ندارم.",
    rating: 5,
  },
  {
    name: "نگار فرهادی",
    role: "وکیل",
    text: "بین جلسات دادگاه، تمرین ۴۵ دقیقه‌ای برنامه‌ریزی شده دارم. واقعاً وقت‌برنده است.",
    rating: 5,
  },
  {
    name: "مهدی کاظمی",
    role: "راننده تاکسی آنلاین",
    text: "شب‌ها می‌آیم، صبح زود برمی‌گردم. پارکینگ و رختکن تمیز و سریع در دسترس است.",
    rating: 5,
  },
  {
    name: "آتنا رحیمی",
    role: "دانشجوی رقص",
    text: "کلاس پیلاتس و کشش عضله بعد از تمرین وزنه، انعطاف‌پذیری‌ام را دو برابر کرد.",
    rating: 5,
  },
  {
    name: "فرزاد امینی",
    role: "آشپز",
    text: "برنامه غذایی با شیفت کاری‌ام هماهنگ شد. دیگر بعد از شیفت شب پرخوری نمی‌کنم.",
    rating: 5,
  },
  {
    name: "زهرا طاهری",
    role: "پرستار",
    text: "بعد از شیفت ۱۲ ساعته، انرژی‌ام را با تمرین سبک و هوازی برمی‌گردانم.",
    rating: 5,
  },
  {
    name: "کیوان عباسی",
    role: "بازیکن بسکتبال",
    text: "پرش عمودی و سرعت دویدنم در سه ماه ۱۵٪ بهتر شد. تست عملکرد منظم دارند.",
    rating: 5,
  },
  {
    name: "مینا جلالی",
    role: "فروشنده",
    text: "اولین باشگاهی بود که بدون قرارداد اجبارى سالانه پذیرفتم. اعتمادسازی واقعی.",
    rating: 5,
  },
  {
    name: "سینا برومند",
    role: "تدوینگر",
    text: "ایستگاه کشش و فوم رولر کنار دستگاه‌ها عالی است. گردن و کتف‌ام دیگر گرفتگی ندارد.",
    rating: 5,
  },
  {
    name: "هانیه صفری",
    role: "معمار",
    text: "طراحی داخلی باشگاه الهام‌بخش است. هر بار می‌آیم حس می‌کنم جای درستی هستم.",
    rating: 5,
  },
  {
    name: "علیرضا میرزایی",
    role: "معلم یوگا",
    text: "به عنوان مربی، کیفیت کف سال و تهویه برای کلاس‌های گروهی استاندارد است.",
    rating: 5,
  },
];

function buildMarqueeLoop(items: typeof testimonials) {
  return Array.from({ length: MARQUEE_COPIES }, () => items).flat();
}

function TestimonialCard({
  item,
}: {
  item: (typeof testimonials)[number];
}) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className="glass mx-2 min-w-[260px] max-w-[320px] flex-shrink-0 rounded-2xl p-5 transition-shadow duration-500 hover:shadow-[0_0_32px_rgba(0,217,255,0.12)] sm:mx-3 sm:min-w-[280px] md:min-w-[300px] md:max-w-[340px] md:p-6"
    >
      <div className="mb-3 flex gap-1">
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        &ldquo;{item.text}&rdquo;
      </p>
      <div className="mt-4 border-t border-border pt-4">
        <p className="font-bold">{item.name}</p>
        <p className="text-xs text-secondary">{item.role}</p>
      </div>
    </motion.article>
  );
}

function TestimonialMarquee({
  items,
  direction,
}: {
  items: typeof testimonials;
  direction: "left" | "right";
}) {
  const loop = buildMarqueeLoop(items);

  return (
    <div
      className={
        direction === "left"
          ? "animate-marquee-left flex w-max group-hover:[animation-play-state:paused]"
          : "animate-marquee-right flex w-max group-hover:[animation-play-state:paused]"
      }
    >
      {loop.map((item, i) => (
        <TestimonialCard key={`${item.name}-${i}`} item={item} />
      ))}
    </div>
  );
}

export function Testimonials() {
  const midpoint = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, midpoint);
  const row2 = testimonials.slice(midpoint);

  return (
    <section
      id="testimonials"
      className="overflow-hidden py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="نظرات"
          title="صدای اعضا"
          description="تجربه واقعی، نتایج واقعی"
        />
      </div>
      <div
        className="testimonials-marquee group relative mt-10 space-y-6"
        style={{ ["--marquee-copies" as string]: MARQUEE_COPIES }}
      >
        <div className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 start-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-24"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 end-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-24"
            aria-hidden
          />
          <TestimonialMarquee items={row1} direction="left" />
        </div>
        <div className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 start-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-24"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 end-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-24"
            aria-hidden
          />
          <TestimonialMarquee items={row2} direction="right" />
        </div>
      </div>
    </section>
  );
}
