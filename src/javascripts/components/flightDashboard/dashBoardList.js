import hideLanding from '../landingPage/landingPage';
import addFlights from './addFlights/addFlightLanding';
import './dashBoard.scss';
import utils from '../../helpers/utils';

const showDashboard = (e) => {
  e.preventDefault();
  utils.printToDom('#component-viewer', '');
  utils.printToDom('#component-editor', '');
  addFlights.hideAddFlights();
  hideLanding.hideLanding();
};

const showAddFlight = (e) => {
  e.preventDefault();
  utils.printToDom('#flightDashboard', '');
  addFlights.buildAddFlightLanding();
};

const dashEvents = () => {
  $('body').on('click', '.flight-nav', showDashboard);
  $('body').on('click', '#show-add-flight', showAddFlight);
};

export default {
  dashEvents,
};
