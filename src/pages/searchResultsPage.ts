import { Page, Locator } from "@playwright/test";
import { text } from "stream/consumers";

export class SearchResultsPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly movieTitle: Locator;
  readonly ratingBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator("h1");
    this.movieTitle = page.getByTestId("hero__primary-text");
    this.ratingBox = page.getByTestId(
      "hero-rating-bar__aggregate-rating__score"
    );
  }

  async getResultTitle() {
    const textRetrieved = await this.heading.innerText();
    return textRetrieved;
  }

  async clickOnMovie(movie: string) {
    const listItems = this.page.locator(
      '[data-testid="find-results-section-title"] li'
    );

    const targetItem = listItems.filter({
      has: this.page.locator("a", { hasText: new RegExp(`^${movie}$`) }),
    });

    await targetItem.first().click();
  }

  async isMovieTitleVisible() {
    const isVisible = await this.movieTitle.isVisible();
    return isVisible;
  }

  async getMovieTitle() {
    const movieTitle = await this.movieTitle.innerText();
    return movieTitle;
  }

  async selectFirstMovie() {
    const listItems = this.page.locator(
      '[data-testid="chart-layout-main-column"] li h3'
    );

    const firstElement = await listItems.first().textContent();
    await listItems.first().click({ timeout: 8000 });
    return firstElement;
  }

  async isRatingBoxVisible() {
    const isVisible = await this.ratingBox.first().isVisible();
    if (isVisible) return true;
    else return false;
  }

  async isRelaseYearVisible() {
    const isVisible = await this.page
      .locator(
        "div[class='sc-14a487d5-3 ckSjzt'] li:nth-child(1) a:nth-child(1)"
      )
      .isVisible();
    if (isVisible) return true;
    else return false;
  }
}
