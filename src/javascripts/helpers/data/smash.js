import airportData from './airportData';
import flightsData from './flightsData';
import planesData from './planesData';
import crewData from './crewData';
import flightCrewData from './flightCrewData';

const getSingleFlightInfo = (flightId) => new Promise((resolve, reject) => {
  flightsData.getFlightsById(flightId)
    .then((response) => {
      const flight = response.data;

      planesData.getPlaneById(flight.planeId).then((plane) => {
        flight.plane = plane;

        airportData.getAirportById(flight.originId).then((origin) => {
          flight.origin = origin;

          airportData.getAirportById(flight.destinationId).then((destination) => {
            flight.destination = destination;

            crewData.getCrew().then((allCrew) => {
              flightCrewData.getFlightCrew().then((allFlightCrew) => {
                flight.crew = [];
                const flightCrew = allFlightCrew.filter((crewMember) => crewMember.flightId === flightId);

                allCrew.forEach((oneCrew) => {
                  const crew = { ...oneCrew };
                  const isEmployed = flightCrew.find((crewMember) => crewMember.crewId === crew.id);
                  if (isEmployed === undefined) {
                    crew.flightId = '';
                  } else {
                    crew.flightId = isEmployed.flightId;
                  }

                  if (crew.flightId === flightId) {
                    flight.crew.push(crew);
                  }
                });
                resolve(flight);
              });
            });
          });
        });
      });
    })
    .catch((err) => reject(err));
});

export default { getSingleFlightInfo };
