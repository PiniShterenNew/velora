"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { getCopy, type Locale, type SiteCopy } from "@/lib/data";
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

type Stage = SiteCopy["decisionBoard"]["stages"][number];

function StageDescription({ stage }: { stage: Stage }) {
  const { description, emphasis, emphasisTone } = stage;
  if (!emphasis || !description.includes(emphasis)) return <p>{description}</p>;

  const [before, after] = description.split(emphasis);
  return (
    <p>
      {before}
      <span className={`stage-emphasis stage-emphasis-${emphasisTone}`}>{emphasis}</span>
      {after}
    </p>
  );
}

export function DecisionBoard({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
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
      viewport={{ once: true, amount: 0.1 }}
    >
      <AmbientBackground variant="decision" />

      <div className="decision-bridge-inner container">
        <header className="strategy-heading">
          <motion.p className="board-kicker" variants={reveal} custom={0}>{copy.decisionBoard.kicker}</motion.p>
          <motion.h2 id="decision-board-title" variants={reveal} custom={0.12}>{copy.decisionBoard.title}</motion.h2>
          <motion.p className="board-summary" variants={reveal} custom={0.2}>{copy.decisionBoard.summary}</motion.p>
          <motion.div className="board-label" variants={reveal} custom={0.28}>{copy.decisionBoard.label}</motion.div>
        </header>

        <div className="rail-viewport">
        <ul className="decision-steps">
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
              <StageDescription stage={stage} />
              <span className="stage-connector" aria-hidden="true" />
              <span className={`stage-shape stage-shape-${stage.shape}`} aria-hidden="true" />
            </motion.li>
          ))}
        </ul>
        </div>

      </div>
    </motion.section>
  );
}
