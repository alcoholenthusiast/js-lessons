/////////// Conditionals + Expressions

let result 
let person = 'Paul'
let age = 30

if (person === 'Paul') {    
    result = 'yes'
    console.log('Condition Was True')
} else {
    result = 'no'
    console.log('Condition Was False')
}

console.log(result)

// Ternary Operator - make if/else an expression
// Use to set a variable

const result2 = person === 'Paul' ? 'Yes' : 'No'

// Person2 = paul ? age < 30 ? :   DONT DO THIS

console.log(result2)

////////// Switch Statement

switch (age) {
    case 20 :  
        console.log('Age is 20')
        break
    case 30 : 
        console.log('Age is 30')
        break
    case 40 : 
        console.log('Age is 40')
        break
    default : 
        console.log('Statement was not true')
} 