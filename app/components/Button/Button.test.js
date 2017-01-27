import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Button from '../Button/Button';

describe('<Button/>', () => {

  it('should display a single h1 tag', () => {
    const wrapper = shallow(<Button/>);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should trigger our logStuff', () => {
    const logStuff = sinon.spy()
    const wrapper = mount(<Button handleClick={logStuff} />)
    wrapper.simulate('click')
    expect(logStuff.calledOnce).to.equal(true)
  })

  it('allows us to set props', () => {
  const wrapper = mount(<Button prop="thing" />);
  expect(wrapper.props().prop).to.equal("thing");
  wrapper.setProps({ prop: "different-thing" });
  expect(wrapper.props().prop).to.equal("different-thing");
  });

  it('should have a handleClick event', () => {
    const handleClick = sinon.spy()
    const wrapper = shallow(<Button handleClick={handleClick} />)
    wrapper.find('button').simulate('click');
    expect(handleClick.calledOnce).to.equal(true)
  })

});
