import airportComponent from '../airport/airport';
import airportData from '../../helpers/data/airportData';
import utils from '../../helpers/utils';

const buildHangar = () => {
  airportData.getAirports()
    .then((airports) => {
      console.warn('Get airports worked', airports);
      let domString = `
        <h2 class="text-center">Hangar</h2>
        <div class="d-flex flex-wrap">
      `;

      airports.forEach((airport) => {
        domString += airportComponent.airportMaker(airport);
      });

      domString += '</div>';

      utils.printToDom('#hangar', domString);
    })
    .catch((err) => console.error('get airports broke', err));
  // const domString = '<h1>I SEE AIRPORTS</h1>';
  // utils.printToDom('#hangar', domString);
};

export default { buildHangar };
