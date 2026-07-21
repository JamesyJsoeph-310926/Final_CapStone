import { expect, Page } from '@playwright/test';

export class OrderPage {
    constructor(private readonly page: Page) {}

    async verifySuccess() {
        await expect(this.page.getByText(/order confirmed/i)).toBeVisible();
        await expect(this.page.locator('body')).toContainText('ProSound Wireless Headphones');
    }

    async verifyOrderNumberGenerated() {
        const orderNumber = this.page.locator('body').filter({ hasText: /order/i }).first();
        await expect(orderNumber).toBeVisible();
    }
}