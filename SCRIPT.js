/* =====================================================
   MMH Mini Mart — script.js (PRELOADED)
   - Full-list ticker (uses ALL flavors below)
   - Searchable Flavor Vault
   - Performance-safe for big inventories
   - Google-safe: informational display only
   ===================================================== */

/* ========= MASTER LIST (PRELOADED FROM VERIFIED MENUS) =========
   NOTE:
   - This is a baseline master list you can expand with your in-store list.
   - RAZ has multiple device lines + frequent changes; you should paste your
     store-verified RAZ list into RAW_MASTER_LIST at the bottom to be accurate.
====================================================== */

const FLAVORS = [
  /* ---------- Geekbar Pulse (official page list) ---------- */
  { brand: "Geekbar Pulse", name: "Watermelon Ice" },
  { brand: "Geekbar Pulse", name: "Strawberry B-POP" },
  { brand: "Geekbar Pulse", name: "Miami Mint" },
  { brand: "Geekbar Pulse", name: "Blue Razz Ice" },
  { brand: "Geekbar Pulse", name: "Fcuking FAB" },

  /* ---------- Geekbar Pulse X (official page list) ---------- */
  { brand: "Geekbar Pulse X", name: "Blackberry Blueberry" },
  { brand: "Geekbar Pulse X", name: "Blackberry B-Pop" },
  { brand: "Geekbar Pulse X", name: "Blue Rancher" },
  { brand: "Geekbar Pulse X", name: "Cool Mint" },
  { brand: "Geekbar Pulse X", name: "Grapefruit Refresher" },
  { brand: "Geekbar Pulse X", name: "Miami Mint" },
  { brand: "Geekbar Pulse X", name: "Raspberry Peach Lime" },
  { brand: "Geekbar Pulse X", name: "Sour Mango Pineapple" },
  { brand: "Geekbar Pulse X", name: "Sour Fcuking Fab" },
  { brand: "Geekbar Pulse X", name: "Banana Taffy Freeze" },
  { brand: "Geekbar Pulse X", name: "Blue Razz Ice" },
  { brand: "Geekbar Pulse X", name: "Lemon Heads" },
  { brand: "Geekbar Pulse X", name: "Lime Berry Orange" },
  { brand: "Geekbar Pulse X", name: "Orange Fcuking Fab" },
  { brand: "Geekbar Pulse X", name: "Sour Apple Ice" },
  { brand: "Geekbar Pulse X", name: "Sour Straws" },

  /* ---------- DIGIflavor BRK (complete menu table) ---------- */
  { brand: "DIGIflavor BRK", name: "Miami Mint" },
  { brand: "DIGIflavor BRK", name: "Watermelon Ice" },
  { brand: "DIGIflavor BRK", name: "Blue Razz Ice" },
  { brand: "DIGIflavor BRK", name: "Sour Apple Ice" },
  { brand: "DIGIflavor BRK", name: "Triple Berry Fab" },
  { brand: "DIGIflavor BRK", name: "Blac Blue" },
  { brand: "DIGIflavor BRK", name: "Strawberry Fab" },
  { brand: "DIGIflavor BRK", name: "Strawberry B-Burst" },
  { brand: "DIGIflavor BRK", name: "Cherry Strazz" },
  { brand: "DIGIflavor BRK", name: "Pink Peach Lemonade" },
  { brand: "DIGIflavor BRK", name: "Orange Mango" },
  { brand: "DIGIflavor BRK", name: "Amazon Lemonade" },
  { brand: "DIGIflavor BRK", name: "Day Walker" },

  /* ---------- DIGIflavor Lush (complete menu table) ---------- */
  { brand: "DIGIflavor Lush", name: "Banana Coconut" },
  { brand: "DIGIflavor Lush", name: "Berry Bomb" },
  { brand: "DIGIflavor Lush", name: "Blue Razz Ice" },
  { brand: "DIGIflavor Lush", name: "Blueberry Fab" },
  { brand: "DIGIflavor Lush", name: "Cool Mint" },
  { brand: "DIGIflavor Lush", name: "Green Desert" },
  { brand: "DIGIflavor Lush", name: "Manlon Twist" },
  { brand: "DIGIflavor Lush", name: "Miami Mint" },
  { brand: "DIGIflavor Lush", name: "Raspberry Zing" },
  { brand: "DIGIflavor Lush", name: "Sour Apple Jolly Rancher" },
  { brand: "DIGIflavor Lush", name: "Strawberry Fab" },
  { brand: "DIGIflavor Lush", name: "Strawberry Ice" },
  { brand: "DIGIflavor Lush", name: "Triple Berry Ice" },
  { brand: "DIGIflavor Lush", name: "Watermelon Ice" },
  { brand: "DIGIflavor Lush", name: "White Fusion" },

  /* ---------- DIGIflavor Sky 25K (complete menu table) ---------- */
  { brand: "DIGIflavor Sky 25K", name: "Blackberry Fcuking Fab" },
  { brand: "DIGIflavor Sky 25K", name: "Cherry Lemon Mint" },
  { brand: "DIGIflavor Sky 25K", name: "Cherry Strazz" },
  { brand: "DIGIflavor Sky 25K", name: "Blue Razz Ice" },
  { brand: "DIGIflavor Sky 25K", name: "Miami Mint" },
  { brand: "DIGIflavor Sky 25K", name: "Peach Blue Slushy" },
  { brand: "DIGIflavor Sky 25K", name: "Peach Raspberry" },
  { brand: "DIGIflavor Sky 25K", name: "Skywalker" },
  { brand: "DIGIflavor Sky 25K", name: "Sour Apple Ice" },
  { brand: "DIGIflavor Sky 25K", name: "Sour Watermelon Blue Razz" },
  { brand: "DIGIflavor Sky 25K", name: "Strawberry Banana" },
  { brand: "DIGIflavor Sky 25K", name: "Strawberry Ice" },
  { brand: "DIGIflavor Sky 25K", name: "Strawberry Watermelon Coconut" },
  { brand: "DIGIflavor Sky 25K", name: "Triple Berry" },
  { brand: "DIGIflavor Sky 25K", name: "Twisted B-Pop" },

  /* ---------- Foger Bit 35K (enumerated list) ---------- */
  { brand: "Foger Bit 35K", name: "Banana Taffy Freeze" },
  { brand: "Foger Bit 35K", name: "Blue Razz Ice" },
  { brand: "Foger Bit 35K", name: "Cool Mint" },
  { brand: "Foger Bit 35K", name: "Fcuking Fab" },
  { brand: "Foger Bit 35K", name: "Georgia Peach" },
  { brand: "Foger Bit 35K", name: "Miami Mint" },
  { brand: "Foger Bit 35K", name: "Orange Cranberry Lime Ice" },
  { brand: "Foger Bit 35K", name: "Passion Kiwi" },
  { brand: "Foger Bit 35K", name: "Sour Apple Watermelon" },
  { brand: "Foger Bit 35K", name: "Sour Mango Pineapple" },
  { brand: "Foger Bit 35K", name: "Strawberry Burst" },
  { brand: "Foger Bit 35K", name: "Summer Mist" },
  { brand: "Foger Bit 35K", name: "Watermelon Ice" },
  { brand: "Foger Bit 35K", name: "White Peach Raspberry" },
  { brand: "Foger Bit 35K", name: "Wintergreen" },

  /* ---------- RIA NV30K (enumerated list) ---------- */
  { brand: "RIA NV30K", name: "Blue Razz Ice" },
  { brand: "RIA NV30K", name: "Blueberry Punch" },
  { brand: "RIA NV30K", name: "Crazy Berry" },
  { brand: "RIA NV30K", name: "Dualicious" },
  { brand: "RIA NV30K", name: "Fcuking Fab" },
  { brand: "RIA NV30K", name: "Miami Mint" },
  { brand: "RIA NV30K", name: "Peach Gummy" },
  { brand: "RIA NV30K", name: "Sour Strawberry Dragon" },
  { brand: "RIA NV30K", name: "Watermelon Ice" },
  { brand: "RIA NV30K", name: "Watermelon B Pop" },
  { brand: "RIA NV30K", name: "Pink Raz Lemonade" },
  { brand: "RIA NV30K", name: "Pineapple Lime" },

  /* ---------- RAZ (STORE-VERIFIED LIST RECOMMENDED) ----------
     Paste your MMH in-store RAZ lineup via RAW_MASTER_LIST below to be accurate.
  */
];

