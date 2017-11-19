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
