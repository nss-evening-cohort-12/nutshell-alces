import planesData from '../../helpers/data/planesData';
import planesComponent from '../planes/planes';
import planeForm from '../addPlane/addPlane';
import editPlane from '../editPlane/editPlane';
import './planesList.scss';

import utils from '../../helpers/utils';

const showPlanes = () => {
  planesData.getPlanes()
    .then((planes) => {
      let domString = `
                        <h2 class="text-center">Planes Serviced by Pan Am</h2>
                        <button id="add-plane" class="btn btn-light">
                        <i class="fas fa-plus-square" style="color:#2767AD;"></i> New Plane</button>
                        <div id="plane-card" class="d-flex flex-wrap text-center">
                      `;
      planes.forEach((plane) => {
        domString += planesComponent.createPlaneCard(plane);
      });

      domString += '</div>';

      utils.printToDom('#plane-collection', domString);
    })
    .catch((err) => console.error('getPlanes does not work', err));
};

const removePlaneEvent = (e) => {
  const planeId = e.target.closest('.plane-card').id;
  planesData.deletePlane(planeId)
    .then(() => {
      showPlanes();
    })
    .catch((err) => console.error('removePlane did not work', err));
};

const addPlaneEvent = (e) => {
  e.preventDefault();

  const newPlane = {
    imageUrl: $('#add-plane-image').val(),
    name: $('#add-plane-name').val(),
    type: $('#add-plane-type').val(),
  };

  planesData.addPlane(newPlane)
    .then(() => {
      showPlanes();
      utils.printToDom('#new-plane', '');
    })
    .catch((err) => console.error('addPlane does not work', err));
};

const showPlaneEditForm = (e) => {
  editPlane.editPlaneForm(e.target.closest('.plane-card').id);
  console.warn(e.target.closest('.plane-card').id);
};

const editPlaneEvent = (e) => {
  e.preventDefault();
  const planeId = e.target.closest('.plane-card').id;

  const editedPlane = {
    imgURL: $('#edit-plane-image').val(),
    name: $('#edit-plane-name').val(),
    type: $('#edit-plane-type').val(),
  };

  planesData.editPlane(planeId, editedPlane)
    .then(() => {
      showPlanes();
      utils.printToDom('#new-plane', '');
    })
    .catch((err) => console.error('editPlane did not work', err));
};

const planeEvents = () => {
  $('body').on('click', '.delete-plane', removePlaneEvent);
  $('body').on('click', '#add-plane', planeForm.addPlaneForm);
  $('body').on('click', '#create-plane', addPlaneEvent);
  $('body').on('click', '.edit-plane', showPlaneEditForm);
  $('body').on('click', '#update-plane', editPlaneEvent);
};

export default { showPlanes, planeEvents };
