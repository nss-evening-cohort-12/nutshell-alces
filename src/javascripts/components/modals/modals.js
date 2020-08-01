import utils from '../../helpers/utils';
import 'bootstrap';

const resetPlaneModal = () => {
  document.getElementById('add-plane-image').value = '';
  document.getElementById('add-plane-type').value = '';
  document.getElementById('add-plane-name').value = '';
};

const resetCrewModal = () => {
  document.getElementById('add-crew-image').value = '';
  document.getElementById('add-crew-name').value = '';
  document.getElementById('add-crew-title').value = '';
};

const resetAirportModal = () => {
  document.getElementById('airport-name').value = '';
  document.getElementById('airport-location').value = '';
  document.getElementById('airport-pic').value = '';
  document.getElementById('airport-website').value = '';
};

const addPlanePopup = () => {
  const domString = `
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Plane</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="form-group">
      <label for="add-plane-image">Name:</label>
      <input type="imageUrl" class="form-control" id="add-plane-image" placeholder="Image Url">
    </div>
    <div class="form-group">
      <label for="add-plane-name">Name:</label>
      <input type="text" class="form-control" id="add-plane-name" placeholder="Name of Plane">
    </div>
    <div class="form-group">
      <label for="add-plane-type">Type:</label>
      <input type="text" class="form-control" id="add-plane-type" placeholder="Type of Plane">
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" id="create-plane" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
`;
  utils.printToDom('#modals', domString);
};

const addCrewPopup = () => {
  const domString = `
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Crew</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <div class="form-group">
      <label for "add-crew-image">Image:</label>
      <input type="imageUrl" class="form-control" id="add-crew-image" placeholder="Image Url">
    </div>
      <div class="form-group">
        <label for "add-crew-name">Name:</label>
        <input type="text" class="form-control" id="add-crew-name" placeholder="First Last">
      </div>
      <div class="form-group">
        <label for "add-crew-title">Title:</label>
        <input type="text" class="form-control" id="add-crew-title" placeholder="Job Title">
      </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" id="crew-creator" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
    `;
  utils.printToDom('#modals', domString);
};

const addAirportPopup = () => {
  const domString = `
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Airport</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
        <div class="form-group">
        <label for="airport-pic">Picture</label>
        <input type="imageUrl" class="form-control" id="airport-pic">
      </div>
        <div class="form-group">
          <label for="airport-name">Name</label>
          <input type="text" class="form-control" id="airport-name">
        </div>
        <div class="form-group">
          <label for="airport-location">Location</label>
          <input type="text" class="form-control" id="airport-location">
        </div>
        <div class="form-group">
          <label for="airport-website">Website</label>
          <input type="url" class="form-control" id="airport-website">
        </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" id="airport-creator" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
    `;
  utils.printToDom('#modals', domString);
};

export default {
  addPlanePopup,
  addCrewPopup,
  resetPlaneModal,
  resetCrewModal,
  addAirportPopup,
  resetAirportModal,
};
