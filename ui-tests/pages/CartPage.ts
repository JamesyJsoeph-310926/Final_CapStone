import { expect, Page } from '@playwright/test';

export class CartPage {
    constructor(private readonly page: Page) {}

    private cartHeading = () => this.page.getByRole('heading', { name: /Shopping Cart/i });
    private proceedToCheckoutButton = () => this.page.locator(`//*[@data-testid='checkout-button']`);
    private subtotalAmount = () => this.page.getByTestId("cart-subtotal");
    private taxAmount = () => this.page.getByTestId("cart-tax");
    private totalAmount = () => this.page.getByTestId("cart-total");

    async openCart() {
        await this.page.goto('/cart');
        await expect(this.cartHeading()).toBeVisible();
    }

    async proceedToCheckout() {
        await this.proceedToCheckoutButton().click();
    }

    async verifyTaxSummary() {
        const subtotalValue = parseFloat((await this.subtotalAmount().innerText()).replace('$', ''));
        const expectedTax = Number((subtotalValue * 0.085).toFixed(2));
        const expectedTotal = Number((subtotalValue + expectedTax).toFixed(2));
        const actualTax = parseFloat((await this.taxAmount().innerText()).replace('$', ''));
        const actualTotal = parseFloat((await this.totalAmount().innerText()).replace('$', ''));

        expect(actualTax).toBe(expectedTax);
        expect(actualTotal).toBe(expectedTotal);
    }
}