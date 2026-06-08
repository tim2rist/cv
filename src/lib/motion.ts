import type { Transition, Variants } from "framer-motion";

/** Premium ease-out — snappy start, soft landing */
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

/** Smooth spring for UI reveals */
export const springSmooth = {
  type: "spring" as const,
  stiffness: 100,
  damping: 22,
  mass: 0.9,
};

export const springSnappy = {
  type: "spring" as const,
  stiffness: 260,
  damping: 26,
  mass: 0.7,
};

/** Opacity-only — safe to use alongside CSS transform hovers */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: easeOutExpo },
  },
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: springSmooth,
  },
};

export const fadeUpReduced: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

export const staggerContainer = (
  stagger = 0.1,
  delayChildren = 0.12,
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const heroBadgeFloat = (index: number): Transition => ({
  duration: 7 + index * 1.2,
  repeat: Infinity,
  repeatType: "mirror",
  ease: [0.42, 0, 0.58, 1],
});

export const heroBadgeKeyframes = (index: number) => ({
  y: [0, -10 - index * 2, -6, -12 - index, 0],
  x: [0, index % 2 === 0 ? 6 : -5, index % 2 === 0 ? -3 : 4, 0],
  rotate: [0, index % 2 === 0 ? 1.5 : -1.5, 0],
});
