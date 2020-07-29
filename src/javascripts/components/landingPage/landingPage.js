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
      <img src="https://i.ibb.co/1fHqVpB/PAN-AM-LOGO.png" alt="PAN-AM-LOGO" border="0">
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://i.insider.com/5e0f64c3855cc26263105d26?width=1100&format=jpeg&auto=webp" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Third slide">
          </div>
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
