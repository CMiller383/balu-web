"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type FadeInDirection = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: ReactNode;
  direction?: FadeInDirection;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const directionMap: Record<FadeInDirection, { x?: number; y?: number }> = {
  up:    { y: 24 },
  down:  { y: -24 },
  left:  { x: 24 },
  right: { x: -24 },
  none:  {},
};

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, ...directionMap[direction] };

  const animate = { opacity: 1, x: 0, y: 0 };

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={initial}
        whileInView={animate}
        viewport={{ once, margin: "-80px" }}
        transition={{
          duration: shouldReduceMotion ? 0.01 : duration,
          delay: shouldReduceMotion ? 0 : delay,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
