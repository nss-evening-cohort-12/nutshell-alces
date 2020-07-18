import axios from 'axios';
import apiKeys from "../apiKeys.json";

import utils from '../utils';

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

export default { getCrew };
