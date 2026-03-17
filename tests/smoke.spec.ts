import { test, expect } from "@playwright/test";

test("core routes render", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("PRIVATE SYNC CATALOG")).toBeVisible();

  await page.goto("/library");
  await expect(page.getByRole("heading", { name: "Library" })).toBeVisible();

  await page.goto("/playlists");
  await expect(page.getByRole("heading", { name: "Pitch Playlists" })).toBeVisible();

  await page.goto("/admin");
  await expect(page.getByRole("heading", { name: "Admin Upload Console" })).toBeVisible();
});

test("health endpoint responds", async ({ page }) => {
  const response = await page.goto("/api/health");
  expect(response).not.toBeNull();
  expect(response!.status()).toBeLessThan(500);
});
