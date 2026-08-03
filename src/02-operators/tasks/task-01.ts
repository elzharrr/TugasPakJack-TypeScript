/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, 
 * and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, 
 * he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const jumlahnasgor  = 3;
const harganasgor   = 18000;
const jumlahair     = 2;
const hargaair      = 5000;
const diskon        = 10000;

const totalnasgor = jumlahnasgor * harganasgor; 
const totalair = jumlahair * hargaair; 
const total = totalnasgor + totalair;
const totalakhir = total - diskon;

console.log("Total harga nasi goreng: Rp" + totalnasgor);
console.log("Total harga air: Rp" + totalair);
console.log("Total harga sebelum diskon: Rp" + total);
console.log("Diskon anggota OSIS: Rp" + diskon);
console.log("-------------------------------");
console.log("Total bayar: Rp" + totalakhir);