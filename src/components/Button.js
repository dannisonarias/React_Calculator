import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, wide, color } = props;
  const styles = {
    boxSizing: 'border-box',
    height: '100px',
    color: 'black',
    textAlign: 'center',
    border: '1px solid #5c5858',
    flex: '1 1 0px',
    backgroundColor: color,
  };
  if (wide) {
    styles.flex = '2.037 1 0px';
  }
  return (
    <button style={styles} type="button">{ name }</button>
  );
};

Button.defaultProps = { color: 'orange', wide: false };

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
