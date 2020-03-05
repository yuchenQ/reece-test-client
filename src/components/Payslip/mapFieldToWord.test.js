import mapFieldToWord, { DICTIONARY } from './mapFieldToWord';

describe('mapFieldToWord', () => {
  test('should throw error if invalid input', () => {
    expect(() => mapFieldToWord()).toThrowError(
      new Error('Error occurs in mapFieldToWord(): Invalid parameter: field'),
    );
  });

  test('should format field base on word in dictionary', () => {
    const fields = [...Object.keys(DICTIONARY)];

    fields.forEach(field => {
      const result = mapFieldToWord(field);

      expect(result).toBe(DICTIONARY[field]);
    });
  });

  test('should show unknown if cannot find in dictionary', () => {
    const random = 'random';

    expect(mapFieldToWord(random)).toBe('unknown');
  });
});
