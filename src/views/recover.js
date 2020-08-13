import {recoverUser} from '../lib/firebase_auth.js';

export default () => {
    history.replaceState({},'recoverAccount', '#recover');
    const recover = document.createElement('section');
    recover.setAttribute('class', 'recover');

    recover.innerHTML = `<div class="cont">
      <h2>Recupera tu contraseña</h2>
      <label for="email">Ingresa tu email</label>
      <input type="email" id="email" placeholder="usuario@email.com" autocomplete="off" required>
      <button type="button" name="send" class="btn send" >ENVIAR</button>
      <p class="message"><p>
      </div>`;
      
      const sends = recover.querySelector('.send').addEventListener('click', ()=>{
      const email = recover.querySelector('#email').value;
      let message = recover.querySelector('.message');
      message.style.display = 'block';
      console.log(email);
      recoverUser(message,email);
    });
    return recover;
};