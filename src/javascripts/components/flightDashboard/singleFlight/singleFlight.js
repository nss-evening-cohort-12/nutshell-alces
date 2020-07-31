import flightsList from '../../flightsList/flightsList';
import smash from '../../../helpers/data/smash';
import utils from '../../../helpers/utils';
import flightCrewData from '../../../helpers/data/flightCrewData';
import './singleFlight.scss';

const viewSingleFlight = (e) => {
  const flightId = e.target.closest('.flight-card').id;
  smash.getSingleFlightInfo(flightId)
    .then((flight) => {
      console.error(flight);
      let domString = `
      <div class="row-single">
      <div class="card text-center" id=${flightId} style="width: 18rem;">
      <img class="card-img-top" src="${flight.plane.data.imgURL}" alt="Card image cap">
      
    
  
  <ul class="list-group list-group-flush">
  <h5 class="card-title">Flight ${flight.flightNumber}</h5>
    <li class="list-group-item">Origin: ${flight.origin.data.name}</li>
    <li class="list-group-item">Destination: ${flight.destination.data.name}</li>
    <li class="list-group-item">Plane: ${flight.plane.data.type}</li>`;

      flight.crew.forEach((crew) => {
        if (crew.title === 'Pilot') {
          domString += `
            <li class="list-group-item crew-quarters" id="${crew.id}">pilot: ${crew.name} <br><button class="btn remove-crew"><i class="fas fa-user-times"></i></i></button></li>`;
        } else if (crew.title === 'Air Stewardess') {
          domString += `
            <li class="list-group-item crew-quarters" id="${crew.id}">Air Stewardess: ${crew.name} <button class="btn remove-crew"><i class="fas fa-user-times"></i></i></button></li>`;
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

const removeCrewFromFlight = (e) => {
  e.preventDefault();
  const crewId = e.target.closest('.crew-quarters').id;
  const flightId = e.target.closest('.flight-card').id;

  flightCrewData.getFlightCrew()
    .then((flightCrew) => {
      flightCrew.forEach((crewMember) => {
        if (crewMember.crewId === crewId && crewMember.flightId === flightId) {
          flightCrewData.deleteFlightCrew(crewMember.id)
            .then(() => {
              utils.printToDom('#singleFlight', '');
              viewSingleFlight(e);
            });
        }
      });
    })
    .catch((err) => console.error(err));
};

const resetDashboard = (e) => {
  e.preventDefault();
  utils.printToDom('#singleFlight', '');
  flightsList.seeFlights();
};

const singleFlightEvents = () => {
  $('body').on('click', '.flight-card', viewSingleFlight);
  $('body').on('click', '.flight-home', resetDashboard);
  $('body').on('click', '.remove-crew', removeCrewFromFlight);
};

export default { viewSingleFlight, singleFlightEvents };
