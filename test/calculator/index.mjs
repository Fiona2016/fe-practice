import myCalculator from './my-calc.mjs'
const myCalc = new myCalculator({toFixed: 5})

const test = str => console.log(myCalc.calc(str))

test('1 + 2')
test('1 + 2 * 3 / 4')
test('3 + 40 / 35 + 123 / 123 * 2')
// test('300 / 0')