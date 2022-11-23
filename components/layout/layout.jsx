import Navigation from "../navbar/navigation";
import Footer from "../footer/footer";
import Hero from "../hero/hero";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Messenger from "../fbMessenger/messenger";
export default function Layout(props) {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, [props.children]);

  return (
    <AnimatePresence mode="wait">
      {isReady && (
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1,
            },
            exitState: {},
          }}
        >
          <Navigation />
          <Hero />
          <main>{props.children}</main>
          <Messenger />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
