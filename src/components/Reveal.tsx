"use client";

import {
  HTMLMotionProps,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { PropsWithChildren, useEffect, useRef } from "react";

export default function Reveal({
  children,
  ...restProps
}: PropsWithChildren<HTMLMotionProps<"div">>) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const animateControl = useAnimation();

  useEffect(() => {
    if (inView) animateControl.start("visible");
  }, [inView, animateControl]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      {...restProps}
      initial="hidden"
      animate={animateControl}
      transition={{
        duration: 0.2,
        delay: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}
