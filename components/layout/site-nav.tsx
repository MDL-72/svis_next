"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SiteLogo from "@/components/layout/site-logo";
import { Menu, X } from "lucide-react";
import { menuList } from "@/lib/navigation";
import { enrollmentContent } from "@/lib/content/home";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function SiteNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          isScrolled
            ? "border-gold/20 bg-navy/95 shadow-lg backdrop-blur-md"
            : "border-transparent bg-navy/50 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 md:px-8">
          <Link href="/" className="shrink-0" title="SVIS - Home">
            <SiteLogo priority className="h-14 w-14 drop-shadow-md md:h-16 md:w-16" />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {menuList.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                title={`SVIS - ${item.menuName}`}
                className={cn(
                  "rounded-md px-4 py-2 font-heading text-sm font-medium transition-colors",
                  pathname === item.path
                    ? "bg-gold/20 text-gold-light"
                    : "text-cream/90 hover:bg-white/10 hover:text-gold-light"
                )}
              >
                {item.menuName}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="ml-3 bg-gold font-heading font-semibold text-navy hover:bg-gold-light"
            >
              <Link href={enrollmentContent.ctaPath}>Enroll Now</Link>
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="text-cream hover:bg-white/10 hover:text-gold-light md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-navy/98 backdrop-blur-md md:hidden">
          <nav className="flex h-full flex-col items-center justify-center gap-6 px-6">
            {menuList.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "font-heading text-2xl font-medium transition-colors",
                  pathname === item.path ? "text-gold-light" : "text-cream hover:text-gold-light"
                )}
              >
                {item.menuName}
              </Link>
            ))}
            <Button
              asChild
              size="xl"
              className="mt-4 bg-gold font-heading font-semibold text-navy hover:bg-gold-light"
            >
              <Link href={enrollmentContent.ctaPath} onClick={() => setMobileOpen(false)}>
                Enroll Now
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
