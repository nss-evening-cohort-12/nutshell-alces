import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getFlights = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/flights.json`)
    .then((response) => {
      const flightObjects = response.data;
      const flights = [];
      Object.keys(flightObjects).forEach((flightId) => {
        flightObjects[flightId].id = flightId;
        flights.push(flightObjects[flightId]);
      });
      resolve(flights);
    })
    .catch((err) => reject(err));
});

const getFlightsById = (flightId) => axios.get(`{baseUrl}/flights/${flightId}.json`);

const deleteFlight = (flightId) => axios.delete(`${baseUrl}/flights/${flightId}.json`);

const addFlight = (newFlightObj) => axios.post(`${baseUrl}/flights.json`, newFlightObj);

export default {
  getFlights,
  getFlightsById,
  deleteFlight,
  addFlight,
};
