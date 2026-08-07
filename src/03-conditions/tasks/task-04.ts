    /**
     * A hotel determines room availability using the following rules.
     * First, the system checks whether rooms are still available.
     * If rooms are available:
     * - Premium members receive a free room upgrade.
     * - Regular customers receive the reserved room only.
     * 
     * If no rooms are available:
     * - Premium members are placed on the priority waiting list.
     * - Regular customers are informed that no rooms are available.
     * 
     * Today's reservation:
     * | Information    | Value       |
     * | -------------- | ----------- |
     * | Customer Name  | Nadia Putri |
     * | Premium Member | Yes         |
     * | Room Available | No          |
     * 
     * The system should display the appropriate message.
     * Student Tasks: 
     * 1. Declare all variables.
     * 2. Implement the logic using nested if statements.
     * 3. Display the reservation result.
     */
const customerName = "Nadia Putri";
const isPremiumMember = true;
const isRoomAvailable = false;
let resultMessage = "";

if (isRoomAvailable === false) {
    if (isPremiumMember === true) {
        resultMessage = "You receive a free room upgrade!";
    } else {
        resultMessage = "You receive the reserved room only.";
    }
} else {
    if (isPremiumMember === true) {
        resultMessage = "You are placed on the priority waiting list.";
    } else {
        resultMessage = "Sorry, no rooms are available.";
    }
}

console.log("=== Hotel Reservation System ===");
console.log("Customer Name : " + customerName);
console.log("Status        : " + resultMessage);
