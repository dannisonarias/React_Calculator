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
    flexGrow: '1',
    flexBasis: '25%',
    flexShrink: '1',
    backgroundColor: color,
  };
  const clickHandler = e => props.onClick(e.target.innerText);
  if (wide) {
    styles.flexBasis = 'calc(50%)';
    styles.flexShrink = '1';
  }
  return (
    <button style={styles} type="button" onClick={clickHandler}>{ name }</button>
  );
};

Button.defaultProps = { color: 'orange', wide: false };

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
