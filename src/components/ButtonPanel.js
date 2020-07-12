import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


const ButtonPanel = props => {
  const styles = {
    height: '100px',
    display: 'flex',
  };
  const clickHandler = buttonName => {
    props.clickHandler(buttonName);
  };

  return (
    <div>
      <div style={styles}>
        <Button color="#c9c5c5" name="AC" onClick={clickHandler} />
        <Button color="#c9c5c5" name="+" onClick={clickHandler} />
        <Button color="#c9c5c5" name="%" onClick={clickHandler} />
        <Button name="/" onClick={clickHandler} />
      </div>
      <div style={styles}>
        <Button color="#c9c5c5" name="7" onClick={clickHandler} />
        <Button color="#c9c5c5" name="8" onClick={clickHandler} />
        <Button color="#c9c5c5" name="9" onClick={clickHandler} />
        <Button name="X" onClick={clickHandler} />
      </div>
      <div style={styles}>
        <Button color="#c9c5c5" name="4" onClick={clickHandler} />
        <Button color="#c9c5c5" name="5" onClick={clickHandler} />
        <Button color="#c9c5c5" name="6" onClick={clickHandler} />
        <Button name="-" onClick={clickHandler} />
      </div>
      <div style={styles}>
        <Button color="#c9c5c5" name="1" onClick={clickHandler} />
        <Button color="#c9c5c5" name="2" onClick={clickHandler} />
        <Button color="#c9c5c5" name="3" onClick={clickHandler} />
        <Button name="+" onClick={clickHandler} />
      </div>
      <div style={styles}>
        <Button color="#c9c5c5" wide="true" name="0" onClick={clickHandler} />
        <Button color="#c9c5c5" name="." onClick={clickHandler} />
        <Button name="=" onClick={clickHandler} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
