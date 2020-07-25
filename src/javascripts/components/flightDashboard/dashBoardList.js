// import utils from '../../helpers/utils';
import hideLanding from '../landingPage/landingPage';
import flightPath from './flightPath/flightPath';
import pilotDiv from './crew/pilots';
import './dashBoard.scss';


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
