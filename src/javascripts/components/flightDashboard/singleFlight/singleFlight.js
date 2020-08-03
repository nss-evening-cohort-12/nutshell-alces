import flightsList from '../../flightsList/flightsList';
import smash from '../../../helpers/data/smash';
import utils from '../../../helpers/utils';
import flightCrewData from '../../../helpers/data/flightCrewData';
import './singleFlight.scss';

const viewSingleFlight = (flightId) => {
  smash.getSingleFlightInfo(flightId)
    .then((flight) => {
      let domString = `
      <div class="single-flight text-center">
        <button class="btn btn-light text-center mt-4 flight-home" id="return-button">Return to All Flights</button>
        <div class="card-deck">
          <div class="card text-center singleFlightCard details-card" id=${flightId} style="width: 18rem; border: 0;">
            <img class="card-img-top" src="${flight.plane.data.imgURL}" alt="Card image cap">
            <ul class="list-group list-group-flush">
              <h5 class="card-title">Flight ${flight.flightNumber}</h5>
              <li class="list-group-item">Origin: ${flight.origin.data.name}</li>
              <li class="list-group-item">Destination: ${flight.destination.data.name}</li>
              <li class="list-group-item">Plane: ${flight.plane.data.type}</li>`;

      domString += `
            </ul>
          </div>
      `;

      smash.getFlightCrewInfo(flightId)
        .then((flightWithCrew) => {
          domString += `
            <div class="row-single">
              <div class="card text-center flightCrew-card singleFlightCard" id=${flightId} style="width: 18rem;">
                <div class="card-body p-0">
                  <ul class="list-group list-group-flush">`;
          flightWithCrew.crew.forEach((crew) => {
            if (crew.title === 'Pilot') {
              domString += `<li class="list-group-item crew-quarters" id="${crew.id}">Pilot: ${crew.name} <br><button class="btn remove-crew"><i class="fas fa-user-times"></i></i></button></li>`;
            } else if (crew.title === 'Air Stewardess') {
              domString += `<li class="list-group-item crew-quarters" id="${crew.id}">Air Stewardess: ${crew.name} <button class="btn remove-crew"><i class="fas fa-user-times"></i></i></button></li>`;
            }
          });
          domString += `
                  </ul>
                </div>
              </div>
            </div>`;

          smash.getFoodFlightInfo(flightId)
            .then((flightWithFood) => {
              domString += `
                <div class="row-single">
                  <div class="card text-center singleFlightCard" id=${flightId} style="width: 18rem;">
                    <div class="card-body p-0">
                      <ul class="list-group list-group-flush">`;

              flightWithFood.foods.forEach((food) => {
                console.warn(food.name);
                if (food.type === 'meal') {
                  domString += `<li class="list-group-item">Meal: ${food.name} $${food.price}</li>`;
                } else if (food.type === 'snack') {
                  domString += `<li class="list-group-item">Snack: ${food.name} $${food.price}</li>`;
                }
              });

              domString += `
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              `;

              utils.printToDom('#singleFlight', domString);
              utils.printToDom('#flightDashboard', '');
            });
        });
    })
    .catch((err) => console.error('could not show single flight', err));
};

const removeCrewFromFlight = (e) => {
  e.preventDefault();
  console.error(e);
  const crewId = e.target.closest('.crew-quarters').id;
  const flightId = e.target.closest('.crew-card').id;

  flightCrewData.getFlightCrew()
    .then((flightCrew) => {
      flightCrew.forEach((crewMember) => {
        if (crewMember.crewId === crewId && crewMember.flightId === flightId) {
          flightCrewData.deleteFlightCrew(crewMember.id)
            .then(() => {
              viewSingleFlight(flightId);
            });
        }
      });
    })
    .catch((err) => console.error(err));
};

const viewEvent = (e) => {
  const flightId = e.target.closest('.flight-card').id;
  viewSingleFlight(flightId);
};

const resetDashboard = (e) => {
  e.preventDefault();
  utils.printToDom('#singleFlight', '');
  utils.printToDom('#singleFlightMenu', '');
  flightsList.seeFlights();
};

const singleFlightEvents = () => {
  $('body').on('click', '.flight-card', viewEvent);
  $('body').on('click', '.flight-home', resetDashboard);
  $('body').on('click', '.remove-crew', removeCrewFromFlight);
};

export default { viewSingleFlight, singleFlightEvents };
