// import utils from '../../helpers/utils';
import hideLanding from '../landingPage/landingPage';
import pilotDiv from './crew/pilots';
import './dashBoard.scss';

const showDashboard = (e) => {
  e.preventDefault();
  hideLanding.hideLanding();
  pilotDiv.buildPilotDiv();
};

const dashEvents = () => {
  $('body').on('click', '.flight-nav', showDashboard);
};

export default {
  dashEvents,
};
