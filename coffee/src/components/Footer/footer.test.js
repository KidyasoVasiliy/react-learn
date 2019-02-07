import React from 'react'
import { Footer } from './index';
import { shallow } from 'enzyme';

describe('Testing <Footer />', () => {
  it('Footer have renderer correctly', () => {
    const footer = shallow(<Footer />);
    expect(footer).toMatchSnapshot();
  })
});