import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SourceItem from '../../app/components/SourceItem';

Enzyme.configure({ adapter: new Adapter() });

describe('<SourceItem />', function () {
  let wrapper, source;

  beforeEach(function () {
    wrapper = shallow(<SourceItem source={'CNN'} />);
    source = 'CNN';
  });

  it('renders passed in source', () => {
    expect(wrapper).find('p').text().toEqual('CNN');
  })

  it('has a div with className selectedSources', () => {
    expect(wrapper).find('.selectedSources').length.toEqual(1);
  })
});