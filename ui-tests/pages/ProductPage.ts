import { expect, Page } from '@playwright/test';

export class ProductPage {
    constructor(private readonly page: Page) {}

    private sku = () => this.page.locator("//*[@data-testid='product-detail-sku']");
    private addToCartButton = () => this.page.getByRole('button', { name: "Add to Cart" });
    private byNowButton = () => this.page.getByRole('button', { name: "Buy Now" });

    async verifyProductDetailVisible() {
        await expect(this.sku()).toBeVisible();
    }

    async addToCart() {
        await this.addToCartButton().click();
    }

    async buyNow(){
        await this.byNowButton().click();
    }
}