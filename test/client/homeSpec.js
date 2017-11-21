import React from 'react';
import Enzyme, { mount, shallow, unmount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from '../../app/components/Home';
import Header from '../../app/components/Header';
import NewsList from '../../app/components/NewsList';
import Topics from '../../app/components/Topics';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', function () {
  it('should have onRefreshClick function defined', function () {
    const wrapper = shallow(<Home />);
    expect(wrapper.props().onRefreshClick).toBe.defined;
  });

  it('should have onToggleClick function defined', function() {
    const wrapper = shallow(<Home />);
    expect(wrapper.props().onToggleClick).toBe.defined;
  });

  xit('should have onTopicRemoval function defined', function() {
    const wrapper = shallow(<Home />);
    expect(wrapper.props().onTopicRemoval).toBe.defined;
  });

  xit('should have onTopicSearch function defined', function() {
    const wrapper = shallow(<Home />);
    expect(wrapper.props().onTopicSearch).toBe.defined;
  });

  xit('should have an initial mostPopular state of true', function() {
    const wrapper = mount(<Home />);
    expect(wrapper.state().mostPopular).toBe(true);
  });

  xit('contains a <Header/> component', function() {
    const wrapper = mount(<Home />);
    expect(wrapper.find(Header).length).toEqual(1);
  });

  xit('contains a <NewsList/> component', function() {
    const wrapper = mount(<Home />);
    expect(wrapper.find(NewsList).length).toEqual(1);
  });

  xit('contains a <Topics/> component', function() {
    const wrapper = mount(<Home />);
    expect(wrapper.find(Topics).length).toEqual(1);
  });
});
