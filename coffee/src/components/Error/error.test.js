import React from 'react';
import { Error } from './index';
import { shallow } from 'enzyme';

describe('Testing <Error />', () => {
  it('Error have renderer correctly', () => {
    const error = shallow(<Error />);
    expect(error).toMatchSnapshot();
  })
});
