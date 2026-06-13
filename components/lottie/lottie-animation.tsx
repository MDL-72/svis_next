"use client";

import { useEffect, useRef } from "react";

type LottieAnimationProps = {
  animationJson: string;
  className?: string;
};

export default function LottieAnimation({
  animationJson,
  className,
}: LottieAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    let animation: { destroy: () => void } | undefined;
    let cancelled = false;

    import("lottie-web").then((Lottie) => {
      if (cancelled || !ref.current) return;

      container.innerHTML = "";
      animation = Lottie.default.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: `/${animationJson}.json`,
      });
    });

    return () => {
      cancelled = true;
      animation?.destroy();
      container.innerHTML = "";
    };
  }, [animationJson]);

  return <div ref={ref} className={className} />;
}
