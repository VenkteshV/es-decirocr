import React from 'react';
import logo from '../images/logo.png';
//import PropTypes from 'prop-types';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='ocr-header'>
        <header>
          <img className='mrcooper-image' src={logo} />
        </header>
      </div>
    );
  }
}
