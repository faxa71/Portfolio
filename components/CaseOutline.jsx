"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Right-edge page outline for case studies, in the spirit of Notion's
 * table-of-contents rail: a stack of thin dashes — one per <CaseSection>
 * heading — that tracks scroll position, and expands into a card with the
 * real heading labels on hover. Purely a navigation aid: it discovers its
 * items from the DOM ([data-outline-heading] elements), so any case page
 * that renders <CaseSection> sections picks it up automatically.
 */
export default function CaseOutline() {
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-outline-heading]"));
    if (nodes.length < 2) return;

    setItems(
      nodes.map((el) => ({ id: el.id, title: el.dataset.outlineTitle || el.id }))
    );
    setActiveId(nodes[0].id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    nodes.forEach((el) => observer.observe(el));
    observerRef.current = observer;

    return () => observer.disconnect();
  }, []);

  if (!mounted || items.length < 2) return null;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return createPortal(
    <div
      className="fixed right-6 xl:right-10 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence mode="wait" initial={false}>
        {hovered ? (
          <motion.div
            key="card"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-1 rounded-2xl border border-line bg-panel/90 backdrop-blur px-4 py-3 min-w-[180px] max-w-[240px]"
          >
            {items.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left text-[13px] leading-snug py-1 transition-colors ${
                    isActive ? "text-white" : "text-muted hover:text-soft"
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key="rail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-end gap-2"
          >
            {items.map((item) => {
              const isActive = item.id === activeId;
              return (
                <span
                  key={item.id}
                  className={`h-px rounded-full transition-all duration-300 ${
                    isActive ? "w-5 bg-white" : "w-3 bg-white/25"
                  }`}
                />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>,
    document.body
  );
}
