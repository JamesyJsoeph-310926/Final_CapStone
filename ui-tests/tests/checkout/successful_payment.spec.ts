import { log } from 'node:console';
import { test, expect } from '../../fixtures/fixtures';
import { logger } from '../../support/logger';

test('Successful payment validation with provided card', async ({ productFlow, cartFlow, checkoutFlow, orderFlow, page }) => {
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

  await cartFlow.proceedToCheckout();
  logger.info("Verified the product and proceed to checkout");

  await checkoutFlow.verifyCheckoutPage();
  logger.info("Verify CheckoutPage");

  await checkoutFlow.fillShippingDetails();
  logger.info("Filled Details");

  await checkoutFlow.continueToPayment();
  logger.info("Continued to Pay");

  await checkoutFlow.verifyPaymentPage();
  logger.info("Verified Payment Page");

  await checkoutFlow.fillPaymentDetails();
  logger.info("Payment Details uploaded");

  await checkoutFlow.placeOrder();
  logger.info("Placed Order");

  await checkoutFlow.verifyNoErrorMessages();
  logger.info("Verifed No Error Messages");

  await orderFlow.verifySuccess();
  logger.info("Verifed the order");

  await orderFlow.verifyOrderNumberGenerated();
  logger.info("Order ID Generated");

  await expect(page.getByRole('link', {name: /continue shopping/i})).toBeVisible();
});

