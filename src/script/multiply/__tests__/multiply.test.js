import multiply from '../multiply';
console.log('multiply: ', multiply);

describe('multiply test', () => {
  
  it('Adds 2 numbers correctly', () => {
    expect(multiply(3, 3)).toBe(9)
    expect(multiply(2, 3)).toBe(6)
    expect(multiply(4, 4)).toBe(16)
    expect(multiply(4, 7)).toBe(28)
    expect(multiply(7, 8)).toBe(56)
  })
  
});