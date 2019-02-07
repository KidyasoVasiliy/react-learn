import React from 'react';

import { BeansLogo } from './index';
import { shallow } from 'enzyme';

describe('Testing <BeansLogo />', () => {
  it('BeansLogo have renderer correctly', () => {
    const beansLogo = shallow(<BeansLogo />);
    expect(beansLogo).toMatchSnapshot();
  })
});
