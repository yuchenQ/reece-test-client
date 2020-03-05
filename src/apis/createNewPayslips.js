import { getAPIRequest } from '../helpers';

export default function createNewPayslips({
  firstName,
  lastName,
  payPeriod,
  payFrequency,
  annualIncome,
  grossIncome,
  incomeTax,
  netIncome,
  superAmount,
  pay,
}) {
  return getAPIRequest().post('/payslip', {
    firstName,
    lastName,
    payPeriod,
    payFrequency,
    annualIncome,
    grossIncome,
    incomeTax,
    netIncome,
    superAmount,
    pay,
  });
}
