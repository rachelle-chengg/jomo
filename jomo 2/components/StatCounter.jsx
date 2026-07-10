"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

// Counts up from 0 to `value` once the stat scrolls into view.
export default function StatCounter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame;
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="font-display text-6xl font-semibold leading-none text-clay sm:text-7xl"
      >
        {display}
        {suffix}
      </motion.p>
      <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-ink/70">
        {label}
      </p>
    </div>
  );
}
