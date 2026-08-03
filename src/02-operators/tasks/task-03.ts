/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

const salary = 5000000;
const overhours = 12;
const overrate = 50000;

const overpay = overhours * overrate;
const bonus = overhours > 10 ? 300000 : 0 /* (?) melambangkan pengondisian */
const finalpay = salary + overpay + bonus

console.log("Overtime Pay: " + overpay)
console.log("Bonus: " + bonus)
console.log("Final Salary: " + finalpay)