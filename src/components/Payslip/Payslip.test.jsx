import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Payslip from './Payslip';
import mapFieldToWord from './mapFieldToWord';

const payslip = {
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

const { firstName, lastName, ...rest } = payslip;

describe('Payslip', () => {
  let getByTestId;
  let getByText;

  beforeEach(() => {
    ({ getByTestId, getByText } = render(<Payslip payslip={payslip} />));
  });

  afterEach(cleanup);

  test('should show payslip title', () => {
    expect(getByTestId('payslip-title')).toHaveTextContent(
      `The payslip for: ${firstName} ${lastName}`,
    );
  });

  test('should render payslip content', () => {
    [...Object.keys(rest)].forEach(key => {
      const [field, content] = [
        getByText(mapFieldToWord(key)),
        getByText(rest[key].toString()),
      ];

      expect(field).toBeInTheDocument();
      expect(content).toHaveTextContent(rest[key].toString());
    });
  });
});
