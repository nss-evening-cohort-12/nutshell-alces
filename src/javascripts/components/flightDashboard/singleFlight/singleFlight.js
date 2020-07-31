import flightsList from '../../flightsList/flightsList';
import smash from '../../../helpers/data/smash';
import utils from '../../../helpers/utils';
import './singleFlight.scss';

const viewSingleFlight = (e) => {
  const flightId = e.target.closest('.flight-card').id;
  smash.getSingleFlightInfo(flightId)
    .then((flight) => {
      console.error(flight.crew);
      let domString = `
      <div class="row-single">
      <div class="card text-center" id=${flightId} style="width: 18rem;">
      <img class="card-img-top" src="${flight.plane.data.imgURL}" alt="Card image cap">
      
    
  
  <ul class="list-group list-group-flush">
  <h5 class="card-title">Flight # 1234</h5>
    <li class="list-group-item">Origin: ${flight.origin.data.name}</li>
    <li class="list-group-item">Destination: ${flight.destination.data.name}</li>
    <li class="list-group-item">Plane: ${flight.plane.data.type}</li>`;

      flight.crew.forEach((crew) => {
        if (crew.title === 'Pilot') {
          domString += `<li class="list-group-item">pilot: ${crew.name}</li>`;
        } else if (crew.title === 'Air Stewardess') {
          domString += `<li class="list-group-item">Air Stewardess: ${crew.name}</li>`;
        }
      });
      domString += `
      </ul>
      <div class="card-body">
        <a href="#flightDashboard" class="flight-home card-link">Return to All Flights</a>
      </div>
    </div>
    </div>
      `;
      utils.printToDom('#singleFlight', domString);
      utils.printToDom('#flightDashboard', '');
    })
    .catch((err) => console.error('could not show single flight', err));
};

const resetDashboard = (e) => {
  e.preventDefault();
  utils.printToDom('#singleFlight', '');
  flightsList.seeFlights();
};

const singleFlightEvents = () => {
  $('body').on('click', '.flight-card', viewSingleFlight);
  $('body').on('click', '.flight-home', resetDashboard);
};

export default { viewSingleFlight, singleFlightEvents };
