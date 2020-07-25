// import utils from '../../helpers/utils';
import hideLanding from '../landingPage/landingPage';
import pilotDiv from './pilots';
import flightPath from './flightPath/flightPath';

const showDashboard = (e) => {
  e.preventDefault();
  hideLanding.hideLanding();
  pilotDiv.buildPilotDiv();
  flightPath.buildDestinationDiv();
};

const dashEvents = () => {
  $('body').on('click', '.flight-nav', showDashboard);
};

export default {
  dashEvents,
};
