import firebase from 'firebase/app';
import 'firebase/auth';

import crewList from '../../components/crewList/crewList';
import airportList from '../../components/airportList/airportList';
import planesList from '../../components/planesList/planesList';
import foodList from '../../components/foodList/foodList';

const authDiv = $('#auth');
// const homeDiv = $('#homepage');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      // homeDiv.removeClass('hide');
      logoutButton.removeClass('hide');

      crewList.crewEvents();
      airportList.airportEvents();
      planesList.planeEvents();
      foodList.foodListEvents();
    } else {
      authDiv.removeClass('hide');
      logoutButton.addClass('hide');
      crewList.crewEvents();
      airportList.airportEvents();
      planesList.planeEvents();
      foodList.foodListEvents();
    }
  });
};

export default { checkLoginStatus };
