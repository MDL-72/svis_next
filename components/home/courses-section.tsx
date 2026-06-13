import CourseFlipCard from "@/components/home/course-flip-card";
import ScrollReveal from "@/components/home/scroll-reveal";
import { courses } from "@/lib/content/home";

export default function CoursesSection() {
  return (
    <section className="bg-background px-4 py-14 md:px-8 md:py-20">
      <ScrollReveal className="mx-auto max-w-6xl text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          Academic Programs
        </p>
        <p className="mx-auto mt-3 max-w-2xl font-body text-muted-foreground">
          From early childhood through high school, SVIS offers a nurturing path for every
          stage of your child&apos;s educational journey.
        </p>
      </ScrollReveal>

      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap justify-center gap-8 md:gap-10">
        {courses.map((course, index) => (
          <ScrollReveal
            key={course.id}
            delay={index * 0.1}
            className="w-[300px] shrink-0"
          >
            <CourseFlipCard course={course} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
