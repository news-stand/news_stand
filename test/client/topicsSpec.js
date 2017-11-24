/* eslint-disable */

import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Topics from '../../app/components/Topics';
import TopicsList from '../../app/components/TopicsList';
import TopicsSearch from '../../app/components/TopicsSearch';

Enzyme.configure({ adapter: new Adapter() });

xdescribe('<Topics />', function () {
  it('contains a <TopicsList /> component', function() {
    const wrapper = shallow(<Topics />);
    expect(wrapper.find(TopicsList).length).toEqual(1);
  });

  it('contains a <TopicsSearch /> component', function() {
    const wrapper = shallow(<Topics />);
    expect(wrapper.find(TopicsSearch).length).toEqual(1);
  });
});

/* eslint-enable */
