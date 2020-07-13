import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(buttonName) {
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, buttonName));
  }

  render() {
    const { total, next, operation } = this.state;
    let result = total || next;
    if (total && next && operation) {
      result = `${total} ${operation.toLowerCase()} ${next}`;
    } else if (total && operation) {
      result = `${total} ${operation.toLowerCase()}`;
    }

    const styles = {
      width: '700px',
      height: '100%',
      margin: 'auto',
    };
    return (
      <div style={styles} id="calculator">
        <Display result={result || undefined} />
        <ButtonPanel clickHandler={this.onClick} />
      </div>
    );
  }
}
export default App;
