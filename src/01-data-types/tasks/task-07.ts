/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type student = {
    studentID: number | string,
    stname: string,
    grade: string | number
}

type course = {
    courseID: number,
    coursetitle: string,
    instructorname: string
    totalearning : string
}

type regis = {
    regisdate: Date,
    paidinfull: boolean
}

const person1 = {
    studentID: 94872 ,
    stname: "fariq akbar",
    grade: 2 ,
    courseID: 4 ,
    coursetitle:"english" ,
    instructorname: "Bambang" ,
    totalearning: 2342 ,
    regisdate: new Date,
    paidinfull: true 
}

const person2 = {
    studentID: 4234,
    stname: "ale gor" ,
    grade: 1 ,
    courseID: 5 ,
    coursetitle: "Software enginnering" ,
    instructorname: "Joko " ,
    totalearning: 242 ,
    regisdate: new Date,
    paidinfull: false
}

const person3 = {
    studentID: 42332 ,
    stname: "ferdi ipul",
    grade: 3,
    courseID:1 ,
    coursetitle: "Chemistry" ,
    instructorname: "aur" ,
    totalearning: 1341,
    regisdate: new Date,
    paidinfull: true
}

const person = [person1,person2, person3]
person.forEach(person => {
    console.log(person)
})