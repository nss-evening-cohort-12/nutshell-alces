// import utils from '../../helpers/utils';
import hideLanding from '../landingPage/landingPage';
import pilotDiv from './pilots';

const showDashboard = (e) => {
  e.preventDefault();
  hideLanding.hideLanding();
  pilotDiv.buildPilotDiv();
};

const dashEvents = () => {
  $('body').on('click', showDashboard);
};

export default {
  dashEvents,
};
