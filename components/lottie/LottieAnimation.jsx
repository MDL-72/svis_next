import { useEffect, useRef, useState } from "react";
import { LottiePlayer } from "lottie-web";

export default function LottieAnimation(props) {
  const { animationJson } = props;
  const ref = useRef();
  const [lottie, setLottie] = useState(LottiePlayer);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        // path to your animation file, place it inside public folder
        path: `/${animationJson}.json`,
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return <div ref={ref} />;
}
