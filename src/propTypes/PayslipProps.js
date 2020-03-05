import PropTypes from 'prop-types';

const PayslipProps = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  payPeriod: PropTypes.string,
  payFrequency: PropTypes.string,
  annualIncome: PropTypes.number,
  grossIncome: PropTypes.number,
  incomeTax: PropTypes.number,
  netIncome: PropTypes.number,
  superAmount: PropTypes.number,
  pay: PropTypes.number,
};

export default PayslipProps;
