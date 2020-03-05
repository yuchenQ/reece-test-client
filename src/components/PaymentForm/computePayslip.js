import NP from 'number-precision';

const PAYMENT_FREQUENCY = 'monthly';

/**
 * @param {void}
 * @return {Map}
 */
function getTaxRates() {
  const map = new Map();

  map.set({ min: 0, max: 18200 }, { rate: 0, baseAmount: 0, min: 0 });
  map.set(
    { min: 18200, max: 37000 },
    { rate: 0.19, baseAmount: 0, min: 18200 },
  );
  map.set(
    { min: 37000, max: 90000 },
    { rate: 0.325, baseAmount: 3572, min: 37000 },
  );
  map.set(
    { min: 90000, max: 180000 },
    { rate: 0.37, baseAmount: 20797, min: 90000 },
  );
  map.set(
    { min: 180000, max: Infinity },
    { rate: 0.45, baseAmount: 54097, min: 180000 },
  );

  return map;
}

/**
 * @param {Object} paymentInfo
 * @return {Object}
 */
export default function computePayslip({
  firstName,
  lastName,
  annualIncome,
  superRate,
  payPeriod,
}) {
  const taxRatesMap = getTaxRates();

  const key = [...taxRatesMap.keys()].find(({ min, max }) => {
    return annualIncome > min && annualIncome <= max;
  });

  const { rate: taxRate, baseAmount, min: miniAmount } = taxRatesMap.get(key);

  const incomeTax = NP.round(
    NP.divide(baseAmount + NP.times(annualIncome - miniAmount, taxRate), 12),
    0,
  );

  const grossIncome = NP.round(annualIncome / 12, 0);

  const netIncome = NP.round(NP.minus(grossIncome, incomeTax), 0);

  const superAmount = NP.round(
    NP.times(grossIncome, NP.times(superRate, 0.01)),
    0,
  );

  const pay = NP.round(NP.minus(netIncome, superAmount), 0);

  return {
    firstName,
    lastName,
    payPeriod,
    payFrequency: PAYMENT_FREQUENCY,
    annualIncome,
    grossIncome,
    incomeTax,
    netIncome,
    superAmount,
    pay,
  };
}
