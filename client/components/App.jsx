import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.config);
    if(this.props.config.STUB_ENABLED) {
      return(
        <div className='ocr-header'>
          <header>
            <p> ocr </p>
          </header>
        </div>
      );
} else {
  return (
    <div className="loader"></div>
  );
}


  }
}

App.propTypes = {
  config: PropTypes.object,
};
