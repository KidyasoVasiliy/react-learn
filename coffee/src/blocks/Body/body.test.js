import React from 'react';
import { Body } from './index';
import { shallow } from 'enzyme';

describe('Testing <Body />', () => {
  it('Body have renderer correctly', () => {
    const body = shallow(<Body />);
    expect(body).toMatchSnapshot();
  })
});
