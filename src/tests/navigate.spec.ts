import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/mainPage";
import { SearchResultsPage } from "../pages/searchResultsPage";
import { MoviesOptions, NavigationPage } from "../pages/navigationPage";
import { expectWithMessage } from "../utils/assertionHelpers";

let mainPage: MainPage;
let searchResultsPage: SearchResultsPage;
let navigationPage: NavigationPage;

test.beforeEach(async ({ page }) => {
  mainPage = new MainPage(page);
  searchResultsPage = new SearchResultsPage(page);
  navigationPage = new NavigationPage(page);
  await page.goto("https://www.imdb.com/");
});

test("Navigate Top 250 Movies and Select First Movie", async ({ page }) => {
  let movieName: string | null;
  await test.step("Navigate to the Top 25 movies option from Menu", async () => {
    await navigationPage.clickMenuButton();
    await navigationPage.selectOption(MoviesOptions.Top250Movies);
  });

  await test.step("Select the first movie on the list", async () => {
    movieName = await searchResultsPage.selectFirstMovie();
  });

  await test.step("Validate Movie Title and Rating Box are visible", async () => {
    await expectWithMessage(async () => {
      expect(await searchResultsPage.isMovieTitleVisible(movieName!)).toBe(
        true
      );
    }, "Movie title is visible but does not match the selected movie, expected: " + movieName);

    await expectWithMessage(async () => {
      expect(await searchResultsPage.isRatingBoxVisible()).toBe(true);
    }, "Rating box is not visible");
  });

  await test.step("Validate Release Year is visible", async () => {
    await expectWithMessage(async () => {
      expect(await searchResultsPage.isRelaseYearVisible()).toBe(true);
    }, "Release year is not visible");
  });
});
