"use client";

import dynamic from "next/dynamic";
import ContactForm from "@/components/contact/contact-form";

const LottieAnimation = dynamic(
  () => import("@/components/lottie/lottie-animation"),
  { ssr: false }
);

export default function ContactSection() {
  return (
    <section className="bg-background px-4 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:items-start md:justify-center">
        <div className="flex w-full items-center justify-center md:w-1/2">
          <LottieAnimation
            animationJson="lottie-contact"
            className="w-full max-w-md"
          />
        </div>
        <div className="flex w-full justify-center md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
