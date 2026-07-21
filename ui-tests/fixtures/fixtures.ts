import { test as base } from '@playwright/test';
import { ProductFlow } from '../flows/ProductFlow';
import { CartFlow } from '../flows/CartFlow';
import { CheckoutFlow } from '../flows/CheckoutFlow';
import { OrderFlow } from '../flows/OrderFlow';

type Fixtures = {
    productFlow: ProductFlow;
    cartFlow: CartFlow;
    checkoutFlow: CheckoutFlow;
    orderFlow: OrderFlow;
};

export const test = base.extend<Fixtures>({
    productFlow: async ({ page }, use) => {
        await use(new ProductFlow(page));
    },
    cartFlow: async ({ page }, use) => {
        await use(new CartFlow(page));
    },
    checkoutFlow: async ({ page }, use) => {
        await use(new CheckoutFlow(page));
    },
    orderFlow: async ({ page }, use) => {
        await use(new OrderFlow(page));
    }
});

export { expect } from '@playwright/test';