"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SiteNav from "@/components/layout/site-nav";
import SiteFooter from "@/components/layout/site-footer";
import Messenger from "@/components/fb-messenger/messenger";

const Hero = dynamic(() => import("@/components/hero/hero"));

type LegacySiteLayoutProps = {
  children: React.ReactNode;
};

export default function LegacySiteLayout({ children }: LegacySiteLayoutProps) {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, [children]);

  return (
    <AnimatePresence mode="wait">
      {isReady && (
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <SiteNav />
          <Hero />
          <main>{children}</main>
          <Messenger />
          <SiteFooter />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
