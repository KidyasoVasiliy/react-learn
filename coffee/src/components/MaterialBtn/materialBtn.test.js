import React from 'react'
import { MaterialBtn } from './index';
import { shallow } from 'enzyme';

describe('Testing <MaterialBtn />', () => {
  it('MaterialBtn have renderer correctly', () => {
    const materialBtn = shallow(<MaterialBtn />);
    expect(materialBtn).toMatchSnapshot();
  })
});
