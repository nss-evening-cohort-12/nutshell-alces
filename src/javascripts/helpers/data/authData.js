import firebase from 'firebase/app';
import 'firebase/auth';

import crewList from '../../components/crewList/crewList';
import airportList from '../../components/airportList/airportList';
import planesList from '../../components/planesList/planesList';
import foodList from '../../components/foodList/foodList';
import landing from '../../components/landingPage/landingPage';
import dash from '../../components/flightDashboard/dashBoardList';
import flights from '../../components/flightsList/flightsList';
import flightPath from '../../components/flightDashboard/flightPath/flightPath';
import addFlights from '../../components/flightDashboard/addFlights/addFlightLanding';
import flightPlanes from '../../components/flightDashboard/planes/flightPlanes';
import singleFlight from '../../components/flightDashboard/singleFlight/singleFlight';

const authDiv = $('#auth');
// const homeDiv = $('#homepage');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      // homeDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      landing.viewDashboard();
      crewList.crewEvents();
      airportList.airportEvents();
      planesList.planeEvents();
      foodList.foodListEvents();
      dash.dashEvents();
      flights.flightEvents();
      flightPath.flightPathEvents();
      addFlights.addFlightEvents();
      flightPlanes.flightPlaneEvents();
      singleFlight.singleFlightEvents();
    } else {
      landing.viewNoDashboard();
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
