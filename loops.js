const { isEven } = require('./functions-intro.js')

const animals = [
  { name: 'dog', isPet: true },
  { name: 'cat', isPet: true },
  { name: 'turtle', isPet: false },
  { name: 'lion', isPet: false },
  { name: 'bear', isPet: false },
  { name: 'tiger', isPet: true },
  { name: 'unicorn', isPet: false },
  { name: 'rhino', isPet: false },
  { name: 'porcupine', isPet: false },
  { name: 'aardvark', isPet: false },
  { name: 'lizard', isPet: true },
  { name: 'shark', isPet: false }
]

const cakes = [
  'strawberry shortcake',
  'pound',
  'cupcake',
  'carrot',
  'angel food',
  'black forest',
  'red velvet',
  'coffee',
  'coconut',
  'ice cream cake'
]

const cakePrices = [
  1.02,
  3.55,
  5.12,
  10.55,
  18.61,
  16.13,
  25.44,
  8.59,
  14.42,
  10.34
]

const primeNumbers = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
  101,
  103,
  107,
  109,
  113,
  127,
  131,
  137,
  139,
  149,
  151,
  157,
  163,
  167,
  173,
  179,
  181,
  191,
  193,
  197,
  199
]

const loop100 = () => {
         
    let array = []

    for (i = 1; i < 101; i++) {
        array.push(i)
    }
    
    return array

}

// console.log(loop100())


///////////////////////////////

let findEven = (array) => {

    let array1 = []

    for (i = 0; i < array.length; i++) {

      const currentNumber = array[i]

      if (isEven(currentNumber)) {
        array1.push(currentNumber)
    
      }

    } 

    return array1

} 


////////////////////////////

let findPrime = (start, finish) => {

  let array2 = []

  for (i = start; i <= finish; i++) {

      
      if (primeNumbers.includes(i)) {
          array2.push(i)
      }
      
  } 

  return array2

} 

console.log(findPrime(75, 130))



////////////////////////////


let findPets = (randomArray) => {
  
    let array3 = []

    for (i = 0; i < randomArray.length; i++) {

      if (randomArray[i].isPet === true) {

          const a = animals[i]

          array3.push(a.name)
      }

  }

    return array3.sort()

}



console.log(findPets(animals))



///////////////////////////////////


let findCakes = (randomCakes) => {
  
  let array4 = []

  for (i = 0; i < randomCakes.length; i++) {

    if (randomCakes[i].includes('cake')) {

      const c = cakes[i]

      array4.push(c)

      // array4.push(cakes[i])


    }

}

  return array4.sort()

}

console.log(findCakes(cakes))


/////////////////////////////////////

let getCakePrices = (cakeNames, cakePrices ) => {

  let cakesCollection = []

  for (i = 0; i < cakeNames.length; i++) {

      let name = {
        cake: cakeNames[i]
      }

      cakesCollection.push(name)

    }
    
    
    for (i = 0; i < cakePrices.length; i++) {
      
      let price = cakePrices[i]
      

      cakesCollection[i] = {
        ...cakesCollection[i],
        price, 
      }
      
      // cakesCollection[i] = {
      //   name: cakesCollection[i].cakeName,
      //   price: cakePrices[i]
        
      // } 

    }
    

    console.log(cakesCollection)

    return cakesCollection
      
}


/////////////////////////////////////



module.exports = {
  loop100,
  findEven,
  findPrime, 
  findPets,
  vars: {
    animals,
    cakes,
    cakePrices
  },
  findCakes,
  getCakePrices

}