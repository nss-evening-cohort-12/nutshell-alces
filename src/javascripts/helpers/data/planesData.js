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

// const getFlightPlanesByPlaneId = (planeId) => new Promise((resolve, reject) => {
//   axios.get(`${baseUrl}/flights.json?orderBy="planeId"&equalTo="${planeId}"`)
//     .then((response) => {
//       const flightPlaneObj = response.data;
//       const flights = [];
//       Object.keys(flightPlaneObj).forEach((flightPlaneId) => {
//         flightPlaneObj[flightPlaneId].id = flightPlaneId;
//         flights.push(flightPlaneObj[flightPlaneId]);
//       });
//       resolve(flights);
//     })
//     .catch((err) => reject(err));
// });

const deletePlane = (planeId) => axios.delete(`${baseUrl}/planes/${planeId}.json`);

const addPlane = (newPlaneObject) => axios.post(`${baseUrl}/planes.json`, newPlaneObject);

const editPlane = (planeId, editedPlane) => axios.put(`${baseUrl}/planes/${planeId}.json`, editedPlane);

const getPlaneById = (planeId) => axios.get(`${baseUrl}/planes/${planeId}.json`);

export default {
  getPlanes,
  deletePlane,
  addPlane,
  getPlaneById,
  editPlane,
};
