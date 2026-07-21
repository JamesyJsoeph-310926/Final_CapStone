import { test } from '../../fixtures/fixtures';
import { logger } from '../../support/logger';

test('Tax validation on cart and checkout summary', async ({ productFlow, cartFlow, checkoutFlow }) => {
  await productFlow.openHome();
  logger.info("Home Page Opened Successfully!");

  await productFlow.openFirstProduct();
  logger.info("Product have been selected");
  
  await productFlow.verifyProductDetail();
  logger.info("Verified the product details");

  await productFlow.addToCart();
  logger.info("Product added to cart");

  await cartFlow.openCart();
  logger.info("Cart opened");

  await cartFlow.verifyTaxSummary();
  logger.info("Verify the Summary");

  await cartFlow.proceedToCheckout();
  logger.info("Verified the product and proceed to checkout");

  await checkoutFlow.verifyCheckoutPage();
  logger.info("Verify CheckoutPage");

  // await cartFlow.verifyTaxSummary();
  // logger.info("Verify the Tax Summary in checkout page");
});
