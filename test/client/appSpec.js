import React from "react";
import { mount, shallow } from "enzyme";

import App from '../../app/components/App';

describe('<App />', function () {
  it('should have an image to display the gravatar', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.props().onRefreshClick).to.be.defined;
    expect(wrapper.props().onToggleClick).to.be.defined;
  });
});
