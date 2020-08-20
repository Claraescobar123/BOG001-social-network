export default () => {
  const otherThank = document.createElement('div');
  otherThank.setAttribute('id', 'thanku');
  const accountThank = document.createElement('section');
  accountThank.setAttribute('id', 'thankAccount');
  accountThank.innerHTML = `<img src="img/icon.png" id="icono">
      <h1>Gracias por crear una cuenta</h1>
      <button id="continue" class="btn">CONTINUAR</button>`;
  otherThank.appendChild(accountThank);


  // click boton a el muro
  otherThank.addEventListener('click', () => {
    window.location = '#timeline';
  });

  return otherThank;
};
