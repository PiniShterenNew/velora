import fs from "fs";
import path from "path";

const stylesDir = path.resolve("c:/Users/User/Desktop/pini-doc/velora/app/styles");
const componentsDir = path.join(stylesDir, "components");
fs.mkdirSync(componentsDir, { recursive: true });

let css = fs.readFileSync(path.join(stylesDir, "components.css"), "utf8");

const marker = "/* Social proof and testimonials */";
const second = css.lastIndexOf(marker);
const first = css.indexOf(marker);
if (first !== -1 && second !== first) {
  css = css.slice(0, second).trimEnd() + "\n";
}

const aboutRedesign = "/* Redesigned closing sections: aligned with the system-card language used above. */";
const aboutIntegrated = "/* About section: integrated with the Hero, Services and Process visual rhythm. */";
const redesignStart = css.indexOf(aboutRedesign);
const integratedStart = css.indexOf(aboutIntegrated);
if (redesignStart !== -1 && integratedStart !== -1 && redesignStart < integratedStart) {
  css = css.slice(0, redesignStart).trimEnd() + "\n\n" + css.slice(integratedStart);
}

const files = {
  "buttons.css": [],
  "decision-board.css": [],
  "sections-shared.css": [],
  "services.css": [],
  "story.css": [],
  "process.css": [],
  "work.css": [],
  "about.css": [],
  "faq.css": [],
  "final-cta.css": [],
  "footer.css": [],
  "social-proof.css": [],
  "testimonials.css": [],
};

function bucketForSelector(selector) {
  const s = selector.toLowerCase();
  if (/^\.btn(?:-|$)/.test(s) || s.includes(".btn-")) return "buttons.css";
  if (/decision|board-|strategy-|step-number|stage-|step-number/.test(s)) return "decision-board.css";
  if (/social-proof/.test(s)) return "social-proof.css";
  if (/testimonial/.test(s)) return "testimonials.css";
  if (/faq-/.test(s)) return "faq.css";
  if (/final-cta|cta-logo-mark/.test(s)) return "final-cta.css";
  if (/footer-|site-footer/.test(s)) return "footer.css";
  if (/about-|founder-|strengths|strength-/.test(s)) return "about.css";
  if (/services-|service-card|service-illustration/.test(s)) return "services.css";
  if (/story-/.test(s)) return "story.css";
  if (/process-/.test(s)) return "process.css";
  if (/work-/.test(s)) return "work.css";
  return "sections-shared.css";
}

function bucketForAtRule(block) {
  const probe = block.slice(0, 240).toLowerCase();
  if (/\.social-proof/.test(probe)) return "social-proof.css";
  if (/\.testimonial/.test(probe)) return "testimonials.css";
  if (/\.faq-/.test(probe)) return "faq.css";
  if (/\.final-cta/.test(probe)) return "final-cta.css";
  if (/\.footer-|\.site-footer/.test(probe)) return "footer.css";
  if (/\.about-|\.founder-|\.strengths/.test(probe)) return "about.css";
  if (/\.services-|\.service-card/.test(probe)) return "services.css";
  if (/\.story-/.test(probe)) return "story.css";
  if (/\.process-/.test(probe)) return "process.css";
  if (/\.work-/.test(probe)) return "work.css";
  if (/decision|strategy-|board-/.test(probe)) return "decision-board.css";
  return "sections-shared.css";
}

let i = 0;
let pending = "";
while (i < css.length) {
  while (css[i] === "\n" || css[i] === "\r" || css[i] === " ") i++;
  if (i >= css.length) break;

  if (css.startsWith("/*", i)) {
    const end = css.indexOf("*/", i) + 2;
    pending += css.slice(i, end) + "\n";
    i = end;
    continue;
  }

  if (css[i] === "@") {
    const start = i;
    let depth = 0;
    while (i < css.length) {
      if (css[i] === "{") depth++;
      if (css[i] === "}") {
        depth--;
        if (depth === 0) {
          i++;
          break;
        }
      }
      i++;
    }
    const block = css.slice(start, i);
    const file = bucketForAtRule(block);
    files[file].push(pending + block + "\n\n");
    pending = "";
    continue;
  }

  if (css[i] === ".") {
    const start = i;
    let depth = 0;
    while (i < css.length) {
      if (css[i] === "{") depth++;
      if (css[i] === "}") {
        depth--;
        if (depth === 0) {
          i++;
          break;
        }
      }
      i++;
    }
    const block = css.slice(start, i);
    const selector = block.slice(0, block.indexOf("{")).trim();
    const file = bucketForSelector(selector);
    files[file].push(pending + block + "\n\n");
    pending = "";
    continue;
  }

  i++;
}

const order = [
  "buttons.css",
  "sections-shared.css",
  "decision-board.css",
  "services.css",
  "story.css",
  "work.css",
  "process.css",
  "about.css",
  "social-proof.css",
  "testimonials.css",
  "faq.css",
  "final-cta.css",
  "footer.css",
];

for (const file of order) {
  const body = files[file].join("").trim();
  if (!body) continue;
  fs.writeFileSync(path.join(componentsDir, file), `/* ${file.replace(".css", "")} */\n\n${body}\n`);
}

const imports = order
  .filter((file) => files[file].length)
  .map((file) => `@import "./components/${file}";`)
  .join("\n");

fs.writeFileSync(path.join(stylesDir, "components.css"), `${imports}\n`);
console.log("Split complete. Import hub written to components.css");
