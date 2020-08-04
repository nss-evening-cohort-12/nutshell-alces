import flightsData from '../../helpers/data/flightsData';
import flightCard from '../flightMaker/flightMaker';
import utils from '../../helpers/utils';

import './flightList.scss';

const seeFlights = () => {
  flightsData.getFlights()
    .then((flights) => {
      let domString = `
        <h2 class="text-center">FLIGHT DASHBOARD</h2>
        <div class="container text-center">
          <button class="btn btn-light text-center mt-4" id="show-add-flight"><i class="fas fa-plus-square" style="color:#2767AD;"></i> Create A New Flight</button>
          <div class=" flight-container d-flex flex-wrap text-center justify-content-center">
        `;
      flights.forEach((flight) => {
        domString += flightCard.buildFlights(flight);
      });

      domString += `
          </div>
        </div>`;

      utils.printToDom('#flightDashboard', domString);
    })
    .catch((err) => console.error('could not print all flights', err));
};

const removeFlight = (e) => {
  e.preventDefault();
  const flightId = e.target.closest('.flight-card').id;
  flightsData.deleteFlight(flightId)
    .then(() => {
      seeFlights();
    })
    .catch((err) => console.error(err));
};

const flightEvents = () => {
  $('body').on('click', '.flight-nav', seeFlights);
  $('body').on('click', '.delete-flight', removeFlight);
};

export default { flightEvents, seeFlights };