/* ========= OPTIONAL: PASTE YOUR STORE MASTER LIST (ANY FORMAT) =========
   If you paste your full list here later, it will be parsed and merged.
   This is the correct way to keep it accurate vs. chasing “all available” online.
*/
const RAW_MASTER_LIST = ``.trim();

/* ========= DOM REFERENCES ========= */
const tickerTrack = document.getElementById("flavorTickerTrack");
const grid = document.getElementById("flavorGrid");
const searchInput = document.getElementById("search");
const yearEl = document.getElementById("year");

/* ========= HELPERS ========= */
function escapeHTML(str) {
  return String(str ?? "").replace(/[&<>"']/g, s => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[s]));
}

function cleanLine(line) {
  return String(line ?? "")
    .replace(/^[\-\*\u2022\s]+/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeBrand(b) {
  const s = String(b ?? "").trim();
  if (!s) return "Variety";

  const map = {
    "GEEKBAR": "Geekbar",
    "GEEK BAR": "Geekbar",
    "GEEKBAR PULSE": "Geekbar Pulse",
    "GEEKBAR PULSE X": "Geekbar Pulse X",
    "PULSE": "Geekbar Pulse",
    "PULSE X": "Geekbar Pulse X",
    "DIGIFLAVOR": "DIGIflavor",
    "DIGI FLAVOR": "DIGIflavor",
    "FOGER 35000": "Foger Bit 35K",
    "FOGER 35K": "Foger Bit 35K",
    "FOGER BIT 35K": "Foger Bit 35K",
    "RIA": "RIA NV30K",
    "RIA NV30K": "RIA NV30K",
    "RAZ": "RAZ"
  };

  return map[s.toUpperCase()] || s;
}

function parseRawList(raw) {
  if (!raw) return [];
  const lines = raw.split(/\r?\n/).map(cleanLine);

  let currentBrand = "";
  const out = [];

  for (const line of lines) {
    if (!line) continue;

    const heading = line.match(/^(.+?)\s*:\s*$/);
    if (heading) {
      currentBrand = normalizeBrand(heading[1]);
      continue;
    }

    const split = line.match(/^(.+?)\s*[-—:]\s*(.+)$/);
    if (split) {
      const brand = normalizeBrand(split[1]);
      split[2].split(",").map(cleanLine).filter(Boolean)
        .forEach(name => out.push({ brand, name }));
      continue;
    }

    if (currentBrand) {
      line.split(",").map(cleanLine).filter(Boolean)
        .forEach(name => out.push({ brand: currentBrand, name }));
      continue;
    }

    out.push({ brand: "Variety", name: line });
  }

  return out;
}

function dedupe(list) {
  const seen = new Set();
  const out = [];
  for (const f of list) {
    const brand = normalizeBrand(f.brand);
    const name = cleanLine(f.name);
    if (!name) continue;
    const key = `${brand}::${name.toLowerCase()}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({ brand, name });
  }
  return out;
}

/* ========= MERGE BASELINE + RAW MASTER LIST ========= */
const merged = dedupe([...FLAVORS, ...parseRawList(RAW_MASTER_LIST)]);

/* ========= TICKER (USES ENTIRE MERGED LIST) ========= */
function buildTickerText() {
  if (!merged.length) return "Flavor variety available in store • ";
  const items = merged.map(f => f.name).filter(Boolean);
  const joined = items.join("  •  ");
  return `${joined}  •  ${joined}`; // duplicate for seamless loop
}

function calculateTickerDuration(textLength) {
  const seconds = textLength / 45;
  return Math.min(Math.max(seconds, 25), 180);
}

function initTicker() {
  if (!tickerTrack) return;
  const text = buildTickerText();
  tickerTrack.textContent = text;
  tickerTrack.style.setProperty("--ticker-duration", `${calculateTickerDuration(text.length)}s`);
}

/* ========= FLAVOR VAULT (SEARCHABLE) ========= */
function renderFlavors() {
  if (!grid) return;

  const q = (searchInput?.value || "").toLowerCase().trim();
  grid.innerHTML = "";

  // Performance guardrails
  const searching = q.length >= 2;
  const MAX_RESULTS = searching ? 420 : 84;

  const filtered = merged.filter(f => {
    const name = (f.name || "").toLowerCase();
    const brand = (f.brand || "").toLowerCase();
    return !q || name.includes(q) || brand.includes(q);
  });

  filtered.slice(0, MAX_RESULTS).forEach(f => {
    const card = document.createElement("div");
    card.innerHTML = `
      <strong>${escapeHTML(f.name)}</strong>
      <small>${escapeHTML(f.brand)}</small>
    `;
    grid.appendChild(card);
  });

  if (filtered.length > MAX_RESULTS) {
    const more = document.createElement("div");
    more.style.opacity = "0.75";
    more.innerHTML = `<small>Showing ${MAX_RESULTS} of ${filtered.length}. Type more to refine.</small>`;
    grid.appendChild(more);
  }
}

/* ========= EVENTS ========= */
if (searchInput) searchInput.addEventListener("input", renderFlavors);

/* ========= FOOTER YEAR ========= */
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ========= INIT ========= */
initTicker();
renderFlavors();
