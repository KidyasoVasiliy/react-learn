import React from 'react';
import { Heading } from './index';
import { shallow } from 'enzyme';

describe('Testing <Heading />', () => {
  it('Heading have renderer correctly', () => {
    const heading = shallow(<Heading />);
    expect(heading).toMatchSnapshot();
  })
});
