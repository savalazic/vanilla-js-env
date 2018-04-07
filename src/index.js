// @flow
import numeral from 'numeral';

import './index.css';

const foo = (x: number, y: number): number => x + y;

const bar = foo(1, 5);
console.log(bar);

const val = numeral(1000).format('$0,0.00');
// debugger;
console.log(val);
