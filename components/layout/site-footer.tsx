import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import SiteLogo from "@/components/layout/site-logo";

export default function SiteFooter() {
  return (
    <footer className="border-t border-gold/20 bg-navy text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <SiteLogo alt="SVIS logo" className="mb-4 h-16 w-16" />
          <div className="flex gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden />
            <address className="not-italic text-sm leading-relaxed text-cream/90">
              Blk 25 Lot 1 Phase 2 Pinagsama Village,
              <br />
              Western Bicutan, Taguig City
            </address>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <p className="font-heading text-xs font-semibold uppercase tracking-widest text-gold-light">
            Contact
          </p>
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden />
            <span>02-85856240</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden />
            <span>0949-560-9903 / 0917-838-9940</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden />
            <a
              href="mailto:springofvirtue08@yahoo.com"
              className="transition-colors hover:text-gold-light"
            >
              springofvirtue08@yahoo.com
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <p className="font-heading text-xs font-semibold uppercase tracking-widest text-gold-light">
            Connect
          </p>
          <Link
            href="https://www.facebook.com/SVISofficial"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 transition-colors hover:text-gold-light"
          >
            <Image src="/facebook.png" alt="" width={20} height={20} className="h-5 w-5" />
            <span>SVIS Official on Facebook</span>
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-cream/70">
        &copy;{new Date().getFullYear()} Spring of Virtue Integrated School, Inc. All rights
        reserved
      </div>
    </footer>
  );
}
