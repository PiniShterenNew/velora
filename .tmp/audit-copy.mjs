import fs from "fs";
import path from "path";

const root = path.resolve("c:/Users/User/Desktop/pini-doc/velora");
const copy = JSON.parse(fs.readFileSync(path.join(root, "lib/site-copy.json"), "utf8"));

function flatten(obj, prefix = "") {
  const keys = [];
  for (const [k, v] of Object.entries(obj)) {
    if (k.startsWith("_")) continue;
    const p = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) keys.push(...flatten(v, p));
    else keys.push(p);
  }
  return keys;
}

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".next", ".tmp", ".git"].includes(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (/\.(tsx?|jsx?|json)$/.test(ent.name) && !p.endsWith("site-copy.json")) files.push(p);
  }
  return files;
}

const keys = flatten(copy);
const src = walk(root).map((f) => fs.readFileSync(f, "utf8")).join("\n");
const unused = keys.filter((k) => !src.includes(`copy.${k}`));
const used = keys.filter((k) => src.includes(`copy.${k}`));

const copyRefs = [...src.matchAll(/copy\.([a-zA-Z0-9_]+(?:\.[a-zA-Z0-9_]+)*)/g)].map((m) => m[1]);
const uniqueRefs = [...new Set(copyRefs)];

function hasPath(obj, parts) {
  let cur = obj;
  for (const part of parts) {
    if (cur == null || typeof cur !== "object" || Array.isArray(cur) || !(part in cur)) return false;
    cur = cur[part];
  }
  return true;
}

const invalidRefs = uniqueRefs.filter((ref) => !hasPath(copy, ref.split(".")));

console.log("JSON keys:", keys.length);
console.log("Used:", used.length);
console.log("Unused:", unused.length);
console.log("\n--- Unused keys ---");
unused.forEach((k) => console.log(k));
console.log("\n--- Invalid copy.* refs in code ---");
invalidRefs.forEach((k) => console.log(k));
