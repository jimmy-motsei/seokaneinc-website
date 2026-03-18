"use client";

/**
 * Seokane Inc. — Animation Primitives
 * Built on motion/react (Motion v12)
 */

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode, type CSSProperties, type ElementType } from "react";

/* ─── Shared easing ─────────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;
const DURATION = 0.55;

/* ─── FadeUp ────────────────────────────────────────────────── */
interface FadeUpProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  distance?: number;
  threshold?: number;
  once?: boolean;
  as?: ElementType;
}

export function FadeUp({
  children,
  className,
  style,
  delay = 0,
  distance = 28,
  threshold = 0.15,
  once = true,
  as = "div",
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount: threshold });
  const MotionEl = motion[as as "div"] as typeof motion.div;
  return (
    <MotionEl
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: distance }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{ duration: DURATION, delay, ease: EASE }}
    >
      {children}
    </MotionEl>
  );
}

/* ─── FadeIn ────────────────────────────────────────────────── */
interface FadeInProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export function FadeIn({
  children,
  className,
  style,
  delay = 0,
  duration = DURATION,
  threshold = 0.1,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount: threshold });
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger ───────────────────────────────────────────────── */
interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
}

const staggerContainer = (staggerDelay: number, delay: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: delay,
    },
  },
});

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: EASE },
  },
};

export function Stagger({
  children,
  className,
  staggerDelay = 0.08,
  delay = 0,
  threshold = 0.1,
  once = true,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount: threshold });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainer(staggerDelay, delay)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

/* ─── StaggerItem ───────────────────────────────────────────── */
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}

export function StaggerItem({ children, className, style, as = "div" }: StaggerItemProps) {
  const MotionEl = motion[as as "div"] as typeof motion.div;
  return (
    <MotionEl className={className} style={style} variants={staggerItem}>
      {children}
    </MotionEl>
  );
}

/* ─── SlideIn ───────────────────────────────────────────────── */
interface SlideInProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  from?: "left" | "right";
  delay?: number;
  distance?: number;
}

export function SlideIn({
  children,
  className,
  style,
  from = "left",
  delay = 0,
  distance = 40,
}: SlideInProps) {
  const x = from === "left" ? -distance : distance;
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, x }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ─── ScaleTap ──────────────────────────────────────────────── */
interface ScaleTapProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export function ScaleTap({ children, className, scale = 0.97 }: ScaleTapProps) {
  return (
    <motion.div
      className={className}
      whileTap={{ scale }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.div>
  );
}
