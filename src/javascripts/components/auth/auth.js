import firebase from 'firebase/app';
import 'firebase/auth';
import utils from '../../helpers/utils';

const signMeIN = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-warning"><i class="fab fa-google-plus"></i>LOG ME IN</button>';
  utils.printToDom('#auth', domString);
  $('#google-auth').click(signMeIN);
};

export default { loginButton };
