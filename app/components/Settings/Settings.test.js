import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Settings from './Settings';

describe('<Settings/>', () => {

  it('should display a single Input tag', () => {
    const wrapper = shallow(<Settings/>);
    expect(wrapper.find('Input')).to.have.length(1);
  });

  it('should have 2 Button tags', () => {
    const wrapper = mount(<Settings/>);
    expect(wrapper.find('Button')).to.have.length(2);
  });

  it('should have a settings container', () => {
    const wrapper = mount(<Settings/>);
    expect(wrapper.find('#settings-container'))
  });

  it('should have a current name equal to the props passed in', () => {
    const wrapper = mount(<Settings currentName='Chuck'/>);
    wrapper.debug()
    expect(wrapper.find('#current-name').html()).to.equal(`<span id="current-name">Chuck</span>`);
  });

  it('should have state of name equal to a blank string', () => {
    const wrapper = mount(<Settings/>);
    expect(wrapper.state().name).to.equal('');
  });

  it('should have state of pControls equal to false', () => {
    const wrapper = mount(<Settings/>);
    expect(wrapper.state().pControls).to.equal(false);
  });

  it('should have state of pControls equal to false', () => {
    const wrapper = mount(<Settings/>);
    expect(wrapper.state().pControls).to.equal(false);
  });

  it('should set value of the input to state.name', () => {
    const wrapper = shallow(<Settings />)
    wrapper.setState({ name: 'Bob Barker'})
    expect(wrapper.find('#name-set-input').html()).to.equal(`<input id="name-set-input" class="input" value="Bob Barker"/>`)
  })

  it('should have the SET button disabled on inital render', () => {
    const wrapper = mount(<Settings />)
    expect(wrapper.find('#name-set-btn').props().disabled).to.equal(true)
  })

  it('should have the SET button enabled when state.name is set', () => {
    const wrapper = mount(<Settings />)
    expect(wrapper.find('#name-set-btn').props().disabled).to.equal(true)
    wrapper.setState({ name: 'Chucky' })
    expect(wrapper.find('#name-set-btn').props().disabled).to.equal(false)
  })

  // it.only('should have a handleClick event', () => {
  //   const handleClick = sinon.spy()
  //   const wrapper = shallow(<Settings />)
  //   const input = wrapper.find('#name-set-input')
  //   const button = wrapper.find('#name-set-btn')
  //   input.simulate('keyDown', { keyCode: 66 })
  //   button.simulate('click')
  //   wrapper.update()
  //   console.log(wrapper.state())
  // })

});
