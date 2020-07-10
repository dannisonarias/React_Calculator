import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const styles = {
    height: '100px',
    display: 'flex',
  };
  return (
    <div>
      <div style={styles}>
        <Button color="#c9c5c5" name="AC" />
        <Button color="#c9c5c5" name="+" />
        <Button color="#c9c5c5" name="%" />
        <Button name="÷" />
      </div>
      <div style={styles}>
        <Button color="#c9c5c5" name="7" />
        <Button color="#c9c5c5" name="8" />
        <Button color="#c9c5c5" name="9" />
        <Button name="X" />
      </div>
      <div style={styles}>
        <Button color="#c9c5c5" name="4" />
        <Button color="#c9c5c5" name="5" />
        <Button color="#c9c5c5" name="6" />
        <Button name="-" />
      </div>
      <div style={styles}>
        <Button color="#c9c5c5" name="1" />
        <Button color="#c9c5c5" name="2" />
        <Button color="#c9c5c5" name="3" />
        <Button name="+" />
      </div>
      <div style={styles}>
        <Button color="#c9c5c5" wide="true" name="0" />
        <Button color="#c9c5c5" name="." />
        <Button name="=" />
      </div>
    </div>
  );
};

export default ButtonPanel;
