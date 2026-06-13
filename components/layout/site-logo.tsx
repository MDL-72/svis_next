import Image from "next/image";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
  alt?: string;
};

export default function SiteLogo({
  className,
  priority = false,
  alt = "Spring of Virtue Integrated School logo",
}: SiteLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-white p-0",
        className
      )}
    >
      <Image
        src="/logo.png"
        alt={alt}
        width={72}
        height={90}
        priority={priority}
        className="h-full w-auto object-contain"
      />
    </span>
  );
}
