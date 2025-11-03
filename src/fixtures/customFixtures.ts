import { test as base } from "@playwright/test";
import { MoviesOptions, NavigationPage } from "../pages/navigationPage";

type MyFixtures = {
  navigationPage: NavigationPage;
  moviesOptions: MoviesOptions;
};

export const test = base.extend<MyFixtures>({
  navigationPage: async ({ page }, use) => {
    const navigationPage = new NavigationPage(page);
    await use(navigationPage);
  },
});

export { expect } from "@playwright/test";
