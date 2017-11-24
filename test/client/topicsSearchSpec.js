/* eslint-disable */

import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TopicsSearch from '../../app/components/TopicsSearch';

Enzyme.configure({ adapter: new Adapter() });

describe('<TopicsSearch />', function () {
  const dummyFn = () => {
    console.log('dummy function');
  };

  const topicsSearch = (
    <TopicsSearch
      onTopicSearch={dummyFn}
    />
  );

  it('contains an onSearch function', function() {
    const wrapper = shallow(topicsSearch);
    expect(wrapper.props().onSearch).toBe.defined;
  });

  it('contains a handleBarChange function', function() {
    const wrapper = shallow(topicsSearch);
    expect(wrapper.props().handleBarChange).toBe.defined;
  });
});

/* eslint-enable */
