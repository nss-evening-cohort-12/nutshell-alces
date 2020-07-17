import axios from 'axios';
import apiKeys from "../apiKeys.json";

import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getCrew = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/crew.json`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

export default { getCrew };
