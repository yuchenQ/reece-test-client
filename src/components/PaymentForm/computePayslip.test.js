import computePayslip from './computePayslip';

const input = {
  firstName: 'Yuchen',
  lastName: 'Qiao',
  superRate: 10,
  payPeriod: '2020-03',
  annualIncome: 100000,
};

const output = {
  annualIncome: 100000,
  firstName: 'Yuchen',
  grossIncome: 8333,
  incomeTax: 2041,
  lastName: 'Qiao',
  netIncome: 6292,
  pay: 5459,
  payFrequency: 'monthly',
  payPeriod: '2020-03',
  superAmount: 833,
};

describe('computePayslip', () => {
  test('should compute the payslip', () => {
    const result = computePayslip(input);

    [...Object.keys(output)].forEach(key => {
      const value = result[key];
      const expectedValue = output[key];

      expect(value).toBe(expectedValue);
    });
  });
});
