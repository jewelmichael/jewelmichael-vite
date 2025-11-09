// components/MountOnView.tsx
import { useEffect, useRef, useState, PropsWithChildren } from "react";
import { motion } from "framer-motion";

type Props = PropsWithChildren<{
  /** Animate only the first time it appears */
  once?: boolean;
  /** Portion visible to trigger (0..1) */
  amount?: number;
  /** Pre-trigger distance (e.g., '-10%' starts a bit earlier) */
  rootMargin?: string;
  /** If true, defer MOUNT until visible (use for heavy sections) */
  mountWhenVisible?: boolean;
  /** Fallback while waiting to mount (only used if mountWhenVisible=true) */
  placeholder?: React.ReactNode;

  /** Animation controls */
  offsetX?: number;      // slide from left (-ve)
  duration?: number;
  delay?: number;
  className?: string;
}>;

export default function MountOnView({
  children,
  once = true,
  amount = 0.2,
  rootMargin = "0px 0px -10% 0px",
  mountWhenVisible = false,
  placeholder = null,
  offsetX = -24,
  duration = 0.6,
  delay = 0,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(!mountWhenVisible); // if not deferring mount, render immediately

  useEffect(() => {
    if (!mountWhenVisible || visible || !ref.current) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.disconnect();
        }
      },
      { root: null, rootMargin, threshold: amount }
    );

    io.observe(ref.current);
    return () => io.disconnect();
  }, [mountWhenVisible, visible, once, rootMargin, amount]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: offsetX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: "easeOut" }}
      // Force start at 0 even if some CSS sets opacity:1
      style={{ opacity: 0 }}
    >
      {visible ? children : placeholder}
    </motion.div>
  );
}
