import airportComponent from '../airport/airport';
import airportData from '../../helpers/data/airportData';
import utils from '../../helpers/utils';
import './airportList.scss';

const buildHangar = () => {
  airportData.getAirports()
    .then((airports) => {
      let domString = `
        <h2 class="text-center">Airports Serviced by Pan Am</h2>
        <div id="airport" class="d-flex flex-wrap">
        `;

      airports.forEach((airport) => {
        domString += airportComponent.airportCardMaker(airport);
      });

      domString += '</div>';

      utils.printToDom('#hangar', domString);
    })
    .catch((err) => console.error('get airports broke', err));
};

export default { buildHangar };
