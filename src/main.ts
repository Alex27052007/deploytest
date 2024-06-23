import './style.css';

import * as lodash from 'lodash';

const names = ['Anna', 'Ben', 'Suzy'];
const names2 = ['Steven', 'Marc', 'Suzy'];
const uniqueNames = lodash.unionWith(names, names2);

const app = document.getElementById('app');
if (app) {
  app.innerHTML = uniqueNames.join(' ');
}
console.log(uniqueNames);
