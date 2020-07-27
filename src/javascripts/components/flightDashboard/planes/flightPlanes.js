import getPlanes from '../../../helpers/data/planesData';

import utils from '../../../helpers/utils';

import './flightPlanes.scss';

const buildPlanesDiv = () => {
  getPlanes.getPlanes()
    .then((planes) => {
      let domString = `
      <div class="flightPlanes">
      <h2 class="text-center">Airplanes</h2>
       <div class="d-flex justify-content-center flex-column plane-dropdown">
       <div class="input-group mb-3">
       <div class="input-group-prepend">
         <label class="input-group-text" for="inputGroupSelect01">Plane</label>
       </div>
       <select class="custom-select" id="inputGroupSelect01">
         <option selected>Choose...</option>`;

      planes.forEach((plane) => {
        domString += `
          <option value="${plane.id}">${plane.type}</option>
      `;
      });
      domString += `
        </select>
      </div>
  `;
      utils.printToDom('#planes', domString);
    })
    .catch((err) => console.error(err));
};

export default { buildPlanesDiv };
