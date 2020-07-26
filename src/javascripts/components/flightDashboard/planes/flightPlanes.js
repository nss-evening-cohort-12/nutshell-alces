import getPlanes from '../../../helpers/data/planesData';

import utils from '../../../helpers/utils';

import './flightPlanes.scss';

const buildPlanesDiv = () => {
  getPlanes.getPlanes()
    .then((planes) => {
      let domString = `
  <div class="flightPlanes">
    <h2 class="text-center header">Airplane</h2>
    <div class="text-center dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="planeDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Select
      </button>
      <div class="dropdown-menu" aria-labelledby="planeDropdown">`;

      planes.forEach((plane) => {
        domString += `
        <a class="dropdown-item" id="${plane.id}" href="#">${plane.type}</a>
      `;
      });
      domString += `
      </div>
    </div>
  </div>
  `;
      utils.printToDom('#planes', domString);
    })
    .catch((err) => console.error(err));
};

export default { buildPlanesDiv };
