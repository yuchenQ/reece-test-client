import capitalize from './capitalize';

describe('capitalize', () => {
  test('should capitalize the first letter', () => {
    const result = capitalize('aBc');

    expect(result).toBe('Abc');
  });

  test('should not change other letter to lower case', () => {
    const result = capitalize('aBC', false);

    expect(result).toBe('ABC');
  });
});
