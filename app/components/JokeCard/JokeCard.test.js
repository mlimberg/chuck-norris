import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import JokeCard from './JokeCard';

describe('<JokeCard/>', () => {

  it('should have a class of joke-card', () => {
    const wrapper = shallow(<JokeCard/>);
    expect(wrapper.find('div').hasClass('joke-card')).to.equal(true);
  });

  it('should have a button to select as a favorite', () => {
    const wrapper = shallow(<JokeCard/>);
    expect(wrapper.find('Button').length).to.equal(1);
  });

  it('accepts props', () => {
    const wrapper = mount(<JokeCard props='some props'/>)
    expect(wrapper.props().props).to.equal('some props')
  })

  it('has a class of favoite if the props.fave is true', () => {
    const wrapper = mount(<JokeCard fave={true}/>)
    expect(wrapper.find('Button').hasClass('favorite')).to.equal(true)
  })

});
