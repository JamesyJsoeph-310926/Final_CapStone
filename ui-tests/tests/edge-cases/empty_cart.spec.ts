import { test, expect } from '../../fixtures/fixtures';
import { logger } from '../../support/logger';

test('Not able to Checkout With Empty Cart',async ({cartFlow, page}) => {
    await cartFlow.openCart();
    logger.info("Opened the Empty-Cart");
    
    await expect(page.getByRole('link', {name: /continue shopping/i})).toBeVisible();
    logger.info("Verifed No Checkout possible in Empty-Cart");
    }
);