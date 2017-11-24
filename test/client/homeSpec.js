/* eslint-disable */

import React from 'react';
import Enzyme, { mount, shallow, unmount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from '../../app/components/Home';
import Header from '../../app/components/Header';
import NewsList from '../../app/components/NewsList';
import Topics from '../../app/components/Topics';
import v2DummyArticles from '../../app/dummy-data/articles_v2';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', function () {
  const dummySearch = (options, successCallback) => {
    const { articles } = v2DummyArticles;
    successCallback(articles);
  };

  it('should have onRefreshClick function defined', function () {
    const wrapper = shallow(<Home search={dummySearch} />);
    expect(wrapper.props().onRefreshClick).toBe.defined;
  });

  it('should have onToggleClick function defined', function() {
    const wrapper = shallow(<Home search={dummySearch} />);
    expect(wrapper.props().onToggleClick).toBe.defined;
  });

  it('should have onTopicRemoval function defined', function() {
    const wrapper = shallow(<Home search={dummySearch} />);
    expect(wrapper.props().onTopicRemoval).toBe.defined;
  });

  it('should have onTopicSearch function defined', function() {
    const wrapper = shallow(<Home search={dummySearch} />);
    expect(wrapper.props().onTopicSearch).toBe.defined;
  });

  it('should have onAddSource function defined', function() {
    const wrapper = shallow(<Home search={dummySearch} />);
    expect(wrapper.props().onAddSource).toBe.defined;
  });

  it('should have getArticles function defined', function() {
    const wrapper = shallow(<Home search={dummySearch} />);
    expect(wrapper.props().getArticles).toBe.defined;
  });

  it('should have renderArticles function defined', function() {
    const wrapper = shallow(<Home search={dummySearch} />);
    expect(wrapper.props().renderArticles).toBe.defined;
  });

  it('should have an initial mostPopular state of true', function() {
    const wrapper = shallow(<Home search={dummySearch} />);
    expect(wrapper.state().sortBy).toBe('popularity');
  });

  it('contains a <Header/> component', function() {
    const wrapper = shallow(<Home search={dummySearch} />);
    expect(wrapper.find(Header).length).toEqual(1);
  });

  it('contains a <NewsList/> component', function() {
    const wrapper = shallow(<Home search={dummySearch} />);
    expect(wrapper.find(NewsList).length).toEqual(1);
  });

  it('contains a <Topics/> component', function() {
    const wrapper = shallow(<Home search={dummySearch} />);
    expect(wrapper.find(Topics).length).toEqual(1);
  });
});

/* eslint-enable */
