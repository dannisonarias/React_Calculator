import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const styles = {
    backgroundColor: 'gray',
    height: '100px',
    color: 'white',
    fontWeight: 'bold',
    padding: '5px',
    textAlign: 'right',
  };

  const { result } = props;
  return (
    <div style={styles} className="display">{result}</div>
  );
};

Display.defaultProps = { result: '0' };

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
