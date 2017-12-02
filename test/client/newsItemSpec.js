/* eslint-disable */

import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NewsItem from '../../app/components/NewsItem';
import FavoriteButton from '../../app/components/FavoriteButton';

Enzyme.configure({ adapter: new Adapter() });

// creates a single newsItem classed div
xdescribe('<NewsItem />', function() {
  const article = {
    source: {
      name: 'x'
    },
    author: 'x',
    title: 'x',
    description: 'x',
    url: 'https://success.salesforce.com/answers?id=9063A000000lCJhQAM',
    urlToImage: 'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2017%2F1120%2Fr292170_1296x729_16%2D9.jpg',
    publishedAt: '2017-11-15T22:33:06Z'
  };

  const url = 'https://success.salesforce.com/answers?id=9063A000000lCJhQAM';

  it('creates a newsitem component with a class of newsItem', function() {
    const wrapper = mount(<NewsItem article={article} key={url} />);
    expect(wrapper.find('.newsItem').exists()).toBe(true);
  });

  it('should have an image', function() {
    const wrapper = mount(<NewsItem article={article} key={url} />);
    expect(wrapper.find('.articleImg').exists()).toBe(true);
  });

  it('should have a favorite button', function() {
    const wrapper = mount(<NewsItem article={article} key={url} />);
    expect(wrapper.find(FavoriteButton).length).toEqual(1);
  });

  it('should have default image if no image provided', function() {
    const wrapper = mount(<NewsItem article={{
      source: {
        name: 'x'
      },
      author: 'x',
      title: 'x',
      description: 'x',
      url: 'https://success.salesforce.com/answers?id=9063A000000lCJhQAM',
      publishedAt: '2017-11-15T22:33:06Z'
    }} key={url} />);
    expect(wrapper.find('.defaultImg').exists()).toBe(true);
  });

  it('should have a title', function() {
    const wrapper = mount(<NewsItem article={article} key={url} />);
    expect(wrapper.find('.articleTitle').exists()).toBe(true);
  });

  it('should not have a title', function() {
    const wrapper = mount(<NewsItem article={{
      source: {
        name: 'x'
      },
      author: 'x',
      description: 'x',
      url: 'https://success.salesforce.com/answers?id=9063A000000lCJhQAM',
      urlToImage: 'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2017%2F1120%2Fr292170_1296x729_16%2D9.jpg',
      publishedAt: '2017-11-15T22:33:06Z'
    }} key={url} />);
    expect(wrapper.find('.articleTitle').exists()).toBe(false);
  });

  it('should have a description', function() {
    const wrapper = mount(<NewsItem article={article} key={url} />);
    expect(wrapper.find('.articleDescription').exists()).toBe(true);
  });

  it('should not have a description', function() {
    const wrapper = mount(<NewsItem article={{
      source: {
        name: 'x'
      },
      author: 'x',
      title: 'x',
      url: 'https://success.salesforce.com/answers?id=9063A000000lCJhQAM',
      urlToImage: 'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2017%2F1120%2Fr292170_1296x729_16%2D9.jpg',
      publishedAt: '2017-11-15T22:33:06Z'
    }} key={url} />);
    expect(wrapper.find('.articleDescription').exists()).toBe(false);
  });

  it('should have a source', function() {
    const wrapper = mount(<NewsItem article={article} key={url} />);
    expect(wrapper.find('.articleSource').exists()).toBe(true);
  });

  it('should not have a source', function() {
    const wrapper = mount(<NewsItem article={{
      source: {},
      author: 'x',
      title: 'x',
      description: 'x',
      url: 'https://success.salesforce.com/answers?id=9063A000000lCJhQAM',
      urlToImage: 'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2017%2F1120%2Fr292170_1296x729_16%2D9.jpg',
      publishedAt: '2017-11-15T22:33:06Z'
    }} key={url} />);
    expect(wrapper.find('.articleSource').exists()).toBe(false);
  });

  it('should have a author', function() {
    const wrapper = mount(<NewsItem article={article} key={url} />);
    expect(wrapper.find('.articleAuthor').exists()).toBe(true);
  });

  it('should not have an author', function() {
    const wrapper = mount(<NewsItem article={{
      source: {
        name: 'x'
      },
      title: 'x',
      description: 'x',
      url: 'https://success.salesforce.com/answers?id=9063A000000lCJhQAM',
      urlToImage: 'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2017%2F1120%2Fr292170_1296x729_16%2D9.jpg',
      publishedAt: '2017-11-15T22:33:06Z'
    }} key={url} />);
    expect(wrapper.find('.articleAuthor').exists()).toBe(false);
  });

  it('should not list a url', function() {
    const wrapper = mount(<NewsItem article={article} key={url} />);
    expect(wrapper.find('.articleUrl').exists()).toBe(false);
  });

});

/* eslint-enable */
