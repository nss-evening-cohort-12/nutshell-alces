import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

// axios.get(`${baseUrl}/airport.json`);

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

export default { getAirports };
