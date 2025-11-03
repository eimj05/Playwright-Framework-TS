import { test, expect } from "../fixtures/customFixtures";
import { MoviesOptions } from "../pages/navigationPage";

test("Navigate through Movie Categories and Validate Options", async ({
  navigationPage,
  page,
}) => {
  await test.step("Open Menu and Navigate to Movies Section", async () => {
    await page.goto("https://www.imdb.com/");
    await navigationPage.clickMenuButton();
    await navigationPage.selectOption(MoviesOptions.Top250Movies);
  });
});
