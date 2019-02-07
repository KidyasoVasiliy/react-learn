import React from 'react'
import { Menu } from './index';
import { shallow } from 'enzyme';

describe('Testing <Menu />', () => {
  it('Menu have renderer correctly', () => {
    const menu = shallow(<Menu />);
    expect(menu).toMatchSnapshot();
  })
});
