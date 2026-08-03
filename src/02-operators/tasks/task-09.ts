/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

const keyboardPrice = 850000;
const keyboardQty = 1;
const mousePrice = 275000;
const mouseQty = 2;
const monitorStandPrice = 420000;
const monitorStandQty = 1;
const voucherValue = 100000;
const isPremiumMember = true;
const pointRate = 50000;
const vatRate = 11/100;
const premiumDiscountRate = 10/100;

const subtotal = (keyboardPrice * keyboardQty) + (mousePrice * mouseQty) + (monitorStandPrice * monitorStandQty);
let membershipDiscount= 0;
if (isPremiumMember) {
    membershipDiscount = subtotal * premiumDiscountRate;
}

const paymentBeforeTax = subtotal - membershipDiscount - voucherValue;
const vat = paymentBeforeTax * vatRate;
const finalPayment = paymentBeforeTax + vat;
const rewardPoints = Math.floor(paymentBeforeTax / pointRate);

let isFreeShipping = false;
if (isPremiumMember || paymentBeforeTax > 1500000) {
    isFreeShipping = true;
}
console.log("Product Subtotal     : Rp " + subtotal);
console.log("Membership Discount  : Rp " + membershipDiscount);
console.log("Voucher Deduction    : Rp " + voucherValue);
console.log("Payment Before Tax   : Rp " + paymentBeforeTax);
console.log("VAT (11%)            : Rp " + vat);
console.log("Final Payment        : Rp " + finalPayment);
console.log("Reward Points        : " + rewardPoints + " pts");
console.log("Free Shipping        : " + (isFreeShipping ? "Yes" : "No"));