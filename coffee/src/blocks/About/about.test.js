import React from 'react';
import { About } from './index';
import { shallow } from 'enzyme';

describe('Testing <About />', () => {
  it('About have renderer correctly', () => {
    const about = shallow(<About paragraphs={['lorem', 'lorem2']}/>);
    expect(about).toMatchSnapshot();
  })

  it('About have renderer correctly', () => {
    const about = shallow(<About info={{name: 'lorem'}}/>);
    expect(about).toMatchSnapshot();
  })
});
