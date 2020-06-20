const fns = require('../functions-intro.js')

describe('functions intro:', () => {
  it('should return a string', () => {
    expect(fns.getString()).toBe('String Bean')
  })

  it('should return a list ', () => {
    expect(Array.isArray(fns.getList())).toBe(true)
  })

  it('should greet given a name', () => {
    expect(fns.greet('world')).toBe('Hello, world.')
    expect(fns.greet('Paul')).toBe('Hello, Paul.')
  })

  it('should add two numbers', () => {
    expect(fns.add(1, 2)).toBe(3)
    expect(fns.add(10, 2)).toBe(12)
  })

  it('should concatenate two arrays or strings', () => {
    expect(fns.concatenate([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
    expect(fns.concatenate('Hello,', ' world')).toBe('Hello, world')
  })

  it('should convert string to number', () => {
    expect(fns.stringToNumber('5')).toBe(5)
  })

  it('should return item at index for string or list', () => {
    expect(fns.atIndex(['cat', 'dog'], 1)).toBe('dog')
    expect(fns.atIndex('cat', 1)).toBe('a')
  })

  it('should tell you if number is even', () => {
    expect(fns.isEven(2)).toBe(true)
  })

  it('should make a person object', () => {
    expect(fns.createPerson()).toEqual({ name: 'John Doe', age: 42 })
    expect(fns.createPerson('Harry', 28)).toEqual({ name: 'Harry', age: 28 })
  })
})


