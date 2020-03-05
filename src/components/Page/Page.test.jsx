/** @format */

import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Page from './Page';

describe('', () => {
  let getByTestId;

  beforeEach(() => {
    ({getByTestId} = render(
      <Page header={<div>header</div>}>
        <div>body</div>
      </Page>,
    ));
  });

  afterEach(cleanup);

  test('should show header', () => {
    expect(getByTestId('header')).toHaveTextContent('header');
  });

  test('should show body', () => {
    expect(getByTestId('body')).toHaveTextContent('body');
  });
});
