import utils from '../../helpers/utils';
import 'bootstrap';

const addPlanePopup = () => {
  const domString = `
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-center" id="exampleModalLabel">Add Plane</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="form-group">
      <label for="add-plane-image">Image</label>
      <input type="imageUrl" class="form-control" id="add-plane-image" placeholder="Image Url">
    </div>
    <div class="form-group">
      <label for="add-plane-name">Name</label>
      <input type="text" class="form-control" id="add-plane-name" placeholder="Name of Plane">
    </div>
    <div class="form-group">
      <label for="add-plane-type">Type</label>
      <input type="text" class="form-control" id="add-plane-type" placeholder="Type of Plane">
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" id="create-plane" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
`;
  utils.printToDom('#modals', domString);
};

export default { addPlanePopup };
