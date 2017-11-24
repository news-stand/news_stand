/* eslint-disable */

import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SelectedSources from '../../app/components/SelectedSources';
import SourceItem from '../../app/components/SourceItem';

Enzyme.configure({ adapter: new Adapter() });

describe('<SelectedSources />', function () {
  it('contains a <SourceItem /> component for every source passed in', function () {
    const sources = ['CNN', 'espn', 'bbc']
    const wrapper = shallow(<SelectedSources selectedSources={sources} />);
    expect(wrapper.find(SourceItem).length).toEqual(3);
  });
});

/* eslint-enable */
