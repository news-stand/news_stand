/* eslint-disable */

import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SourceItem from '../../app/components/SourceItem';

Enzyme.configure({ adapter: new Adapter() });

describe('<SourceItem />', function () {

  const dummyFn = () => {
    console.log('dummy function');
  }

  const source = (
    <SourceItem
      key="cnn"
      source="CNN"
      index={0}
      onRemoval={dummyFn}
    />);

  it('renders passed in source', () => {
    let wrapper = shallow(source);
    expect(wrapper.find('Chip').text()).toEqual('CNN');
  })

  it('renders only one source', () => {
    let wrapper = shallow(source);
    expect(wrapper.find('div').length).toEqual(1);
  })

  it('has a div with className selectedSources', () => {
    let wrapper = shallow(source);
    expect(wrapper.find('.selectedSources').length).toEqual(1);
  })
});

/* eslint-enable */
