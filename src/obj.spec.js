const User = {
  name: 'Wellingotn',
  age: 42
}

describe('Match arrays', () => {
  it('verify array elements', () => {
    //verifica se o atributo do objeto existe
    expect(User.name).toBeDefined()
    expect(User.email).not.toBeDefined()
  })
})