import utils from '../../../helpers/utils';
import flightPath from '../flightPath/flightPath';
import pilots from '../crew/pilots';
import fas from '../crew/flightAtten';
import planes from '../planes/flightPlanes';
import flightsData from '../../../helpers/data/flightsData';
import flightCrew from '../flightCrew/flightCrew';

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

const addFlight = (e) => {
  e.preventDefault();

  const originId = $('#origin-selector').val();
  const destinationId = $('#destination-selector').val();
  const planeId = $('#plane-select').val();

  const newFlightObj = {
    originId,
    destinationId,
    planeId,
  };

  flightsData.addFlight(newFlightObj)
    .then((response) => {
      const flightId = response.data.name;
      flightCrew.createFlightCrewTable(flightId);
      utils.printToDom('#add-flights', '');
      buildAddFlightLanding();
    })
    .catch((err) => console.error(err));
};

const addFlightEvents = () => {
  $('body').on('click', '#flight-adder', addFlight);
};
export default { buildAddFlightLanding, hideAddFlights, addFlightEvents };
