import React from 'react';
import { Goods } from './index';
import { shallow } from 'enzyme';

describe('Testing <Goods />', () => {
  it('Goods have renderer correctly', () => {
    const goods = shallow(<Goods list={[{name: 'random'}]}/>);
    expect(goods).toMatchSnapshot();
  })
});
