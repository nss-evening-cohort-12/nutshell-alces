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
<<<<<<< Updated upstream
=======

      crewList.buildCrew();
      airportList.buildHangar();
      planesList.planeEvents();
      planesList.showPlanes();
>>>>>>> Stashed changes
    } else {
      authDiv.removeClass('hide');
      homeDiv.addClass('hide');
      logoutButton.addClass('hide');
<<<<<<< Updated upstream
=======

      $('#crew').hide();
      $('#hangar').hide();
      $('#plane-collection').hide();
>>>>>>> Stashed changes
    }
  });
};

export default { checkLoginStatus };
