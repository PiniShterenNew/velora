"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { AmbientBackground } from "./AmbientBackground";

function FAQItem({
  index,
  question,
  answer,
  isOpen,
  onSelect,
}: {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onSelect: () => void;
}) {
  const triggerId = `faq-trigger-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className="faq-item" data-expanded={isOpen}>
      <h3>
        <button
          aria-controls={panelId}
          aria-expanded={isOpen}
          id={triggerId}
          onClick={onSelect}
          type="button"
        >
          <span>{question}</span>
          {isOpen ? <Minus className="faq-icon" aria-hidden="true" /> : <Plus className="faq-icon" aria-hidden="true" />}
        </button>
      </h3>
      <div
        aria-hidden={!isOpen}
        aria-labelledby={triggerId}
        className="faq-answer"
        id={panelId}
        role="region"
      >
        <div className="faq-answer-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const { copy } = useI18n();
  const items = copy.faq.items;
  const [openIndex, setOpenIndex] = useState(0);
  const selectItem = (index: number) => {
    setOpenIndex((currentIndex) => {
      if (currentIndex !== index) {
        return index;
      }

      if (items.length <= 1) {
        return index;
      }

      return index === 0 ? 1 : 0;
    });
  };

  return (
    <section id="faq" className="page-section faq-section">
      <AmbientBackground variant="faq" />
      <div className="container faq-wrap">
        <div className="section-intro">
          <p className="section-label">{copy.faq.label}</p>
          <h2>{copy.faq.title}</h2>
          <p className="section-copy">{copy.faq.text}</p>
        </div>
        <div className="faq-list">
          {items.map(({ question, answer }, index) => (
            <FAQItem
              answer={answer}
              index={index}
              isOpen={openIndex === index}
              key={question}
              onSelect={() => selectItem(index)}
              question={question}
            />
          ))}
        </div>
      </div>
    </section>
  );
}