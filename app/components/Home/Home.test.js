import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Home from './Home';

describe('<Home/>', () => {

  it('should have two Link tags', () => {
    const wrapper = shallow(<Home location={{pathname: '/jokes'}}/>);
    expect(wrapper.find('Link')).to.have.length(2);
  });

  it('should render with state.num of a blank string', () => {
    const wrapper = shallow(<Home location={{pathname: '/jokes'}}/>);
    expect(wrapper.state().num).to.equal('')
  })

  it('should render with text showing Favorites on the button', () => {
    const wrapper = shallow(<Home location={{pathname: '/jokes'}}/>);
    expect(wrapper.find('#faves-btn').html()).to.equal(`<button id="faves-btn" class="button">Favorites</button>`)
  })

});
