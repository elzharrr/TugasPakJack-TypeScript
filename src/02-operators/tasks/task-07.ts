/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const roomnight = 650000
const nightstay = 4
const serviceprice = 120000
const tax = 11/100
const vip = true 
const vipcut = 12/100

const oriprice = roomnight * nightstay
let disc : number = 0
if(vip){
    disc = oriprice * vipcut;
}
const discroom = oriprice - disc
const taxroom = discroom * tax
const finalprice = taxroom + serviceprice

const hasFreeBreakfast = nightstay >= 3 || vip;


console.log("Room full price: "+finalprice)
console.log("Free Breakfast: "+ (hasFreeBreakfast ? "Yes" : "No"))

