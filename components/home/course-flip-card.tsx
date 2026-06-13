"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Course } from "@/lib/content/home";

type CourseFlipCardProps = {
  course: Course;
};

export default function CourseFlipCard({ course }: CourseFlipCardProps) {
  return (
    <div className="group h-[360px] w-full max-w-[300px] [perspective:1200px]">
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 overflow-hidden rounded-xl border-2 border-gold/40 bg-card shadow-xl [backface-visibility:hidden]">
          <div className="relative h-[200px] w-full">
            <Image
              src={`/courses/${course.image}.jpg`}
              alt={`SVIS ${course.image} program`}
              fill
              className="object-cover object-center"
              sizes="300px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
          </div>
          <div className="px-4 py-5 text-center">
            <p className="font-heading text-lg font-bold leading-snug text-foreground">
              {course.title}
              {course.title2 && (
                <>
                  <br />
                  {course.title2}
                </>
              )}
              <br />
              <span className="text-gold">{course.title3}</span>
            </p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex flex-col justify-between rounded-xl border-2 border-gold/50 bg-navy p-5 text-cream shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="space-y-3 overflow-y-auto text-center text-sm leading-relaxed">
            <p>{course.desc}</p>
            {course.desc2 && <p className="text-cream/85">{course.desc2}</p>}
          </div>
          <Button
            asChild
            className="mt-4 w-full bg-gold font-heading font-semibold text-navy hover:bg-gold-light"
          >
            <Link href="/contact-us">Inquire Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
