// @ts-check
import { test, expect } from"@playwright/test";
const LOCALHOST_URL = "http://localhost:5173/";

test("Shows random fact and image", async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  await expect(page).toHaveTitle("Random cats app");

  const par = page.getByRole("paragraph");
  const image = page.getByRole("img");
  const fact = await par.textContent();
  const imgScr = await image.getAttribute("src");

  expect(fact?.length).toBeGreaterThan(0);
  expect(imgScr?.startsWith("https://cataas.com/cat/")).toBeTruthy(); //TODO: encode fact to use here

  //TODO: detect image change on button click
});