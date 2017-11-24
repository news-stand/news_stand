/* eslint-disable */

import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Topics from '../../app/components/Topics';
import TopicsList from '../../app/components/TopicsList';
import TopicsSearch from '../../app/components/TopicsSearch';

Enzyme.configure({ adapter: new Adapter() });

describe('<Topics />', function () {
  const dummyFn = () => {
    console.log('dummy function');
  };

  const topics = (
    <Topics
      className="topics"
      topics={['art', 'music']}
      onTopicSearch={dummyFn}
      onRemoval={dummyFn}
    />
  );

  it('contains a <TopicsList /> component', function() {
    const wrapper = shallow(topics);
    expect(wrapper.find(TopicsList).length).toEqual(1);
  });

  it('contains a <TopicsSearch /> component', function() {
    const wrapper = shallow(topics);
    expect(wrapper.find(TopicsSearch).length).toEqual(1);
  });
});

/* eslint-enable */
