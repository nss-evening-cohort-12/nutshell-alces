import flightsData from '../../helpers/data/flightsData';
import flightCard from '../flightMaker/flightMaker';
import utils from '../../helpers/utils';

const seeFlights = () => {
  flightsData.getFlights()
    .then((flights) => {
      let domString = `
        <h2 class="text-center">FLIGHT DASHBOARD</h2>
        <div class="container text-center">
            <button class="btn btn-light text-center mt-4" id="show-add-flight"><i class="fas fa-plus-square" style="color:#2767AD;"></i> Create A New Flight</button>
            <div class="d-flex flex-wrap text-center">
        `;
      flights.forEach((flight) => {
        domString += flightCard.buildFlights(flight);
      });

      domString += `</div>
                  </div>`;

      utils.printToDom('#flightDashboard', domString);
    })
    .catch((err) => console.error('could not print all flights', err));
};

const flightEvents = () => {
  $('body').on('click', '.flight-nav', seeFlights);
};

export default { flightEvents, seeFlights };
