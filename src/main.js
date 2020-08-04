// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import home from './views/home.js';
import recover from './views/recover.js';

header.style.display = 'none';
const body = window.root;

body.appendChild(home(body, recover));
console.log(home);
myFunction();
