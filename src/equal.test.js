describe('equality', () => {
  it('basic usage - to equal', () => {
    expect(1+1).toEqual(2)
    expect(1+1).not.toEqual(3)
    expect('developer').toEqual('developer')
    expect({ name: 'developer' }).toEqual({ name: 'developer' })
  })

  it('basic usage - toBe', () => {
    expect(1+1).toBe(2)
    expect('developer').toBe('developer')

    // toBe compara valor e endereço na memória por isso gera erro
    // expect({ name: 'developer' }).toBe({ name: 'developer' })
  })
})