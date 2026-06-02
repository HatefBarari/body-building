"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function PersonalizedPlans() {
  const [generated, setGenerated] = useState(false);

  return (
    <section
      id="plans"
      className="py-24 md:py-32"
      aria-labelledby="plans-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="شخصی‌سازی"
          title="برنامه اختصاصی شما"
          description="فرم هوشمند — بدون نیاز به ثبت‌نام برای پیش‌نمایش"
        />
        <motion.div
          data-animate="fade-up"
          className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-card/80 shadow-[0_0_80px_rgba(0,217,255,0.08)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-2 border-b border-border bg-surface/80 px-6 py-4">
            <span className="h-3 w-3 rounded-full bg-primary" />
            <span className="h-3 w-3 rounded-full bg-secondary/60" />
            <span className="h-3 w-3 rounded-full bg-muted/40" />
            <span className="mr-auto text-xs text-muted-foreground">
              BANDGYM Plan Generator
            </span>
          </div>

          <form
            className="grid gap-6 p-6 md:grid-cols-2 md:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              setGenerated(true);
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="age">سن</Label>
              <Input id="age" type="number" placeholder="۲۸" min={16} max={80} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">قد (سانتی‌متر)</Label>
              <Input id="height" type="number" placeholder="۱۷۸" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">وزن (کیلوگرم)</Label>
              <Input id="weight" type="number" placeholder="۷۵" />
            </div>
            <div className="space-y-2">
              <Label>هدف</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="انتخاب هدف" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cut">کاهش چربی</SelectItem>
                  <SelectItem value="bulk">افزایش حجم</SelectItem>
                  <SelectItem value="maintain">تناسب اندام</SelectItem>
                  <SelectItem value="performance">عملکرد</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>سطح فعالیت</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="انتخاب سطح" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">کم</SelectItem>
                  <SelectItem value="medium">متوسط</SelectItem>
                  <SelectItem value="high">زیاد</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>روزهای تمرین در هفته</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="تعداد روز" />
                </SelectTrigger>
                <SelectContent>
                  {[3, 4, 5, 6].map((d) => (
                    <SelectItem key={d} value={String(d)}>
                      {d} روز
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label>ترجیح تغذیه</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="نوع رژیم" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">استاندارد</SelectItem>
                  <SelectItem value="keto">کتو</SelectItem>
                  <SelectItem value="vegan">گیاهخواری</SelectItem>
                  <SelectItem value="high-protein">پروتئین بالا</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="md:col-span-2">
              <Button type="submit" size="lg" className="w-full gap-2">
                <Sparkles className="h-5 w-5" />
                تولید برنامه
              </Button>
            </div>
          </form>

          {generated && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border-t border-border bg-primary/5 px-6 py-6 text-center md:px-10"
              role="status"
            >
              <p className="font-semibold text-secondary">
                ✓ برنامه پیشنهادی شما آماده است! (نمایشی — بدون اتصال به سرور)
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                برای دریافت برنامه کامل با مربیان ما تماس بگیرید.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
