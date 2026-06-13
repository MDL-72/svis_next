import { cn } from "@/lib/utils";

type HeroContentFrameProps = {
  children: React.ReactNode;
  className?: string;
};

export default function HeroContentFrame({ children, className }: HeroContentFrameProps) {
  return (
    <div className={cn("hero-arch-outer relative mx-auto max-w-4xl p-1.5 lg:max-w-5xl", className)}>
      <div className="hero-arch-inner relative px-6 py-8 sm:px-12 sm:py-10 lg:px-16">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        {children}
      </div>
    </div>
  );
}
