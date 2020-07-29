import airportData from './airportData';
import flightsData from './flightsData';
import planesData from './planesData';

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
            resolve(flight);
          });
        });
      });
    })
    .catch((err) => reject(err));
});

export default { getSingleFlightInfo };
