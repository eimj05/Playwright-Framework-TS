import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/mainPage";
import { SearchResultsPage } from "../pages/searchResultsPage";
import { MoviesOptions, NavigationPage } from "../pages/navigationPage";

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
  await mainPage.enterMovieToSearch(movieName);
  await mainPage.clickSearchButton();
  expect(page).toHaveTitle("Find - IMDb");
  expect(await searchResultsPage.getResultTitle()).toBe(
    'Search "' + movieName.toLowerCase() + '"'
  );
  await searchResultsPage.clickOnMovie(movieName);
  expect(await searchResultsPage.getMovieTitle()).toBe(movieName);
});

test("Navigate Top 250 Movies and Select First Movie", async ({ page }) => {
  await navigationPage.clickMenuButton();
  await navigationPage.selectOption(MoviesOptions.Top250Movies);
  const movieName = await searchResultsPage.selectFirstMovie();
  expect(await searchResultsPage.isMovieTitleVisible(movieName!)).toBe(true);
  expect(await searchResultsPage.isRatingBoxVisible()).toBe(true);
  expect(await searchResultsPage.isRelaseYearVisible()).toBe(true);

  const test = "test";
});
