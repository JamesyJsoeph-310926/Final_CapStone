import { Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CatalogPage } from '../pages/CatalogPage';
import { ProductPage } from '../pages/ProductPage';

export class ProductFlow {
    private readonly homePage: HomePage;
    private readonly catalogPage: CatalogPage;
    private readonly productPage: ProductPage;

    constructor(private readonly page: Page) {
        this.homePage = new HomePage(page);
        this.catalogPage = new CatalogPage(page);
        this.productPage = new ProductPage(page);
    }

    async openHome() {
        await this.homePage.open();
    }

    async openFirstProduct() {
        await this.catalogPage.openFirstProduct();
    }

    async verifyProductDetail() {
        await this.productPage.verifyProductDetailVisible();
    }

    async addToCart() {
        await this.productPage.addToCart();
    }
}