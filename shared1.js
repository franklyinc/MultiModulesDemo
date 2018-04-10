import React, { Component, PropTypes } from 'react';
import Shared2 from './shared2';

class Shared1 extends Component {
	
  render(){
	  
    return (
      <div className='Shared1'>
	      Shared1</br>
        <Shared2></Shared2>
      </div>
    );
	  
  }
}

export default Shared1;
