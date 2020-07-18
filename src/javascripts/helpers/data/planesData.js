import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPlanes = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/planes.json`)
    .then((response) => {
      const planeObjects = response.data;
      const planes = [];
      Object.keys(planeObjects).forEach((planeId) => {
        planeObjects[planeId].id = planeId;
        planes.push(planeObjects[planeId]);
      });
      resolve(planes);
    })
    .catch((err) => reject(err));
});

export default { getPlanes };
