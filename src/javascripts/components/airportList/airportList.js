import firebase from 'firebase/app';
import 'firebase/auth';

import airportComponent from '../airport/airport';
import airportData from '../../helpers/data/airportData';
import editAirport from '../editAirport/editAirport';
import utils from '../../helpers/utils';
import hideLanding from '../landingPage/landingPage';
import addFlights from '../flightDashboard/addFlights/addFlightLanding';
import modals from '../modals/modals';

import './airportList.scss';

const buildHangarAuth = () => {
  hideLanding.buildLandingPageButtons();
  airportData.getAirports()
    .then((airports) => {
      let domString = `
      <h2 class="text-center">Airports Serviced by Pan Am</h2>
        <div class="d-flex flex-wrap text-center container justify-content-center align-items-center">
          <div id="airport" class="d-flex flex-wrap text-center justify-content-center">
            <button class="btn btn-light" id="show-add-airport" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-square" style="color:#2767AD;"></i> New Airport</button>
            <div class="d-flex flex-wrap text-center justify-content-center align-items-center">
      `;

      airports.forEach((airport) => {
        domString += airportComponent.airportCardMakerAuth(airport);
      });

      domString += `
            </div>
          </div>
        </div>`;
      utils.printToDom('#component-viewer', '');
      utils.printToDom('#flightDashboard', '');
      addFlights.hideAddFlights();
      utils.printToDom('#component-viewer', domString);
    })
    .catch((err) => console.error('get airports broke', err));
};

const buildHangarNoAuth = () => {
  hideLanding.buildLandingPageButtons();
  airportData.getAirports()
    .then((airports) => {
      let domString = `
      <h2 class="text-center">Airports Serviced by Pan Am</h2>
        <div class="d-flex flex-wrap text-center container">
          <div id="airport" class="d-flex flex-wrap text-center">
            <div class="d-flex flex-wrap text-center">
      `;

      airports.forEach((airport) => {
        domString += airportComponent.airportCardMakerNoAuth(airport);
      });

      domString += `
            </div>
          </div>
        </div>`;
      utils.printToDom('#component-viewer', '');
      utils.printToDom('#flightDashboard', '');
      addFlights.hideAddFlights();

      utils.printToDom('#component-viewer', domString);
    })
    .catch((err) => console.error('get airports broke', err));
};

const viewAirportEvent = (e) => {
  e.preventDefault();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      buildHangarAuth();
    } else {
      buildHangarNoAuth();
    }
  });
};

const addAirportEvent = (e) => {
  e.preventDefault();

  const newAirport = {
    imgURL: $('#airport-pic').val(),
    name: $('#airport-name').val(),
    location: $('#airport-location').val(),
    webURL: $('#airport-website').val(),
  };

  airportData.addAirport(newAirport)
    .then(() => {
      buildHangarAuth();
      utils.printToDom('#component-editor', '');
      utils.printToDom('', '');
    })
    .catch((err) => console.error('could not add airport', err));
};

const removeAirportEvent = (e) => {
  const airportId = e.target.closest('.airport-card').id;
  airportData.deleteAirport(airportId)
    .then(() => {
      buildHangarAuth();
    })
    .catch((err) => console.error('did not delete airport', err));
};

const editAirportEvent = (e) => {
  e.preventDefault();

  const airportId = e.target.closest('.edit-airport').id;

  const editedAirport = {
    imgURL: $('#edit-airport-pic').val(),
    name: $('#edit-airport-name').val(),
    location: $('#edit-airport-location').val(),
    webURL: $('#edit-airport-website').val(),
  };
  airportData.updateAirport(airportId, editedAirport)
    .then(() => {
      buildHangarAuth();
      utils.printToDom('#component-editor', '');
    })
    .catch((err) => console.error('could not edit airport', err));
};

const showAirportForm = (e) => {
  editAirport.showForm(e.target.closest('.airport-card').id);
};

const airportEvents = () => {
  $('body').on('click', '.delete-airport', removeAirportEvent);
  $('body').on('click', '.edit-airport', showAirportForm);
  $('body').on('click', '#airport-creator', addAirportEvent);
  $('body').on('click', '#airport-editor', editAirportEvent);
  $('body').on('click', '#show-add-airport', modals.addAirportPopup);
  $('body').on('click', '.airport-nav', viewAirportEvent);
  $('body').on('click', '#airport-creator', modals.resetAirportModal);
};

export default { buildHangarAuth, airportEvents };
