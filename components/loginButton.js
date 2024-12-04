import { signIn } from '../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `
    <h1>TECH TO ME!</h1>
    <h4>Learn software & tech features created by the world's leading tech companies.</h4>
    <button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>
  `;

  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
