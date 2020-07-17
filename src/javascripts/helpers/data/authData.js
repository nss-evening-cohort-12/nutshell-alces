import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const homeDiv = $('#homepage');
const logoutButton = $('#navbar-logout-button');
const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      homeDiv.removeClass('hide');
      logoutButton.removeClass('hide');
    } else {
      authDiv.removeClass('hide');
      homeDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
