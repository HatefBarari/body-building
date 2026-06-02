import Link from "next/link";
import { Share2, Globe, Video, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/constants";

const columns = [
  {
    title: "خدمات",
    links: [
      { label: "تمرین شخصی", href: "#services" },
      { label: "برنامه‌ها", href: "#programs" },
      { label: "تغذیه", href: "#nutrition" },
      { label: "مربیان", href: "#trainers" },
    ],
  },
  {
    title: "فروشگاه",
    links: [
      { label: "مکمل‌ها", href: "#supplements" },
      { label: "تجهیزات ورزشی", href: "#apparel" },
      { label: "عضویت", href: "#contact" },
    ],
  },
  {
    title: "پشتیبانی",
    links: [
      { label: "سوالات", href: "#faq" },
      { label: "تماس", href: "#contact" },
      { label: "گالری", href: "#gallery" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="relative border-t border-border bg-surface/50 pt-20 pb-8"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="#hero" className="text-3xl font-black text-gradient">
              {BRAND.name}
            </Link>
            <p className="mt-4 max-w-sm text-muted-foreground leading-relaxed">
              {BRAND.tagline} — جایی که بدن شما به سطح نخبگان ورزشی می‌رسد.
            </p>
            <div className="mt-6 flex gap-4">
              {[Share2, Globe, Video, Mail].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
                  aria-label="شبکه اجتماعی"
                  data-cursor="hover"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 font-bold">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-4 font-bold">خبرنامه</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              آخرین برنامه‌ها و تخفیف‌های ویژه
            </p>
            <form className="flex flex-col gap-3" action="#" method="post">
              <Input
                type="email"
                placeholder="ایمیل شما"
                aria-label="ایمیل خبرنامه"
              />
              <Button type="submit">عضویت</Button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.name}. تمامی حقوق محفوظ است.</p>
          <p>
            Powered by{" "}
            <a
              href="https://code1sprint.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-secondary transition-colors hover:text-primary"
            >
              Code1Sprint
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
