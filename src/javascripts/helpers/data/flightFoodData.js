import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getFlightFoods = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/flightFoods.json`)
    .then((response) => {
      const flightFoodsObjects = response.data;
      const flightFoods = [];
      Object.keys(flightFoodsObjects).forEach((flightFoodsId) => {
        flightFoodsObjects[flightFoodsId].id = flightFoodsId;
        flightFoods.push(flightFoodsObjects[flightFoodsId]);
      });
      resolve(flightFoods);
    })
    .catch((err) => reject(err));
});

const getFlightFoodsById = (flightFoodsId) => axios.get(`{baseUrl}/flightFoods/${flightFoodsId}.json`);

const deleteFlightFoods = (flightFoodsId) => axios.delete(`${baseUrl}/flightFoods/${flightFoodsId}.json`);

const addFlightFoods = (newFlightFoodsObj) => axios.post(`${baseUrl}/flightFoods.json`, newFlightFoodsObj);

export default {
  getFlightFoodsById,
  deleteFlightFoods,
  addFlightFoods,
  getFlightFoods,
};
