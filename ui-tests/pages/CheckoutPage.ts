import { expect, Page } from '@playwright/test';
import { contactDetails } from '../test-data/contact';
import { address } from '../test-data/address';
import { payment } from '../test-data/payment';

export class CheckoutPage {
    constructor(private readonly page: Page) {}

    private fullNameInput = () => this.page.getByRole('textbox',{name: 'Jane Smith'});
    private emailInput = () => this.page.getByRole('textbox',{name: 'jane@example.com'});
    private phoneInput = () => this.page.getByRole('textbox',{name: '555-123-4567'});
    private streetInput = () => this.page.getByPlaceholder('123 Main Street');
    private cityInput = () => this.page.getByPlaceholder('Springfield');
    private zipInput = () => this.page.getByPlaceholder('62701');
    private countryInput = () => this.page.locator('input[value="USA"]');
    private paymentSuccessRadio = () => this.page.getByLabel(/payment success/i);
    private cardNumberInput = () => this.page.getByTestId('payment-card-number');
    private expiryInput = () => this.page.getByPlaceholder('MM/YY');
    private cvvInput = () => this.page.getByTestId('payment-cvv');

    async fillShippingDetails() {
        await this.fullNameInput().fill(payment.cardholderName);
        await this.emailInput().fill(contactDetails.email);
        await this.phoneInput().fill(contactDetails.phone);
        await this.streetInput().fill(address.street);
        await this.cityInput().fill(address.city);
        await this.page.locator('select').selectOption(address.state);
        await this.zipInput().fill(address.zip);
        await this.countryInput().fill(address.country);
    }

    async continueToPayment() {
        await this.page.getByRole('button', { name: /continue to payment/i }).click();
    }

    async fillPaymentDetails() {
        await this.paymentSuccessRadio().check();
        await this.fullNameInput().fill(payment.cardholderName);
        await this.cardNumberInput().fill(payment.cardNumber);
        await this.expiryInput().pressSequentially(payment.expiry);
        await this.cvvInput().fill(payment.cvv);
    }

    async verifyNoErrorMessages() {
        await expect(this.page.getByText(/error/i)).toHaveCount(0);
    }

    async placeOrder() {
        await this.page.getByRole('button', { name: /place order/i }).click();
    }

    async verifyCheckoutPage() {
        await expect(this.page.getByRole('heading', { name: "Checkout", level: 1})).toBeVisible();
    }

    async verifyPaymentPage() {
        await expect(this.page.getByRole('heading', { name: "Payment", level: 1})).toBeVisible();
    }
}