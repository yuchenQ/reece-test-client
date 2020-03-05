const DICTIONARY = {
  firstName: 'First Name',
  lastName: 'Last Name',
  payPeriod: 'Pay Period',
  payFrequency: 'Pay Frequency',
  annualIncome: 'Annual Income',
  grossIncome: 'Gross Income',
  incomeTax: 'Income Tax',
  netIncome: 'Net Income',
  superAmount: 'Super Amount',
  pay: 'Pay',
};

/**
 * @param {string} field
 * @return {string}
 */
export default function mapFieldToWord(field) {
  if (!field || typeof field !== 'string') {
    throw new Error(
      'Error occurs in mapFieldToWord(): Invalid parameter: field',
    );
  }

  return DICTIONARY[field] || 'unknown';
}
