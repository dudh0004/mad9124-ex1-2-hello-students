'use strict'

const students = require('./students.json')

students.forEach(function(student){
    console.log(`Hello ${student.firstName} ${student.lastName}`)
})

let count = 0;

students.filter(student => {
    if(`${student.lastName}`.charAt(0) == 'D')
    {
        count++;
    }
})

console.log(`Count of last names starting with D is ${count}`);  
