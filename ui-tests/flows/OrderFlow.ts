import { Page } from '@playwright/test';
import { OrderPage } from '../pages/OrderPage';

export class OrderFlow {
    private readonly orderPage: OrderPage;

    constructor(private readonly page: Page) {
        this.orderPage = new OrderPage(page);
    }

    async verifySuccess() {
        await this.orderPage.verifySuccess();
    }

    async verifyOrderNumberGenerated() {
        await this.orderPage.verifyOrderNumberGenerated();
    }
}