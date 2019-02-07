import React from 'react';
import { Divider } from './index';
import { shallow } from 'enzyme';

describe('Testing <Divider />', () => {
  it('Divider have renderer correctly', () => {
    const divider = shallow(<Divider />);
    expect(divider).toMatchSnapshot();
  })
});
