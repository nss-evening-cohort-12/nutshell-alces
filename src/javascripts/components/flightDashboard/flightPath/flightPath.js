import utils from '../../../helpers/utils';
import './flightPath.scss';
import airportData from '../../../helpers/data/airportData';

const buildDestinationDiv = () => {
  let domString = `
    <div class="flightPath">
      <div class="path-container-fluid">
        <h2 class="text-center header">Flight Path</h2>
        <div class="originDiv">
          <div class="d-flex justify-content-center flex-column origin-dropdown">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" id="origin-input-text" for="inputGroupSelect01">Origin</label>
              </div>
              <select class="custom-select" id="origin-selector">
                <option value="" selected>Choose...</option>`;
  airportData.getAirports()
    .then((airports) => {
      airports.forEach((airport) => {
        domString += `
                <option class="origin-value" value="${airport.id}">${airport.name}</option>`;
      });
      domString += `
              </select>
            </div>
          </div>
          <div class="destinationDiv">
            <div class="d-flex justify-content-center flex-column destination-dropdown">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">Destination</label>
                </div>
                <select class="custom-select" id="destination-selector">
                  <option value="" selected>Choose...</option> `;

      airports.forEach((airport) => {
        domString += `
                  <option class="destination-value" value="${airport.id}">${airport.name}</option>`;
      });
      domString += `
                </select>
              </div>
              <div class="form-check">
                <input type="checkbox" id="domestic-flight" name="domestic-flight" value="domestic">
                <label for="domesticFlights"> Domestic</label>
                <input type="checkbox" id="international-flight" name="international-flight" value="international">
                <label for="internationalFlights"> International</label><br>
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
