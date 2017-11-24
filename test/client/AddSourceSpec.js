/* eslint-disable */

import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddSource from '../../app/components/AddSource';
import Autosuggest from "react-autosuggest";

Enzyme.configure({ adapter: new Adapter() });

describe('<AddSource />', function () {
  const dummyFn = () => {
    console.log('dummy function');
  };

  const addSource = (<AddSource onAddSource={dummyFn} />);

  it('should have handleSuggestionsFetchRequested function defined', function () {
    const wrapper = shallow(addSource);
    expect(wrapper.props().handleSuggestionsFetchRequested).toBe.defined;
  });

  it('should have handleSuggestionsClearRequested function defined', function () {
    const wrapper = shallow(addSource);
    expect(wrapper.props().handleSuggestionsClearRequested).toBe.defined;
  });

  it('should have handleChange function defined', function () {
    const wrapper = shallow(addSource);
    expect(wrapper.props().handleChange).toBe.defined;
  });

  it('contains an <Autosuggest /> component', function () {
    const wrapper = mount(addSource);
    expect(wrapper.find(Autosuggest).length).toEqual(1);
  });

  it('contains a div with class addSourceContainer', function () {
    const wrapper = mount(addSource);
    expect(wrapper.find('.addSourceContainer').length).toEqual(1);
  });
});

/* eslint-enable */
