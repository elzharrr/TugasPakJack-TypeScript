/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */

import { log } from "node:console"

const stname = "Alya Putri"
const gpa = 3.89
const famincome =  4200000
const comp=  4
const disiplin =false
const doccomplete =  true

const Agpa = gpa >= 3.75
const Afamincome = famincome < 5000000
const Acomp = comp >= 3
const Adisiplin = disiplin === false
const Adoccomplete = doccomplete === true

const schship = Agpa &&
                Afamincome &&
                Adoccomplete &&
                Adisiplin &&
                Acomp;

const schshicut = schship ? 12000000 : 0
const schshipbugdet = 500000000
const remainbugdet = schshipbugdet - schshicut

console.log("Stundent Name: "+stname)
console.log(`Status : ${schship ? "Yes" : "No"}`)
console.log("Scholar Ship : "+ schshicut)
console.log("Total Budget: "+schshipbugdet)
console.log("Remaining Budget: "+ remainbugdet)