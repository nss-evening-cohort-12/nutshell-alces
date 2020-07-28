import utils from '../../../helpers/utils';
import flightPath from '../flightPath/flightPath';
import pilots from '../crew/pilots';
import fas from '../crew/flightAtten';
import planes from '../planes/flightPlanes';
import airportData from '../../../helpers/data/airportData';

// THIS FUNCTION WILL HIDE ALL DIVS RELATED TO ADD FLIGHTS
const hideAddFlights = () => {
  utils.printToDom('#add-flights', '');
  utils.printToDom('#destination', '');
  utils.printToDom('#crew', '');
  utils.printToDom('#planes', '');
  utils.printToDom('#crewF', '');
};

const buildAddFlightLanding = () => {
  const domString = `<div class="text-center">
                      <button type="submit" class="btn btn-secondary" type="submit" id="flight-adder">Add Flight!</button>
                    </div>`;
  utils.printToDom('#add-flights', domString);

  // ADD NEW DIVS TO ADDFLIGHTS HERE
  fas.buildFaDiv();
  pilots.buildPilotDiv();
  flightPath.buildDestinationDiv();
  planes.buildPlanesDiv();
};

const getOriginAirport = (originId) => {
  airportData.getAirportById(originId)
    .then((response) => {
      const originAirport = response.data;
      return originAirport;
    })
    .catch((err) => console.error(err));
};

const addFlight = (e) => {
  e.preventDefault();
  const originId = $('#origin-selector').val();
  const originAirport = getOriginAirport(originId);
  console.error(originAirport);

  // const destination = $('#destination-selector').val();
  // const plane = $('#plane-select').val();
};

const addFlightEvents = () => {
  $('body').on('click', '#flight-adder', addFlight);
};
export default { buildAddFlightLanding, hideAddFlights, addFlightEvents };
