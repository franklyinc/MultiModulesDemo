import React, { Component, PropTypes } from 'react';
import shared1 from '../shared1';

class MultiModulesDemo1 extends Component {
  render(){
    return (
      <div className='FranklyMultiModulesDemo'>
	      <h2 className='demo_text'>mod1: {this.props.text}</h2>
	      <Shared1></Shared1>
      </div>
    );
	  
  }
}

export default MultiModulesDemo1;
