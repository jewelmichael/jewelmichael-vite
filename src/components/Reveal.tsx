// components/Reveal.tsx
import { motion, Variants } from "framer-motion";
import { PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  delay?: number;
  duration?: number;
  offsetX?: number; // negative = from left
  once?: boolean;
  amount?: number;  // how much of the element must be visible (0..1)
  className?: string;
}>;

const variants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export default function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  offsetX = -10,
  once = true,
  amount = 0.2,
  className,
}: RevealProps) {
  return (
    <motion.div
      className={className} //{`display-content${className === undefined ? '' : ` ${className}`}`}
      // ensure fade is applied
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: { opacity: 0, x: offsetX },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration, delay, ease: "easeOut" }}
      // safety: in case any class sets opacity to 1, this forces initial 0
      style={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
