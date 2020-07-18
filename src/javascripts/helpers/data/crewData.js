import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getCrew = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/crew.json`)
    .then((response) => {
      const crewObjects = response.data;
      const crew = [];
      Object.keys(crewObjects).forEach((crewId) => {
        crewObjects[crewId].id = crewId;
        crew.push(crewObjects[crewId]);
      });
      resolve(crew);
    })
    .catch((err) => reject(err));
});

const deleteCrew = (crewId) => axios.delete(`${baseUrl}/crew/${crewId}.json`);
const addCrew = (newCrewObj) => axios.post(`${baseUrl}/crew.json`, newCrewObj);
const editCrew = (crewId, editedCrew) => axios.put(`${baseUrl}/crew/${crewId}.json`, editedCrew);

export default {
  getCrew,
  deleteCrew,
  addCrew,
  editCrew,
};
