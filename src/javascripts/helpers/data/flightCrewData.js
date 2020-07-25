import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getFlightCrew = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/flightCrew.json`)
    .then((response) => {
      const flightCrewObjects = response.data;
      const flightCrew = [];
      Object.keys(flightCrewObjects).forEach((flightCrewId) => {
        flightCrewObjects[flightCrewId].id = flightCrewId;
        flightCrew.push(flightCrewObjects[flightCrewId]);
      });
      resolve(flightCrew);
    })
    .catch((err) => reject(err));
});

const getFlightCrewById = (flightCrewId) => axios.get(`${baseUrl}/flightCrew/${flightCrewId}.json`);

const deleteFlightCrew = (flightCrewId) => axios.delete(`${baseUrl}/flightCrew/${flightCrewId}.json`);

const addFlightCrew = (newFlightCrewObj) => axios.post(`${baseUrl}/flightCrew.json`, newFlightCrewObj);

export default {
  getFlightCrew,
  getFlightCrewById,
  deleteFlightCrew,
  addFlightCrew,
};
