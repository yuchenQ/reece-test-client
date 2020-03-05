import { getAPIRequest } from '../helpers';

export default function getSinglePayslip({ firstName, lastName, payPeriod }) {
  return getAPIRequest().get('/payslip', {
    params: {
      firstName,
      lastName,
      payPeriod,
    },
  });
}
