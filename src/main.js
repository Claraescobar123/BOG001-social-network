// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import home from './views/home.js';
import login from './views/login.js';
import createAccount from './views/createAccount.js';
import recover from './views/recover.js';
import otherThank from './views/thankAccount.js';
import muro from './views/muro.js';

const body = document.getElementById('root');
body.appendChild(home());

const router = (rute) => {
  body.innerHTML = ' ';
  switch (rute) {
    case '#home':
      return body.appendChild(home());
    case '#login':
      return body.appendChild(login());
    case '#createAccount':
      return body.appendChild(createAccount());
    case '#recover':
      return body.appendChild(recover());
    case '#thankAccount':
      return body.appendChild(otherThank());
    case '#muro':
      return body.appendChild(muro());
      break;
    default:
  }
};

window.addEventListener('hashchange', () => {
  router(window.location.hash);
});
console.log(home);


//Logout

const logout = document.querySelector('#logout');
logout.addEventListener('click', () => {
  signOut();
});

async function signOut() {
  try {
    const userOut = await auth.signOut();
    console.log('user out');
  } catch (e) {
    console.log(e);
  }
}
myFunction();


