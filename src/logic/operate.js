import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const nOne = Big(numberOne);
  const nTwo = Big(numberTwo);

  switch (operation) {
    case '-':
      return nOne.minus(nTwo).toString();
    case '+':
      return (nOne.plus(nTwo)).toString();
    case 'X':
      return nOne.times(nTwo).toString();
    case ('/'):
      if (numberTwo === 0) {
        return Infinity;
      }
      return nOne.div(nTwo).toString();
    default:
      throw Error(`Unknown operation '${operation}'`);
  }
};

export default operate;
