"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Row({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-ink/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg font-medium text-ink sm:text-xl">
          {item.q ?? item.title}
        </span>
        <span
          className={`grid h-8 w-8 flex-none place-items-center rounded-full border border-ink/20 transition-transform duration-300 ${
            isOpen ? "rotate-45 bg-clay text-cream" : "text-ink"
          }`}
          aria-hidden
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 pr-10 text-[15px] leading-relaxed text-ink/75">
              <p>{item.a ?? item.body}</p>
              {item.lists?.length > 0 &&
                item.lists.map((list) => (
                  <div key={list.label} className="mt-4">
                    <p className="font-semibold text-ink">{list.label}:</p>
                    <ul className="mt-2 space-y-1.5">
                      {list.items.map((li) => (
                        <li key={li} className="flex gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sage" />
                          <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Accordion({ items, singleOpen = true }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [openSet, setOpenSet] = useState(new Set([0]));

  const toggle = (i) => {
    if (singleOpen) {
      setOpenIndex(openIndex === i ? -1 : i);
    } else {
      const next = new Set(openSet);
      next.has(i) ? next.delete(i) : next.add(i);
      setOpenSet(next);
    }
  };

  return (
    <div>
      {items.map((item, i) => (
        <Row
          key={i}
          item={item}
          isOpen={singleOpen ? openIndex === i : openSet.has(i)}
          onToggle={() => toggle(i)}
        />
      ))}
    </div>
  );
}
