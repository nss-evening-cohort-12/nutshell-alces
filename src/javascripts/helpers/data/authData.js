import firebase from 'firebase/app';
import 'firebase/auth';

import crewList from '../../components/crewList/crewList';
import airportList from '../../components/airportList/airportList';
import planesList from '../../components/planesList/planesList';

const authDiv = $('#auth');
const homeDiv = $('#homepage');
const logoutButton = $('#navbar-logout-button');
// const editCrewDiv = $('#edit-crew)')

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      homeDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      // editCrewDiv.removeClass('hide');

      crewList.buildCrew();
      airportList.buildHangar();
      planesList.showPlanes();
    } else {
      authDiv.removeClass('hide');
      homeDiv.addClass('hide');
      logoutButton.addClass('hide');
      // editCrewDiv.addClass('hide');

      crewList.buildCrew();
      airportList.buildHangar();
      planesList.showPlanes();
    }
  });
};

export default { checkLoginStatus };
