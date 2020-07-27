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

const showSelectedPlaneEvent = (planeId) => {
  getPlanes.getPlaneById(planeId)
    .then((response) => {
      const plane = response.data;
      console.warn(response.data);
      const domString = `
                      <div id="${planeId}" class="plane-card">
                        <img class="card-img-top" src="${plane.imgURL}" alt="Card image cap">
                        <div class="plane-body">
                          <h5 class="plane-name">Name: ${plane.name}</h5>
                          <p class="plane-type">Type: ${plane.type}</p>
                          <p class="card-text"><small class="text-muted">Last Serviced: </small></p>
                        </div>
                      </div>
                      `;
      utils.printToDom('#planeItem', domString);
    })
    .catch((err) => console.error('could not display single plane', err));
};

const planeItems = document.querySelectorAll('.dropdown-item');
// eslint-disable-next-line no-restricted-syntax
for (const planeItem of planeItems) {
  planeItem.addEventListener('click', showSelectedPlaneEvent());
}

export default { buildPlanesDiv };
