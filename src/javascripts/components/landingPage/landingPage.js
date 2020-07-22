import utils from '../../helpers/utils';

import './landingPage.scss';

const buildLandingPage = () => {
  const domString = `
   <div class="main-section">
      <img src="https://i.ibb.co/1fHqVpB/PAN-AM-LOGO.png" alt="PAN-AM-LOGO" border="0">    </div>
    <div class="nav-buttons">
      <div class="airport-nav">
        <button type="button" class="btn btn-primary btn-lg">Airports</button>
      </div>
      <div class="plane-nav">
        <button type="button" class="btn btn-primary btn-lg">Planes</button>
      </div>
      <div class="crew-nav">
        <button type="button" class="btn btn-primary btn-lg">Crew</button>
      </div>
      <div class="food-nav">
        <button id="see-foods" type="button" class="btn btn-primary btn-lg">Food</button>
      </div>
    </div>
   `;
  utils.printToDom('#homepage', domString);
};

const hideLanding = () => {
  const domString = '<div class="empty-landing"></div>';
  utils.printToDom('#homepage', domString);
};

const resetPage = () => {
  $('#test-home').click((e) => {
    e.preventDefault();
    buildLandingPage();
    $('#test-hide').addClass('hide');
  });
};
export default { buildLandingPage, hideLanding, resetPage };
