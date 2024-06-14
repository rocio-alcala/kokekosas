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
    console.log(inView);
    if (inView) animateControl.start("visible");
  }, [inView, animateControl]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      {...restProps}
      initial="hidden"
      animate={animateControl}
      transition={{
        type: "spring",
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
}
