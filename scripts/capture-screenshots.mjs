import { chromium } from "playwright";

const base = "http://127.0.0.1:4012";
const shots = [
  ["home", "/"],
  ["library", "/library"],
  ["playlists", "/playlists"],
  ["admin", "/admin"],
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 980 } });

for (const [name, path] of shots) {
  await page.goto(`${base}${path}`, { waitUntil: "networkidle" });
  await page.screenshot({ path: `docs/screenshots/${name}.png`, fullPage: true });
  console.log(`saved: docs/screenshots/${name}.png`);
}

await browser.close();
