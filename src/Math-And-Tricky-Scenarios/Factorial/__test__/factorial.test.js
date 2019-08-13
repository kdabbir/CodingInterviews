import factorial from '../factorial';

describe('factorial', () => {
  it('should calculate factorial', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(2);
    expect(factorial(5)).toBe(720);
  });
});
