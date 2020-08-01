import utils from '../../../helpers/utils';
import flightPath from '../flightPath/flightPath';
import pilots from '../crew/pilots';
import fas from '../crew/flightAtten';
import planes from '../planes/flightPlanes';
import flightsData from '../../../helpers/data/flightsData';
import flightCrew from '../flightCrew/flightCrew';
import flightFoods from '../flightFoods/flightFoods';

// THIS FUNCTION WILL HIDE ALL DIVS RELATED TO ADD FLIGHTS
const hideAddFlights = () => {
  utils.printToDom('#add-flights', '');
  utils.printToDom('#destination', '');
  utils.printToDom('#crew', '');
  utils.printToDom('#planes', '');
  utils.printToDom('#crewF', '');
  utils.printToDom('#singleFlight', '');
  utils.printToDom('#singleFlightMenu', '');
};

const buildAddFlightLanding = () => {
  const domString = `<div class="text-center" id="add-button">
                      <button type="submit" class="btn btn-secondary" type="submit" id="flight-adder">Add Flight!</button>
                      <p id="new-flight-validate"></p>
                    </div>`;
  utils.printToDom('#add-flights', domString);

  // ADD NEW DIVS TO ADDFLIGHTS HERE
  fas.buildFaDiv();
  pilots.buildPilotDiv();
  flightPath.buildDestinationDiv();
  planes.buildPlanesDiv();
};

const selectCheck = () => {
  const originId = $('#origin-selector').val();
  const destinationId = $('#destination-selector').val();
  const planeId = $('#plane-select').val();
  const pilot1 = $('#pilot1-selector').val();
  const pilot2 = $('#pilot2-selector').val();
  const fa1 = $('#fa1-selector').val();
  const fa2 = $('#fa2-selector').val();
  const fa3 = $('#fa3-selector').val();
  const fa4 = $('#fa4-selector').val();
  const domestic = $('#domestic-flight').prop('checked');
  const international = $('#international-flight').prop('checked');

  if (!pilot1 || !pilot2 || !fa1 || !fa2 || !fa3 || !fa4 || !originId || !destinationId || !planeId || (domestic === false && international === false)) {
    $('#new-flight-validate').fadeIn();
    $('#new-flight-validate').html('*All fields are required*');
    setTimeout(() => {
      $('#new-flight-validate').fadeOut();
    }, 2000);
    return false;
  }
  return true;
};

const addFlight = (e) => {
  e.preventDefault();

  if (selectCheck() === false) {
    return;
  }
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
      flightFoods.createFlightFoodsTable(flightId);
      utils.printToDom('#add-flights', '');
      buildAddFlightLanding();
    })
    .catch((err) => console.error(err));
};

const addFlightEvents = () => {
  $('body').on('click', '#flight-adder', addFlight);
};
export default { buildAddFlightLanding, hideAddFlights, addFlightEvents };
