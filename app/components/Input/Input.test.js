import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Input from './Input';

describe('<Input />', () => {

  it('should have an input element', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('input')).to.have.length(1)
  })

  it('allows us to set props', () => {
    const wrapper = mount(<Input prop="thing" />);
    expect(wrapper.props().prop).to.equal("thing");
    wrapper.setProps({ prop: "different-thing" });
    expect(wrapper.props().prop).to.equal("different-thing");
  });

  it('should have an onChange event', () => {
    const handleChange = sinon.spy()
    const wrapper = shallow(<Input handleChange={handleChange} />)
    wrapper.find('input').simulate('change');
    expect(handleChange.calledOnce).to.equal(true)
  })

  

})
