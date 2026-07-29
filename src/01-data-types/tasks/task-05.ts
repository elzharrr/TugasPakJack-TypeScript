/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type company = {
    employeeID : number | string,
    employeename : string,
    date: Date,
    checkin: number | String,
    checkout : number | string,
    totalworktime : number,
    present : boolean
}

const employee1 = {
    employeeID : 264224 ,
    employeename : "Praba",
    date: new Date ,
    checkin: "06.00" ,
    checkout : "18.00" ,
    totalworktime : 12 ,
    present : true
}

const employee2 = {
    employeeID : 29486 ,
    employeename : "akhdan" ,
    date: new Date ,
    checkin: "06.02" ,
    checkout : "18.00",
    totalworktime : 12 ,
    present : true ,
}

const employee3 = {
    employeeID : 2342 ,
    employeename : "agung" ,
    date: new Date,
    checkin: "-" ,
    checkout : "-",
    totalworktime : "-" ,
    present : false ,
}

const employee = [employee1,employee2, employee3]
employee.forEach(employee => {
    console.log(employee)
});
