/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const playhours = 7;
const minutplay = 35;
const hourprice = 8000;

const totalminut = (playhours * 60) + minutplay;
const sisaminut = totalminut % 60;

const renthour = sisaminut > 0 ? playhours + 1 : playhours;
const rentprice = renthour * hourprice; 
const discountAmount = renthour > 5 ? (rentprice * 0.15) : 0;

const finalprice = rentprice - discountAmount;


console.log(`Total minut play : ${totalminut} menit`);
console.log(`minut remain : ${sisaminut} menit`);
console.log(`rent hour : ${renthour} jam`);
console.log(`before disc : Rp${rentprice}`);
console.log(`discount (15%) : Rp${discountAmount}`);
console.log(`final price payment : Rp${finalprice}`);
