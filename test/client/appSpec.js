import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../../app/components/App';
import Header from '../../app/components/Header';
import NewsList from '../../app/components/NewsList';
import Topics from '../../app/components/Topics';
import TopicsList from '../../app/components/TopicsList';
import TopicsListItem from '../../app/components/TopicsListItem';
import TopicsSearch from '../../app/components/TopicsSearch';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', function () {
  it('should have onReferchClick function defined', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.props().onRefreshClick).toBe.defined;
  });

  it('should have onToggleClick function defined', function() {
    const wrapper = shallow(<App />);
    expect(wrapper.props().onToggleClick).toBe.defined;
  });

  it('should have onTopicRemoval function defined', function() {
    const wrapper = shallow(<App />);
    expect(wrapper.props().onTopicRemoval).toBe.defined;
  });

  it('should have onTopicSearch function defined', function() {
    const wrapper = shallow(<App />);
    expect(wrapper.props().onTopicSearch).toBe.defined;
  });

  it('should have an initial mostPopular state of true', function() {
    const wrapper = mount(<App />);
    expect(wrapper.state().mostPopular).toBe(true);
  });

  it('contains a <Header/> component', function() {
    const wrapper = mount(<App />);
    expect(wrapper.find(Header).length).toEqual(1);
  });

  it('contains a <NewsList/> component', function() {
    const wrapper = mount(<App />);
    expect(wrapper.find(NewsList).length).toEqual(1);
  });

  it('contains a <Topics/> component', function() {
    const wrapper = mount(<App />);
    expect(wrapper.find(Topics).length).toEqual(1);
  });
});

describe('<Topics />', function () {
  it('contains a <TopicsList /> component', function() {
    const wrapper = mount(<Topics />);
    expect(wrapper.find(TopicsList).length).toEqual(1);
  });

  it('contains a <TopicsSearch /> component', function() {
    const wrapper = mount(<Topics />);
    expect(wrapper.find(TopicsSearch).length).toEqual(1);
  });
});

describe('<TopicsList />', function () {
  it('contains a <TopicsListItem /> component', function() {
    const topics = ['politics'];
    const wrapper = mount(<TopicsList topics={topics} />);
    expect(wrapper.find(TopicsListItem).length).toEqual(1);
  });

  it('doesn\'t render <TopicsListItem /> component if no topics are passed in', function() {
    const wrapper = mount(<TopicsList />);
    expect(wrapper.find(TopicsListItem).length).toEqual(0);
  });

  it('contains a <TopicsListItem /> component that dynamically renders topics', function() {
    const topics = ['politics', 'art'];
    const wrapper = mount(<TopicsList topics={topics} />);
    expect(wrapper.find(TopicsListItem).length).toEqual(2);
  });
});

describe('<TopicsSearch />', function () {
  it('contains an onSearch function', function() {
    const wrapper = mount(<TopicsSearch />);
    expect(wrapper.props().onSearch).toBe.defined;
  });

  it('contains an onSearch function', function() {
    const wrapper = mount(<TopicsSearch />);
    expect(wrapper.props().handleBarChange).toBe.defined;
  });
});

