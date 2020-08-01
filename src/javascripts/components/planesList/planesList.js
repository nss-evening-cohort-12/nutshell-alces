import firebase from 'firebase/app';
import 'firebase/auth';

import planesData from '../../helpers/data/planesData';
import planesComponent from '../planes/planes';
import planeForm from '../addPlane/addPlane';
import editPlane from '../editPlane/editPlane';
import hideLanding from '../landingPage/landingPage';
import addFlights from '../flightDashboard/addFlights/addFlightLanding';
import './planesList.scss';

import utils from '../../helpers/utils';

const showPlanesAuth = () => {
  hideLanding.buildLandingPageButtons();
  planesData.getPlanes()
    .then((planes) => {
      let domString = `
                        <h2 class="text-center">Planes Serviced by Pan Am</h2>
                          <div class="text-center">
                          <button class="btn btn-light" id="add-plane"><i class="fas fa-plus-square" style="color:#2767AD;"></i> New Plane</button>
                          <div id="plane-card" class="d-flex flex-wrap">
                      `;
      planes.forEach((plane) => {
        domString += planesComponent.createPlaneCardAuth(plane);
      });

      domString += `    </div>
                      </div>`;

      utils.printToDom('#component-viewer', '');
      utils.printToDom('#flightDashboard', '');
      addFlights.hideAddFlights();
      // utils.printToDom('#crew', '');
      utils.printToDom('#component-viewer', domString);
    })
    .catch((err) => console.error('getPlanes does not work', err));
};

const showPlanesNoAuth = () => {
  hideLanding.buildLandingPageButtons();
  planesData.getPlanes()
    .then((planes) => {
      let domString = `
                        <h2 class="text-center">Planes Serviced by Pan Am</h2>
                          <div class="text-center">
                          <div id="plane-card" class="d-flex flex-wrap">
                      `;
      planes.forEach((plane) => {
        domString += planesComponent.createPlaneCardNoAuth(plane);
      });

      domString += `    </div>
                      </div>`;

      utils.printToDom('#component-viewer', '');
      utils.printToDom('#flightDashboard', '');
      addFlights.hideAddFlights();
      // utils.printToDom('#crew', '');
      utils.printToDom('#component-viewer', domString);
    })
    .catch((err) => console.error('getPlanes does not work', err));
};

const viewPlanesEvent = (e) => {
  e.preventDefault();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      showPlanesAuth();
    } else {
      showPlanesNoAuth();
    }
  });
};

const removePlaneEvent = (e) => {
  const planeId = e.target.closest('.plane-card').id;
  planesData.deletePlane(planeId)
    .then(() => {
      showPlanesAuth();
    })
    .catch((err) => console.error('removePlane did not work', err));
};

const addPlaneEvent = (e) => {
  e.preventDefault();

  const newPlane = {
    imgURL: $('#add-plane-image').val(),
    name: $('#add-plane-name').val(),
    type: $('#add-plane-type').val(),
    service: utils.getDate(),
  };

  planesData.addPlane(newPlane)
    .then(() => {
      showPlanesAuth();
      utils.printToDom('#component-editor', '');
      // utils.printToDom('#crew', '');
    })
    .catch((err) => console.error('addPlane does not work', err));
};

const showPlaneEditForm = (e) => {
  editPlane.editPlaneForm(e.target.closest('.plane-card').id);
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
      showPlanesAuth();
      utils.printToDom('#component-editor', '');
      // utils.printToDom('#crew', '');
    })
    .catch((err) => console.error('editPlane did not work', err));
};

const planeEvents = () => {
  $('body').on('click', '.delete-plane', removePlaneEvent);
  $('body').on('click', '#add-plane', planeForm.addPlaneForm);
  $('body').on('click', '#create-plane', addPlaneEvent);
  $('body').on('click', '.edit-plane', showPlaneEditForm);
  $('body').on('click', '#update-plane', editPlaneEvent);
  $('body').on('click', '.plane-nav', viewPlanesEvent);
};

export default { showPlanesAuth, showPlanesNoAuth, planeEvents };
