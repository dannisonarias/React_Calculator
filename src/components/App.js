import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const styles = {
    width: '700px',
    height: '100%',
    margin: 'auto',
  };
  return (
    <div style={styles} id="calculator">
      <Display linter={calculate} />
      <ButtonPanel />
    </div>
  );
};
export default App;
