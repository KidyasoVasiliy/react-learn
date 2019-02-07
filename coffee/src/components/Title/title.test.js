import React from 'react';
import { Title } from './index';
import { shallow } from 'enzyme';

describe('Testing <Title />', () => {
  it('Title have renderer correctly', () => {
    const title = shallow(<Title />);
    expect(title).toMatchSnapshot();
  })
});
