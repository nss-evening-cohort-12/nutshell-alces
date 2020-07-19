import airportComponent from '../airport/airport';
import addAirport from '../addAirport/addAirport';
import editAirport from '../editAirport/editAirport';

import airportData from '../../helpers/data/airportData';
import utils from '../../helpers/utils';

const buildHangar = () => {
  airportData.getAirports()
    .then((airports) => {
      let domString = `
        <h2 class="text-center">Airports Serviced by Pan Am</h2>
        <button class="btn btn-light" id="show-add-airport"><i class="fas fa-plus-square" style="color:#2767AD;"></i>New Airport</button>
        <div class="d-flex flex-wrap">
      `;

      airports.forEach((airport) => {
        domString += airportComponent.airportCardMaker(airport);
      });

      domString += '</div>';

      utils.printToDom('#hangar', domString);
    })
    .catch((err) => console.error('get airports broke', err));
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
      buildHangar();
      utils.printToDom('#new-airport', '');
    })
    .catch((err) => console.error('could not add airport', err));
};

const removeAirportEvent = (e) => {
  const airportId = e.target.closest('.airport-card').id;
  airportData.deleteAirport(airportId)
    .then((response) => {
      console.warn('response', response);
      buildHangar();
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
      buildHangar();
      utils.printToDom('#edit-airport', '');
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
  $('body').on('click', '', editAirportEvent);
  $('body').on('click', '#show-add-airport', addAirport.showForm);
};

export default { buildHangar, airportEvents };
