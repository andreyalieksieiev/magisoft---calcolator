import substract from '../substract';

describe('substract test', () => {
  
  it('Adds 2 numbers correctly', () => {
    expect(substract(2, 1)).toBe(1)
    expect(substract(3, 1)).toBe(2)
    expect(substract(4, 2)).toBe(2)
    expect(substract(5, 2)).toBe(3)
    expect(substract(7, 3)).toBe(4)
  }) 
});