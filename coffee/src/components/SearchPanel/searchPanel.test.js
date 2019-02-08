import React from 'react';
import { SearchPanel } from './index';
import { shallow } from 'enzyme';

describe('Testing <SearchPanel />', () => {
  it('SearchPanel have renderer correctly', () => {
    const searchPanel = shallow(<SearchPanel />);
    expect(searchPanel).toMatchSnapshot();
  })
});
