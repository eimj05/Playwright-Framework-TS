import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/mainPage";
import { SearchResultsPage } from "../pages/searchResultsPage";
import { NavigationPage } from "../pages/navigationPage";

let mainPage: MainPage;
let searchResultsPage: SearchResultsPage;
let navigationPage: NavigationPage;

test.beforeEach(async ({ page }) => {
  mainPage = new MainPage(page);
  searchResultsPage = new SearchResultsPage(page);
  navigationPage = new NavigationPage(page);
  await page.goto("https://www.imdb.com/");
});

test("Search and Validate Movie", async ({ page }) => {
  const movieName = "Inception";

  await test.step(`Search for movie: ${movieName}`, async () => {
    await mainPage.enterMovieToSearch(movieName);
    await mainPage.clickSearchButton();
  });

  await test.step("Validate Search Results", async () => {
    expect(page).toHaveTitle("Find - IMDb");
    expect(await searchResultsPage.getResultTitle()).toBe(
      'Search "' + movieName.toLowerCase() + '"'
    );
  });

  await test.step(`Click on movie: ${movieName} from search results`, async () => {
    await searchResultsPage.clickOnMovie(movieName);
    expect(await searchResultsPage.getMovieTitle()).toBe(movieName);
  });

  await test.step("Validate Movie Title and Rating Box are visible", async () => {
    expect(await searchResultsPage.getMovieTitle()).toBe(movieName);
  });
});
