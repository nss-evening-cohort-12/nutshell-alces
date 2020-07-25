import firebase from 'firebase/app';
import 'firebase/auth';
import landing from '../landingPage/landingPage';

const logoutEvent = () => {
  $('#navbar-logout-button').click((e) => {
    e.preventDefault();
    landing.viewNoDashboard();
    firebase.auth().signOut();
  });
};

export default { logoutEvent };
