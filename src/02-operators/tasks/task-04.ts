/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator. ❌
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const harboard = 850000
const jumkey = 1
const harmo = 275000
const jummo = 2
const harpad = 120000
const jumpad = 1
const premmem = true

let totalitem = 0;

for (let i = 0; i < jumkey; i++) {
  totalitem++;
}
for (let i = 0; i < jummo; i++) {
  totalitem++;
}
for (let i = 0; i < jumpad; i++) {
  totalitem++;
}

const purtotal = (harboard * jumkey) + (harmo * jummo) + (harpad*jumpad)
const hardis = 0.10
const subdiskon = purtotal > 1000000 ? 0.10 : 0
const diskon = purtotal * subdiskon

const final = purtotal - diskon 
console.log("Total Items:", totalitem);
console.log("Subtotal: Rp", purtotal);
console.log("Discount: Rp", diskon);
console.log("Final Payment: Rp", final);