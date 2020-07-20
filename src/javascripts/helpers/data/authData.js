import firebase from 'firebase/app';
import 'firebase/auth';

import crewList from '../../components/crewList/crewList';
import airportList from '../../components/airportList/airportList';
import planesList from '../../components/planesList/planesList';

const authDiv = $('#auth');
const homeDiv = $('#homepage');
const logoutButton = $('#navbar-logout-button');
const newAirportDiv = $('#new-airport');
const editAirportDiv = $('#edit-airport');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      homeDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      newAirportDiv.removeClass('hide');
      editAirportDiv.removeClass('hide');

      airportList.airportEvents();
      crewList.buildCrew();
      airportList.buildHangar();
      planesList.showPlanes();
    } else {
      authDiv.removeClass('hide');
      homeDiv.addClass('hide');
      logoutButton.addClass('hide');
<<<<<<< HEAD
      $('#crew').hide();
      $('#hangar').hide();
      $('#plane-collection').hide();
=======
      newAirportDiv.addClass('hide');
      editAirportDiv.addClass('hide');

      crewList.buildCrew();
      airportList.buildHangar();
      planesList.showPlanes();
>>>>>>> master
    }
  });
};

export default { checkLoginStatus };
