/* eslint-disable */

import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TopicsSearch from '../../app/components/TopicsSearch';

Enzyme.configure({ adapter: new Adapter() });

xdescribe('<TopicsSearch />', function () {
  it('contains an onSearch function', function() {
    const wrapper = shallow(<TopicsSearch />);
    expect(wrapper.props().onSearch).toBe.defined;
  });

  it('contains an onSearch function', function() {
    const wrapper = shallow(<TopicsSearch />);
    expect(wrapper.props().handleBarChange).toBe.defined;
  });
});

/* eslint-enable */
