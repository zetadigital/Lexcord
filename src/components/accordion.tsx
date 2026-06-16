"use client";

import { useState } from "react";
import type { Faq } from "@/data/types";
import styles from "./accordion.module.css";

interface AccordionProps {
  items: Faq[];
  /** Index open by default; null for all closed. */
  defaultOpen?: number | null;
}

export function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={styles.acc}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
            <button
              type="button"
              className={styles.head}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className={styles.q}>{item.q}</span>
              <span className={styles.icon} aria-hidden="true">
                <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
                  <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div className={styles.panel}>
              <p className={styles.a}>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
