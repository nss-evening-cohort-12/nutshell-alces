import utils from '../../../helpers/utils';
import './flightPath.scss';
import airportData from '../../../helpers/data/airportData';

const buildDestinationDiv = () => {
  let domString = `<div class="flightPath">
                    <div class="path-container-fluid">
                      <h2 class="text-center header">Flight Path</h2>
                      <div class="originDiv">
                        <div class="dropdown">
                          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Origin
                          </button>
                          <div class="dropdown-menu" id="origin-dropdown" aria-labelledby="dropdownMenuButton">
  `;
  airportData.getAirports()
    .then((airports) => {
      airports.forEach((airport) => {
        domString += `
                            <a class="dropdown-item" href="#">${airport.name}</a>`;
      });
      domString += `
                          </div>
                        </div>
                      </div>
                      <div class="destinationDiv">
                        <div class="dropdown">
                          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Destination
                          </button>
                          <div class="dropdown-menu" id="destination-dropdown" aria-labelledby="dropdownMenuButton">`;

      airports.forEach((airport) => {
        domString += `
                            <a class="dropdown-item" href="#">${airport.name}</a>`;
      });
      domString += `
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`;

      utils.printToDom('#destination', domString);
    })
    .catch((err) => console.error(err));
};

export default { buildDestinationDiv };
