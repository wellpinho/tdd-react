const add = require('./calc')

describe('Calculator', () => {
  it('add two numbers', () => {
    expect(add(5, 5)).toEqual(10)
  })
})