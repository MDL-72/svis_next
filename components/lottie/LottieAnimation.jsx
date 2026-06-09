import { useEffect, useRef } from "react";

export default function LottieAnimation({ animationJson }) {
  const ref = useRef(null);

  useEffect(() => {
    let animation;

    import("lottie-web").then((Lottie) => {
      if (!ref.current) return;

      animation = Lottie.default.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: `/${animationJson}.json`,
      });
    });

    return () => animation?.destroy();
  }, [animationJson]);

  return <div ref={ref} />;
}
