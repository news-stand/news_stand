import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddSource from '../../app/components/SelectedSources';
import SourceItem from '../../app/components/SourceItem';

Enzyme.configure({ adapter: new Adapter() });

describe('<SelectedSources />', function () {
  it('contains a <SourceItem /> component', function () {
    const wrapper = mount(<AddSource />);
    expect(wrapper.find(SourceItem).length).toEqual(1);
  });
});

