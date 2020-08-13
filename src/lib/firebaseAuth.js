// createAccount
export async function signUp(email, password) {
    try {
      const newUser = await auth.createUserWithEmailAndPassword(email, password);
      console.log(newUser.user);
      window.location = '#thankAccount';
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  }
  
  // login
  export async function logIn(email, password) {
    try {
      const userLogIn = await auth.signInWithEmailAndPassword(email, password);
      window.location = '#timeline';
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  }
  
  export async function logInGoogle(provider) {
    try {
      const userLogIn = await auth.signInWithPopup(provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = userLogIn.credential.accessToken;
      // The signed-in user info.
      const user = userLogIn.user;
      console.log(user);
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log(errorCode, errorMessage);
    }
  }
  
  // recover
  export async function recoverPass(message, email) {
    try {
      const sendEmail = await auth.sendPasswordResetEmail(email);
      message.innerHTML = `Hemos enviado un email a ${email} para cambiar la contraseña`;
    } catch (error) {
      message.innerHTML = 'No se ha podido enviar el correo de verificación';
      console.log('No se ha podido enviar el correo de verificación');
    }
  }
  
  // main log out
  export async function signOut() {
    try {
      const userOut = await auth.signOut();
      console.log('user out');
    } catch (e) {
      console.log(e);
    }
  }