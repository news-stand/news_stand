import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NewsItem from '../../app/components/NewsItem';

Enzyme.configure({ adapter: new Adapter() });

// creates a single newsItem classed div
describe('<NewsItem />', function() {
  const article = {
    "source": {
      "id": null,
      "name": "Salesforce.com"
    },
    "author": null,
    "title": "Data Manager - Import Data",
    "description": "Hello,<br><br>I am trying to import data to saleforce. I have done twice but when I checked the challenge. It still shows that &quot;All the contact records from the CSV file were not found in the Org.&quot;<br>The Recent Import Jobs shows both of my import&#…",
    "url": "https://success.salesforce.com/answers?id=9063A000000lCJhQAM",
    "urlToImage": "http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2017%2F1120%2Fr292170_1296x729_16%2D9.jpg",
    "publishedAt": "2017-11-15T22:33:06Z"
  };

  it('creates a newsitem component with a class of newsItem', function() {
    const wrapper = mount(<NewItem article={article} />);
    expect(wrapper.hasClass('newsItem'));
  });

  it('has an image when it should', function() {
    const wrapper = mount(<NewItem article={article} />);
    expect(wrapper.find('.articleImg').exists()).to.equal(true);
  });

  it('has a title when it should', function() {
    const wrapper = mount(<NewItem article={article} />);
    expect(wrapper.find('.atricleTitle').exists()).to.equal(true);
  });

  it('has a description when it should', function() {
    const wrapper = mount(<NewItem article={article} />);
    expect(wrapper.find('.articleDescription').exists()).to.equal(true);
  });

  it('has a source when it should', function() {
    const wrapper = mount(<NewItem article={article} />);
    expect(wrapper.find('.atricleSource').exists()).to.equal(true);
  });

  it('has a author when it should', function() {
    const wrapper = mount(<NewItem article={article} />);
    expect(wrapper.find('.atricleAuthor').exists()).to.equal(true);
  });

  it('has a url when it should', function() {
    const wrapper = mount(<NewItem article={article} />);
    expect(wrapper.find('.atricleUrl').exists()).to.equal(true);
  });
})
// renders all components to the div when passed a proper article
// creates nothing if it's passed nothing
// Doesn't render components when they are absent from the news article


