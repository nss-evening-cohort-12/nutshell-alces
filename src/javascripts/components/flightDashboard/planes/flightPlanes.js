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
       <select class="custom-select">
         <option selected>Choose...</option>`;

      planes.forEach((plane) => {
        domString += `
          <option class="plane-list-item" id="${plane.id}">${plane.type}</option>
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

const getSelectedPlaneId = (e) => {
  console.warn('you clicked');
  const selectedPlaneId = e.target.closest.id;
  console.warn(selectedPlaneId);
};

const flightPlaneEvents = () => {
  $('body').on('click', '.plane-list-item', getSelectedPlaneId);
};

export default { buildPlanesDiv, getSelectedPlaneId, flightPlaneEvents };
