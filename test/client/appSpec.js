import React from 'react';
import Enzyme, { mount, shallow, unmount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../../app/components/App';
import Header from '../../app/components/Header';
import NewsList from '../../app/components/NewsList';
import Topics from '../../app/components/Topics';

Enzyme.configure({ adapter: new Adapter() });

xdescribe('<App />', function () {
  // add <App> tests here
});
