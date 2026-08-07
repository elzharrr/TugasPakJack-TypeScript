/**
 * An airline automatically determines a passenger's check-in status.
 * Business Rules
 * Step 1
 * If the passenger has not checked in online, display:
 * "Please complete online check-in first.""
 * 
 * Otherwise, continue.
    * Step 2
    * If baggage weight exceeds 20 kg:
    * - Business Class → Extra baggage allowed.
    * - Economy Class → Additional baggage fee required.
    * 
 * Otherwise:
 * Proceed to boarding pass printing.
 * 
 * Passenger Information
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Passenger       | Fajar Nugroho |
 * | Online Check-in | Yes           |
 * | Cabin Class     | Economy       |
 * | Baggage Weight  | 24 kg         |
 * 
 * Student Tasks
 * 1. Declare all variables.
 * 2. Implement the airline decision process.
 * 3. Display the correct message.
 */

const name = "Fajar Nugroho"
const checkin = true
let cabclass = "Economy" 
const bagweight = 24
let bag = ""

if (!checkin) {
    bag = "Please complete online check-in first.";
} else {
    if (bagweight > 20) {
        if (cabclass === "Business") {
            bag = "Extra baggage allowed.";
        } else if (cabclass === "Economy") {
            bag = "Additional baggage fee required.";
        } 
    } else {
        bag = "Proceed to boarding pass printing.";
    }
}

console.log("Cabine Class: " + cabclass)
console.log("Bag Weight: "+ bagweight + " Kg")
console.log(bag)
