import React, { useState } from 'react';
import styled from 'styled-components';
import PaymentForm from '../PaymentForm/PaymentForm';
import Payslip from '../Payslip';
import Page from '../Page';

const Header = styled.h1`
  text-align: center;
`;

export default function App() {
  const [payslip, setPayslip] = useState();

  return (
    <Page header={<Header>Employee Information</Header>}>
      <PaymentForm setPayslip={setPayslip} />
      {payslip && <Payslip payslip={payslip} />}
    </Page>
  );
}
