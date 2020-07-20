import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import auth from './components/auth/auth';
import myNavbar from './components/myNavbar/myNavbar';
import authData from './helpers/data/authData';
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
import helpers from './helpers/clickEvents';

>>>>>>> Stashed changes
=======

>>>>>>> master
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavbar.logoutEvent();
<<<<<<< HEAD
<<<<<<< Updated upstream
  planesList.showPlanes();
=======
  helpers.clickEvents();
>>>>>>> Stashed changes
=======
>>>>>>> master
};

init();
