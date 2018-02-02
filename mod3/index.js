import React, { Component, PropTypes } from 'react';

class MultiModulesDemo3 extends Component {
	
  render(){
	  
    return (
      <div className='FranklyMultiModulesDemo'>
	      <h2 className='demo_text'>mod3: {this.props.text}</h2>
      </div>
    );
	  
  }
}

export default MultiModulesDemo3;
