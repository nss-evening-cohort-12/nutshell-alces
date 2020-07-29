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
      <h2>We're here for you.</h2>
      <div class="landingCardsContainer">
        <div class="cardL" style="width: 20rem;">
          <img class="card-img-top" src="https://cdn.businesstraveller.com/wp-content/uploads/fly-images/992965/2.enhancedcleaninganddisinfection-airvents-e1583757719393-916x515.jpg"
          alt="Card image cap">
          <div class="card-body">
            <p class="card-text">We are taking every pre-caution stated by the CDC to make sure The Pan-Am exeperience is safe for everyone.</p>
          </div>
        </div>
        <div class="cardL" style="width: 20rem;">
          <img class="card-img-top" src="https://airbus-h.assetsadobe2.com/is/image/content/dam/products-and-solutions/interior/Cabin/airspace/a320neo-airspace/Airspace_A320_hero_light_night.jpg?wid=1920&fit=fit,1&qlt=85,0"
          alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Bringing innovation and comfort to evey flight.</p>
          </div>
        </div>
        <div class="cardL" style="width: 20rem;">
          <img class="card-img-top" src="https://www.flyertalk.com/wp-content/uploads/2019/06/iStock-1049248354-1000x600.jpg"
          alt="Card image cap">
          <div class="card-body">
            <p class="card-text">First Class meals for everyone on International Flights.</p>
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
