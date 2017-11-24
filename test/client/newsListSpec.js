/* eslint-disable */

import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NewsList from '../../app/components/NewsList';
import NewsItem from '../../app/components/NewsItem';

Enzyme.configure({ adapter: new Adapter() });

// should render a newsItem when it is passed one article
// should render 0 newsItems when passed 0 articles
// should dynamically render newsItems (should render 2 items when passed 2 artcles)

xdescribe('<NewsList />', function() {
  it('contains a <NewsItem /> component', function() {
    const article = [{
      "source": {
        "id": null,
        "name": "Salesforce.com"
      },
      "author": null,
      "title": "Data Manager - Import Data",
      "description": "Hello,<br><br>I am trying to import data to saleforce. I have done twice but when I checked the challenge. It still shows that &quot;All the contact records from the CSV file were not found in the Org.&quot;<br>The Recent Import Jobs shows both of my import&#…",
      "url": "https://success.salesforce.com/answers?id=9063A000000lCJhQAM",
      "urlToImage": null,
      "publishedAt": "2017-11-15T22:33:06Z"
    }];
    const wrapper = shallow(<NewsList newsArticles={article} /> )
    expect(wrapper.find(NewsItem).length).toEqual(1);
  })

  it('doesn\'t render <NewsItem /> component if no topics are passed in', function() {
    const wrapper = shallow(<NewsList />);
    expect(wrapper.find(NewsItem).length).toEqual(0);
  })

  it('should dynamically render <NewsItem /> components based on the number of articles passed in', function() {
    const articles = [{
        "source": {
          "id": null,
          "name": "Salesforce.com"
        },
        "author": null,
        "title": "Data Manager - Import Data",
        "description": "Hello,<br><br>I am trying to import data to saleforce. I have done twice but when I checked the challenge. It still shows that &quot;All the contact records from the CSV file were not found in the Org.&quot;<br>The Recent Import Jobs shows both of my import&#…",
        "url": "https://success.salesforce.com/answers?id=9063A000000lCJhQAM",
        "urlToImage": null,
        "publishedAt": "2017-11-15T22:33:06Z"
      }, 
      {
      "source": {
        "id": null,
        "name": "Salesforce.com"
      },
      "author": null,
      "title": "Data Manager - Import Data",
      "description": "Hello,<br><br>I am trying to import data to saleforce. I have done twice but when I checked the challenge. It still shows that &quot;All the contact records from the CSV file were not found in the Org.&quot;<br>The Recent Import Jobs shows both of my import&#…",
      "url": "https://success.salesforce.com/answers?id=9063A000000lCJhQAM",
      "urlToImage": null,
      "publishedAt": "2017-11-15T22:33:06Z"
      }
    ];
    const wrapper = shallow(<NewsList newsArticles={articles} />);
    expect(wrapper.find(NewsItem).length).toEqual(2);
  })
})

/* eslint-enable */
