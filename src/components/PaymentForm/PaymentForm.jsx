import React from 'react';
import { Form, Input, Button, InputNumber, DatePicker, message } from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import { capitalize } from '../../helpers';
import { createNewPayslips } from '../../apis';
import computePayslip from './computePayslip';
import { ALREADY_PAID } from '../../errors';

const { Item } = Form;
const { MonthPicker } = DatePicker;

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 6 },
};

const tailLayout = {
  wrapperCol: { offset: 10, span: 16 },
};

export default function PaymentForm({ setPayslip }) {
  const [form] = Form.useForm();

  const onFinish = async fields => {
    try {
      const values = {
        ...fields,
        firstName: capitalize(fields.firstName),
        lastName: capitalize(fields.lastName),
        payPeriod: fields.payPeriod.format('YYYY-MM'),
      };

      const payslipInfo = computePayslip(values);

      await createNewPayslips(payslipInfo);

      message.success('Successfully generated a new payslip!');
      setPayslip(payslipInfo);
    } catch (error) {
      if (error) {
        const { data } = error;

        if (data.type && data.type === ALREADY_PAID) {
          message.error(data.message);

          return;
        }
      }

      message.error('Unknown error occurs!');
    }
  };

  const onReset = () => {
    form.resetFields();

    setPayslip();
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Item
        name="firstName"
        label="First Name"
        rules={[
          { required: true, message: 'Please input the first name' },
          () => ({
            validator(rule, value) {
              if (value && !/^[a-zA-Z]+$/.test(value)) {
                return Promise.reject('First Name should be a word');
              }

              return Promise.resolve();
            },
          }),
        ]}
        hasFeedback
      >
        <Input />
      </Item>
      <Item
        name="lastName"
        label="Last Name"
        rules={[
          { required: true, message: 'Please input the last name' },
          () => ({
            validator(rule, value) {
              if (value && !/^[a-zA-Z]+$/.test(value)) {
                return Promise.reject('Last Name should be a word');
              }

              return Promise.resolve();
            },
          }),
        ]}
        hasFeedback
      >
        <Input />
      </Item>
      <Item
        name="annualIncome"
        label="Annual Salary"
        rules={[
          { required: true, message: 'Please input the annual salary' },
          () => ({
            validator(rule, value) {
              if (value && !/^\d+$/.test(value)) {
                return Promise.reject('Annual salary should be an integer');
              }

              return Promise.resolve();
            },
          }),
        ]}
        hasFeedback
      >
        <InputNumber
          max={1000000}
          formatter={value => {
            return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          }}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
        />
      </Item>
      <Item
        name="superRate"
        label="Super Rate"
        rules={[
          { required: true, message: 'Please input the super rate' },
          () => ({
            validator(rule, value) {
              if (value && !/^\d+$/.test(value)) {
                return Promise.reject('Super rate should be an integer');
              }

              if (!value || value <= 50) {
                return Promise.resolve();
              }

              return Promise.reject('Super rate must less than 50%');
            },
          }),
        ]}
        hasFeedback
        validateFirst
      >
        <InputNumber
          min={1}
          max={50}
          formatter={value => `${value}%`}
          parser={value => value.replace('%', '')}
        />
      </Item>
      <Item
        name="payPeriod"
        label="Select A Month"
        rules={[
          { type: 'object', required: true, message: 'Please select a month' },
        ]}
        hasFeedback
        validateFirst
      >
        <MonthPicker
          disabledDate={currentDate => currentDate && currentDate > moment()}
        />
      </Item>
      <Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Generate
        </Button>
        <Button type="link" htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Item>
    </Form>
  );
}

PaymentForm.propTypes = {
  setPayslip: PropTypes.func.isRequired,
};
