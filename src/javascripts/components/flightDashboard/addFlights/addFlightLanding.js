import utils from '../../../helpers/utils';
import flightPath from '../flightPath/flightPath';
import pilots from '../crew/pilots';
import fas from '../crew/flightAtten';
import planes from '../planes/flightPlanes';

// THIS FUNCTION WILL HIDE ALL DIVS RELATED TO ADD FLIGHTS
const hideAddFlights = () => {
  utils.printToDom('#add-flights', '');
  utils.printToDom('#destination', '');
  utils.printToDom('#crew', '');
  utils.printToDom('#planes', '');
};

const buildAddFlightLanding = () => {
  const domString = `<div class="text-center">
                      <h1>Add A New Flight</h1>
                      </div>`;
  utils.printToDom('#add-flights', domString);

  // ADD NEW DIVS TO ADDFLIGHTS HERE
  fas.buildFlightAttenDiv();
  pilots.buildPilotDiv();
  flightPath.buildDestinationDiv();
  planes.buildPlanesDiv();
};

export default { buildAddFlightLanding, hideAddFlights };
