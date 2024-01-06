import '@babel/polyfill';
import './index.html';
import './index.scss';
import {clear} from './modules/clear.js';
import {count} from './modules/count.js';
import {nums_btns} from './modules/nums.js';
import {dot_btn} from './modules/dot.js';
import {sign_btns} from './modules/signs.js';

let signs = document.getElementsByClassName('signs');
let c = document.getElementsByClassName('clear')[0];
let equal = signs[signs.length-1];
let dot = document.getElementsByClassName('dot')[0];

c.onclick = () => clear();
equal.onclick = () => count();
nums_btns();
dot.onclick = () => dot_btn();
sign_btns();