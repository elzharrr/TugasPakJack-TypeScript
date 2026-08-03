/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const previousMeter = 25640;
const currentMeter = 25892;
const pricePerKwh = 1650;
const hasSolarPanel = true;
const hasEnergySavingMode = false;


const totalConsumption = currentMeter - previousMeter;
const electricityBill = totalConsumption * pricePerKwh;
let discountPercentage = 0;

if (hasSolarPanel) {
    discountPercentage = discountPercentage + 0.20;
}

if (hasEnergySavingMode) {
    discountPercentage = discountPercentage + 0.05;
}
const totalDiscountAmount = electricityBill * discountPercentage;
const finalBill = electricityBill - totalDiscountAmount;
const isGreenEnergyEligible = hasSolarPanel && (totalConsumption < 300) && hasEnergySavingMode;

console.log(`Total Konsumsi Energi      : ${totalConsumption} kWh`);
console.log("Tagihan Listrik Awal       : "+electricityBill);
console.log("Total Diskon yang Didapat  : "+totalDiscountAmount);
console.log("Tagihan Akhir (Final Bill) : "+ finalBill);

if (isGreenEnergyEligible) {
    console.log("Green Energy Program       : Ya (Memenuhi Syarat)");
} else {
    console.log("Green Energy Program       : Tidak (Belum Memenuhi Syarat)");
}