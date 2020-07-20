import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getAirports = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/airport.json`)
    .then((response) => {
      const airportObjects = response.data;
      const airports = [];
      Object.keys(airportObjects).forEach((airportId) => {
        airportObjects[airportId].id = airportId;
        airports.push(airportObjects[airportId]);
      });
      resolve(airports);
    })
    .catch((err) => reject(err));
});

const getAirportById = (airportId) => axios.get(`${baseUrl}/airport/${airportId}.json`);

const deleteAirport = (airportId) => axios.delete(`${baseUrl}/airport/${airportId}.json`);

const addAirport = (newAirportObj) => axios.post(`${baseUrl}/airport.json`, newAirportObj);

const updateAirport = (airportId, editedAirport) => axios.put(`${baseUrl}/airport/${airportId}.json`, editedAirport);

export default {
  getAirports,
  deleteAirport,
  addAirport,
  getAirportById,
  updateAirport,
};
