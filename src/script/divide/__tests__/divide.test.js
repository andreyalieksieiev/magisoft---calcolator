import divide from '../divide';

describe('divide test', () => {
  
  it('divides 2 numbers correctly', () => {
    expect(divide(3, 3)).toBe(1)
    expect(divide(6, 3)).toBe(2)
    expect(divide(9, 3)).toBe(3)
    expect(divide(21, 7)).toBe(3)
    expect(divide(56, 8)).toBe(7)
  });
  
  //   it('throws exeption if divided by 0', () => {
  //     expect(divide(1, 0).toBe())
  //   });

  //   it('divides with precision 0.000001', () => {

  //     expect(divide(1.000000001, 100000).toBe(0.00001))
  //   });

    
  //   it('doest crash with wrong arguments', () => {

  //     expect(divide(null, 'test').toBe());
      
  //   });

});