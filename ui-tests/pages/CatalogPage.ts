import { expect, Page } from '@playwright/test';
import { products } from '../test-data/products';

export class CatalogPage {
    constructor(private readonly page: Page) {}

    private productLink = () => this.page.getByRole('link', {name: products.productName}).first();

    async openFirstProduct() {
        await expect(this.productLink()).toBeVisible();
        await this.productLink().click();
    }
}