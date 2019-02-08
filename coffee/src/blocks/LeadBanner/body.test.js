import React from 'react';
import { LeadBanner } from './index';
import { shallow } from 'enzyme';

describe('Testing <LeadBanner />', () => {
  it('LeadBanner have renderer correctly', () => {
    const leadBanner = shallow(<LeadBanner headings={['h1', 'h2']}/>);
    expect(leadBanner).toMatchSnapshot();
  })
});
