import { Page } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage';

export class CheckoutFlow {
    private readonly checkoutPage: CheckoutPage;

    constructor(private readonly page: Page) {
        this.checkoutPage = new CheckoutPage(page);
    }

    async verifyCheckoutPage() {
        await this.checkoutPage.verifyCheckoutPage();
    }

    async fillShippingDetails() {
        await this.checkoutPage.fillShippingDetails();
    }

    async continueToPayment() {
        await this.checkoutPage.continueToPayment();
    }

    async fillPaymentDetails() {
        await this.checkoutPage.fillPaymentDetails();
    }

    async placeOrder() {
        await this.checkoutPage.placeOrder();
    }

    async verifyPaymentPage() {
        await this.checkoutPage.verifyPaymentPage();
    }

    async verifyNoErrorMessages() {
        await this.checkoutPage.verifyNoErrorMessages();
    }
}