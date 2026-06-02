"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const contactInfo = [
  { icon: MapPin, text: "تهران، خیابان ولیعصر، پلاک ۱۲۴۵" },
  { icon: Phone, text: "۰۲۱-۱۲۳۴-۵۶۷۸" },
  { icon: Mail, text: "hello@bandgym.com" },
  { icon: Clock, text: "شنبه–پنج‌شنبه ۶–۲۳" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="تماس"
          title="با ما در ارتباط باشید"
          description="مشاوره رایگان — اولین جلسه هدیه ما"
        />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            data-animate="fade-up"
            className="relative min-h-[320px] overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="text-center">
                <MapPin className="mx-auto h-12 w-12 text-secondary" />
                <p className="mt-4 font-semibold">نقشه تعاملی</p>
                <p className="text-sm text-muted-foreground">
                  Tehran · BANDGYM HQ
                </p>
              </div>
            </div>
            <ul className="absolute bottom-0 left-0 right-0 space-y-3 p-6">
              {contactInfo.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-3 text-sm"
                >
                  <item.icon className="h-4 w-4 shrink-0 text-primary" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <form
            data-animate="fade-up"
            className="glass rounded-2xl p-6 md:p-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">نام</Label>
                <Input id="name" placeholder="نام شما" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">تلفن</Label>
                <Input id="phone" type="tel" placeholder="۰۹۱۲..." required />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="email">ایمیل</Label>
                <Input id="email" type="email" placeholder="you@email.com" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message">پیام</Label>
                <textarea
                  id="message"
                  rows={4}
                  className="flex w-full rounded-lg border border-input bg-surface/80 px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="هدف و سوالات خود را بنویسید..."
                  required
                />
              </div>
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full">
              ارسال درخواست
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
