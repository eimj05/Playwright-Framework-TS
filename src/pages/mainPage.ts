import { Page, Locator } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByTestId("suggestion-search");
    this.searchButton = page.getByRole("button", { name: "Search" });
  }

  async enterMovieToSearch(movieName: string) {
    this.searchInput.fill(movieName);
  }

  async clickSearchButton() {
    this.searchButton.click();
  }
}
