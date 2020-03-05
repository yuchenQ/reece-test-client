import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import PayslipProps from '../../propTypes/PayslipProps';
import mapFieldToWord from './mapFieldToWord';

const StyledPayslip = styled.div`
  display: grid;
  justify-content: center;
`;

const Title = styled.p`
  text-align: center;
  font-size: large;
`;

const columns = [
  {
    dataIndex: 'field',
    key: 'field',
    width: 200,
  },
  {
    dataIndex: 'result',
    key: 'result',
    align: 'right',
    width: 200,
  },
];

function Payslip({ payslip }) {
  const { firstName, lastName, ...rest } = payslip;

  const data = [...Object.keys(rest)].reduce((prev, key, index) => {
    return [
      ...prev,
      {
        key: index,
        field: mapFieldToWord(key),
        result: rest[key],
      },
    ];
  }, []);

  return (
    <StyledPayslip>
      <Title>
        The payslip for:&nbsp;
        <strong>
          {firstName}
          &nbsp;
          {lastName}
        </strong>
      </Title>
      <Table
        showHeader={false}
        columns={columns}
        dataSource={data}
        footer={() => 'Unit used in currency: Australian Dollars'}
        pagination={false}
      />
    </StyledPayslip>
  );
}

Payslip.propTypes = {
  payslip: PropTypes.shape(PayslipProps).isRequired,
};

export default React.memo(Payslip);
