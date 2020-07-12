import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  return (
    <div id="calculator">
      <Display linter={calculate} />
      <ButtonPanel />
    </div>
  );
};
export default App;
