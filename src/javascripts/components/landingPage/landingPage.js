import utils from '../../helpers/utils';

import './landingPage.scss';

const buildLandingPage = () => {
  const domString = `
   <div class="main-section">
      <img src="https://i.ibb.co/1fHqVpB/PAN-AM-LOGO.png" alt="PAN-AM-LOGO" border="0">    </div>
    <div class="nav-buttons jim">
      <div class="airport-nav">
        <button type="button" class="btn btn-primary btn-md lNav">Airports</button>
      </div>
      <div class="plane-nav">
        <button type="button" class="btn btn-primary btn-md lNav">Planes</button>
      </div>
      <div class="crew-nav">
        <button type="button" class="btn btn-primary btn-md lNav">Crew</button>
      </div>
      <div class="food-nav">
        <button id="see-foods" type="button" class="btn btn-primary btn-md lNav">Food</button>
      </div>
    </div>
   `;
  utils.printToDom('#landingPage', domString);
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
    <div class="nav-buttons d-flex justify-content-sm-around">
      <div class="airport-nav">
        <button type="button" class="btn btn-primary btn-md lNav">Airports</button>
      </div>
      <div class="plane-nav">
        <button type="button" class="btn btn-primary btn-md lNav">Planes</button>
      </div>
      <div class="crew-nav">
        <button type="button" class="btn btn-primary btn-md lNav">Crew</button>
      </div>
      <div class="food-nav">
        <button id="see-foods" type="button" class="btn btn-primary btn-md lNav">Food</button>
      </div>
    </div>
   `;
  utils.printToDom('#landingPage', domString);
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
};
