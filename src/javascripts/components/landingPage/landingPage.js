import utils from '../../helpers/utils';
import addFlights from '../flightDashboard/addFlights/addFlightLanding';

import './landingPage.scss';

const viewDashboard = () => {
  const domString = `
    <a id="test-home" class="nav-item nav-link mr-auto flight-nav" href="#">Flights</a>`;
  utils.printToDom('#locateFlights', domString);
};
const viewNoDashboard = () => {
  const domString = '';
  utils.printToDom('#locateFlights', domString);
};

const buildLandingPage = () => {
  const domString = `
    <div class="main-section d-flex flex-column">
      <img class="panLogo" src="https://i.ibb.co/1fHqVpB/PAN-AM-LOGO.png" alt="PAN-AM-LOGO" border="0">
      <div class="card" style="width: 40rem;">
        <img class="card-img-top" src="https://cdn.businesstraveller.com/wp-content/uploads/fly-images/992965/2.enhancedcleaninganddisinfection-airvents-e1583757719393-916x515.jpg"
         alt="Card image cap">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>

    `;
  utils.printToDom('#landingPage', domString);
  utils.printToDom('#component-editor', '');
  utils.printToDom('#flightDashboard', '');
  addFlights.hideAddFlights();
};

const clearViewer = () => {
  const domString = '<div></div>';
  utils.printToDom('#component-viewer', domString);
};
const hideLanding = () => {
  const domString = '<div class="empty-landing"></div>';
  utils.printToDom('#landingPage', domString);
};

const buildLandingPageButtons = () => {
  hideLanding();
  const domString = `
    <div class="main-section d-flex justify-content-center">
    `;
  utils.printToDom('#landingPage', domString);
  utils.printToDom('#component-editor', '');
};

const resetPage = () => {
  $('#test-home').click((e) => {
    e.preventDefault();
    buildLandingPage();
    clearViewer();
  });
};

export default {
  buildLandingPage,
  hideLanding,
  resetPage,
  buildLandingPageButtons,
  viewDashboard,
  viewNoDashboard,
};
