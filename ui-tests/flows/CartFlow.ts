import { Page } from '@playwright/test';
import { CartPage } from '../pages/CartPage';

export class CartFlow {
    private readonly cartPage: CartPage;

    constructor(private readonly page: Page) {
        this.cartPage = new CartPage(page);
    }

    async openCart() {
        await this.cartPage.openCart();
    }

    async proceedToCheckout() {
        await this.cartPage.proceedToCheckout();
    }

    async verifyTaxSummary() {
        await this.cartPage.verifyTaxSummary();
    }
}