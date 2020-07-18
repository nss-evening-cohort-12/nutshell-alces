import airportComponent from '../airport/airport';
import airportData from '../../helpers/data/airportData';
import utils from '../../helpers/utils';

const removeAirportEvent = (e) => {
  const airportId = e.target.closest('.airport-card').id;
  console.warn(airportId);
  airportData.deleteAirport(airportId)
    .then((response) => {
      console.warn('response', response);

      buildHangar();
    })
    .catch((err) => console.error('did not delete irport', err));
};

const buildHangar = () => {
  airportData.getAirports()
    .then((airports) => {
      let domString = `
        <h2 class="text-center">Airports Serviced by Pan Am</h2>
        <div class="d-flex flex-wrap">
      `;

      airports.forEach((airport) => {
        domString += airportComponent.airportCardMaker(airport);
      });

      domString += '</div>';

      utils.printToDom('#hangar', domString);
      $('body').on('click', '.delete-airport', removeAirportEvent);
    })
    .catch((err) => console.error('get airports broke', err));
};

export default { buildHangar };
