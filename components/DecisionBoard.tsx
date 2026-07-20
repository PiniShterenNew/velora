"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";
import { AmbientBackground } from "./AmbientBackground";

const reveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

const stageReveal: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, delay, ease: "easeOut" },
  }),
};

export function DecisionBoard() {
  const { copy } = useI18n();
  const stages = copy.decisionBoard.stages;
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : "hidden";

  return (
    <motion.section
      className="decision-bridge"
      id="decision-board"
      aria-labelledby="decision-board-title"
      initial={initial}
      whileInView="visible"
      viewport={{ once: true, amount: 0.38 }}
    >
      <AmbientBackground variant="decision" />

      <div className="decision-bridge-inner container">
        <header className="strategy-heading">
          <motion.p className="board-kicker" variants={reveal} custom={0}>{copy.decisionBoard.kicker}</motion.p>
          <motion.h2 id="decision-board-title" variants={reveal} custom={0.12}>{copy.decisionBoard.title}</motion.h2>
          <motion.p className="board-summary" variants={reveal} custom={0.2}>{copy.decisionBoard.summary}</motion.p>
          <motion.div className="board-label" variants={reveal} custom={0.28}>{copy.decisionBoard.label}</motion.div>
        </header>

        <ol className="decision-steps">
          {stages.map((stage, index) => (
            <motion.li
              className={`strategy-stage strategy-stage-${stage.tone}`}
              key={stage.number}
              variants={stageReveal}
              custom={0.42 + index * 0.15}
            >
              <span className="step-number" aria-hidden="true">{stage.number}</span>
              <span className="stage-accent" aria-hidden="true" />
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
              <span className="stage-connector" aria-hidden="true" />
              <span className={`stage-shape stage-shape-${stage.shape}`} aria-hidden="true" />
            </motion.li>
          ))}
        </ol>
      </div>
    </motion.section>
  );
}
