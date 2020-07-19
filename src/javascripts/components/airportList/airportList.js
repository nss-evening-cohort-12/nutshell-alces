import airportComponent from '../airport/airport';
import addAirport from '../addAirport/addAirport';
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
      // $('body').on('click', '#show-add-airport', addAirport.showForm);
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

  console.warn(newAirport);
};

const removeAirportEvent = (e) => {
  const airportId = e.target.closest('.airport-card').id;
  console.warn(airportId);
  airportData.deleteAirport(airportId)
    .then((response) => {
      console.warn('response', response);

      buildHangar();
    })
    .catch((err) => console.error('did not delete airport', err));
};

const airportEvents = () => {
  $('body').on('click', '.delete-airport', removeAirportEvent);
  $('body').on('click', '#airport-creator', addAirportEvent);
  $('body').on('click', '#show-add-airport', addAirport.showForm);
};

export default { buildHangar, airportEvents };
