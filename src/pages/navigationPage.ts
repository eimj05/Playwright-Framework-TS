import { Page, Locator } from "@playwright/test";

export enum MoviesOptions {
  ReleaseCalendar = "Release calendar",
  Top250Movies = "Top 250 movies",
}
export class NavigationPage {
  readonly page: Page;
  readonly menuButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuButton = page.locator("#imdbHeader-navDrawerOpen");
  }

  async clickMenuButton() {
    await this.menuButton.click({ timeout: 5000 });
  }

  async selectOption(MoviesOptions: any) {
    const option = MoviesOptions;
    const selectOption = this.page.getByText(option, { exact: true });
    await selectOption.click();
  }
}
