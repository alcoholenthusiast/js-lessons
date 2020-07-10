const fns = require('../loops.js')

fdescribe('loops are your friend', () => {
  it('should have an array from 1 to 100', () => {
    expect(fns.loop100().length).toBe(100)
  })

  it('should find all the even numbers in an array from 1 to 10', () => {
    const answer = [2, 4, 6, 8, 10]
    expect(fns.findEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(answer)
  })

  it('should find all the prime numbers from 75 to 130', () => {
    const answer = [79, 83, 89, 97, 101, 103, 107, 109, 113, 127]
    expect(fns.findPrime(75, 130)).toEqual(answer)
  })

  it('should find all the animals that can be pets', () => {
    expect(fns.findPets(fns.vars.animals)).toEqual(['cat', 'dog', 'lizard', 'tiger'])
  })

  it('should find all the cakes that have the word cake in it alphabetized', () => {
    expect(fns.findCakes(fns.vars.cakes)).toEqual([
      'cupcake',
      'ice cream cake',
      'strawberry shortcake'
    ])
  })

  it('should create a collection of cakes with prices', () => {
    const answer = [
      { cake: 'strawberry shortcake', price: 1.02 },
      { cake: 'pound', price: 3.55 },
      { cake: 'cupcake', price: 5.12 },
      { cake: 'carrot', price: 10.55 },
      { cake: 'angel food', price: 18.61 },
      { cake: 'black forest', price: 16.13 },
      { cake: 'red velvet', price: 25.44 },
      { cake: 'coffee', price: 8.59 },
      { cake: 'coconut', price: 14.42 },
      { cake: 'ice cream cake', price: 10.34 }
    ]

    expect(fns.getCakePrices(fns.vars.cakes, fns.vars.cakePrices)).toEqual(answer)
  })
})
