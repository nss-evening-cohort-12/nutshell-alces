const { default: flightsData } = require('./flightsData');
const { default: planesData } = require('./planesData');

const getSingleFlightInfo = (flightId) => new Promise((resolve, reject) => {
  flightsData.getFlightsById(flightId)
    .then((response) => {
      const flight = response.data;
      console.warn(flight);
      planesData.getPlaneById(flight.planeId).then((plane) => {
        flight.plane = plane;
        console.warn(plane);
        resolve(flight);
      });
    })
    .catch((err) => reject(err));
});

export default { getSingleFlightInfo };
