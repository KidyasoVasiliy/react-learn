import React from 'react'
import { Paragraph } from './index';
import { shallow } from 'enzyme';

describe('Testing <Paragraph />', () => {
  it('Paragraph have renderer correctly', () => {
    const paragraph = shallow(<Paragraph />);
    expect(paragraph).toMatchSnapshot();
  })
});
