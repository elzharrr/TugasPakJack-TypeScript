/**
 * A hospital emergency department must determine the priority level of every arriving patient.
 * The hospital follows these rules:
 * 1. If the patient's condition is critical, they are immediately assigned to the Emergency Room.
 * 2. Otherwise, if the patient has an appointment:
 *  - Elderly patients (age ≥ 60) receive Priority Queue.
 *  - Other patients receive Regular Queue.
 * 3. Otherwise:
 *  - Patients with health insurance are assigned to the Insurance Registration Counter.
 *  - Patients without insurance are assigned to the General Registration Counter.
 * 
 * Today's patient information:
 * | Information        | Value      |
 * | ------------------ | ---------- |
 * | Patient Name       | Siti Rahma |
 * | Critical Condition | No         |
 * | Has Appointment    | Yes        |
 * | Age                | 67         |
 * | Has Insurance      | Yes        |
 * 
 * Tasks: 
 * 1. Declare all required variables.
 * 2. Implement the hospital workflow using conditional statements.
 * 3. Display the patient's destination.
 */

const name = "Siti Rahma"
const critical = false
const appointment = true
const age = 67
const insu = true

if (critical){
    console.log(name+" Assigned to Emergency Room")
} else if (appointment && age > 60){
    console.log(name+" Priority Pasien Queue")
} else {
    console.log(name+" Reguler Pasien Queue")
} if (insu){
    console.log("to Insurance Registration Counter")
} else {
    console.log("to the General Registration Counter")
}
