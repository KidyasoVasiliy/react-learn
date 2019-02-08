import React from 'react';
import { Spinner } from './index';
import { shallow } from 'enzyme';

describe('Testing <Spinner />', () => {
  it('Spinner have renderer correctly', () => {
    const spinner = shallow(<Spinner />);
    expect(spinner).toMatchSnapshot();
  })
});
