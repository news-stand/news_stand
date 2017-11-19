import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TopicsList from '../../app/components/TopicsList';
import TopicsListItem from '../../app/components/TopicsListItem';

Enzyme.configure({ adapter: new Adapter() });

describe('<TopicsList />', function () {
  it('contains a <TopicsListItem /> component', function() {
    const topics = ['politics'];
    const wrapper = shallow(<TopicsList topics={topics} />);
    expect(wrapper.find(TopicsListItem).length).toEqual(1);
  });

  it('doesn\'t render <TopicsListItem /> component if no topics are passed in', function() {
    const wrapper = shallow(<TopicsList />);
    expect(wrapper.find(TopicsListItem).length).toEqual(0);
  });

  it('contains a <TopicsListItem /> component that dynamically renders topics', function() {
    const topics = ['politics', 'art'];
    const wrapper = shallow(<TopicsList topics={topics} />);
    expect(wrapper.find(TopicsListItem).length).toEqual(2);
  });
});
