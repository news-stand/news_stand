/* eslint-disable */

import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SourceItem from '../../app/components/SourceItem';

Enzyme.configure({ adapter: new Adapter() });

describe('<SourceItem />', function () {

  it('renders passed in source', () => {
    let wrapper = shallow(<SourceItem source={'CNN'} />);
    expect(wrapper.find('p').text()).toEqual('CNN');
  })

  it('renders only one source', () => {
    let wrapper = shallow(<SourceItem source={'CNN'} />);
    expect(wrapper.find('p').length).toEqual(1);
  })

  it('has a div with className selectedSources', () => {
    let wrapper = shallow(<SourceItem source={'CNN'} />);
    expect(wrapper.find('.selectedSources').length).toEqual(1);
  })
});

/* eslint-enable */
