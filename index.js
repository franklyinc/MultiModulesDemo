import React, { Component, PropTypes } from 'react';

class MultiModulesDemo1a extends Component {
  render(){
    return (
      <div className='FranklyMultiModulesDemo'>
	      <h2 className='demo_text'>mod1a: {this.props.text}</h2>
      </div>
    );
	  
  }
}

export default MultiModulesDemo1a;
