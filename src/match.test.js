describe('match regular expression', () => {
  it('basic', () => {
    expect('developer').toMatch(/\w+/)

    // expressão que verifica o formato e quantidade de numeros
    expect('(55)99456-2125').toMatch(/^\(\d{2}\)\d{5}-\d{4}$/)
  })
})