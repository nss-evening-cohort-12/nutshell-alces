import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import auth from './components/auth/auth';
import myNavbar from './components/myNavbar/myNavbar';
import planesList from './components/planesList/planesList';

import authData from './helpers/data/authData';

import helpers from './helpers/clickEvents';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavbar.logoutEvent();
  planesList.showPlanes();
  helpers.clickEvents();
};

init();
