"use client";

import { MessageCircle, Plus } from "lucide-react";
import { useState } from "react";
import { copy } from "@/lib/data";
import { AmbientBackground } from "./AmbientBackground";

const whatsappUrl = copy.brand.whatsappUrl;
const items = copy.faq.items;

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <details className="faq-item" open={isOpen}>
      <summary onClick={(event) => {
        event.preventDefault();
        onToggle();
      }}>
        <span>{question}</span>
        <Plus className="faq-icon" aria-hidden="true" />
      </summary>
      <div className="faq-answer">
        <div className="faq-answer-inner">
          <p>{answer}</p>
        </div>
      </div>
    </details>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
              isOpen={openIndex === index}
              key={question}
              onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
              question={question}
            />
          ))}
        </div>
        <div className="faq-contact">
          <p>{copy.faq.contactText}</p>
          <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">{copy.faq.contactLabel} <MessageCircle aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
