// This is where you will write functions!
const getString = function () {
    return 'String Bean'
}

function getList () {
    return []
}

///////////////////////////////////////////////////

const greet = (name) => {
    return 'Hello, ' + name + '.' 
} 

console.log(greet('Paul'))
console.log(greet('Jen'))

///////////////////////////////////////////////////

const add = (values1, values2) => {
    return values1 + values2 
}

console.log(add(3, 12))

///////////////////////////////////////////////////

const concatenate = (valuea, valueb) => {
    if (typeof valuea === 'string') {
        return valuea + valueb
    } 
    
    if (Array.isArray(valuea)) {
        return valuea.concat(valueb)
    }
    
    throw Error('Function Expected a String or List')
}

console.log(concatenate('Anything', ' here works'))
console.log(concatenate([1, 2, ], [3, 4]))

///////////////////////////////////////////////////

const stringToNumber = (string) => {
    // const n = parseInt(string)
    // return n
    return parseInt(string)

}

console.log(stringToNumber('1'))

///////////////////////////////////////////////////

const atIndex = (value3, value4) => {
    if (Array.isArray(value3)) {
        return value3.pop()
    } 

    if (typeof value3 === 'string') {
        return value3.charAt(1)
    }

    throw Error('Not expected value types')
}

console.log(atIndex(['cat', 'dog'], 1))
console.log(atIndex('cat', 1))


////////////////////////////////////////////////////

const isEven = (number) => {
    if (number % 2 == 0)
        return true
    else
        return false
} 

console.log(isEven(1))
console.log(isEven(2))


//////////////////////////////////////////////////////

// ES5 constructor function (class) 
function createPerson(name = 'John Doe', age = 42) {
    this.name = name;
    this.age = age
}

// // Es6 style class
// class ModernPerson {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }

// let person1 = new Person()
// let person2 = new Person('Harry', 28)


// console.log(person1.name)
// console.log(person2)
// { name: '', age: 12 }

///////////////////////////////////////////////////////


// This is where you will export them to be consumed by other files
module.exports = {
    getString,
    getList,
    greet,
    add,
    concatenate,
    stringToNumber,
    atIndex,
    isEven,
    createPerson
}



// // Class example

// class BaseAnimal {
//     constructor(name, habitat) {
//         this.name = name
//         this.habitat = habitat
//         this.owner = null
//     }

    
//     assignOwner() {
//         this.owner = 'Someone'
//     }
// }

// const Animal1 = new BaseAnimal()
// Animal1.assignOwner()

// // { name, habitat, assignOwner }

// // class Dog extends BaseAnimal {
// //     constructor(super, name, habitat, breed) {
// //         super(name, habitat)
// //         this.breed = breed
// //     }
// // }

// // functional ways to create object
// // Object.assign({}, { name: 'blah', age: 3 })
// const createPerson = (name, age) => {
//     const person = { name, age } 
//     return person
// }

// const createCoolPerson = (name, age,talent) => {
//     const coolPerson = Object.assign({ name, age }, { talent })
// }

// const p1 = createPerson('adam', 34)

// const fn = (...args) => {
//     console.log('the arguments', args)
// }