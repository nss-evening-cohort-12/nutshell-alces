import utils from '../../helpers/utils';

import './landingPage.scss';

const buildLandingPage = () => {
  const domString = `
    <div class="main-section">
      <img src="https://i.ibb.co/1fHqVpB/PAN-AM-LOGO.png" alt="PAN-AM-LOGO" border="0">    </div>
    `;
  utils.printToDom('#landingPage', domString);
  utils.printToDom('#component-editor', '');
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
