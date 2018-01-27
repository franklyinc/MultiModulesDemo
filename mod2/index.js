import React, { Component, PropTypes } from 'react';

class MultiModulesDemo extends Component {
	
  render(){
	  
    return (
      <div className='FranklyModulesDemo'>
	      <h2 className='demo_text'>mod2: {this.props.text}</h2>
      </div>
    );
	  
  }
}

export default ModuleDemo;
