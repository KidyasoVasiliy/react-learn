import React from 'react';
import { Actions } from './index';
import { shallow } from 'enzyme';

describe('Testing <Actions />', () => {
  it('Actions have renderer correctly', () => {
    const actions = shallow(<Actions fields={['a', 'b', 'c' ]} />);
    expect(actions).toMatchSnapshot();
  })
});
