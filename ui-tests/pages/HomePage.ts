import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
    constructor(private readonly page: Page) {}

    private headingTitle = (): Locator => this.page.getByRole('link', { name: 'RM RetailMart' });

    async open() {
        await this.page.goto('/');
        await expect(this.headingTitle()).toBeVisible();
    }
}