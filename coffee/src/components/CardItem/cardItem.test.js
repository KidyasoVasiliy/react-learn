import React from 'react';
import { CardItem } from './index';
import { shallow } from 'enzyme';

describe('Testing <CardItem />', () => {
  it('CardItem have renderer correctly', () => {
    const cardItem = shallow(<CardItem />);
    expect(cardItem).toMatchSnapshot();
  })
});
