const users = ['Wellington', 'Pinho']

describe('Match arrays', () => {
  it('verify array elements', () => {
    expect(users).toContainEqual('Wellington')
    expect(users).toContain(users[1])
  })
})