import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const App = () => {
  const styles = {
    width: '700px',
    height: '100%',
  };

  return (
    <div style={styles} id="calculator">
      <Display />
      <ButtonPanel />
    </div>
  );
};
export default App;
