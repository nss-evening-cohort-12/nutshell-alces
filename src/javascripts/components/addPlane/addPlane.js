import utils from '../../helpers/utils';

const addPlaneForm = () => {
  const domString = `
                      <form>
                        <div class="form-group">
                          <label for="plane-image">Name:</label>
                          <input type="imageUrl" class="form-control" id="add-plane-image" placeholder="Image Url">
                        </div>
                        <div class="form-group">
                          <label for="plane-name">Name:</label>
                          <input type="text" class="form-control" id="add-plane-name" placeholder="Name of Plane">
                        </div>
                        <div class="form-group">
                          <label for="plane-type">Type:</label>
                          <input type="text" class="form-control" id="add-plane-type" placeholder="Type of Plane">
                        </div>
                        <button type="submit" class="btn btn-primary" id="add-plane">Submit</button>
                      </form>
                    `;

  utils.printToDom('#new-plane', domString);
};

export default { addPlaneForm };

/*
<form>
  <div class="form-group">
    <label for="plane-image">Name:</label>
    <input type="imageUrl" class="form-control" id="add-plane-image" placeholder="Image Url">
  </div>
  <div class="form-group">
    <label for="plane-name">Name:</label>
    <input type="text" class="form-control" id="add-plane-name" placeholder="Name of Plane">
  </div>
  <div class="form-group">
    <label for="plane-type">Type:</label>
    <input type="text" class="form-control" id="add-plane-type" placeholder="Type of Plane">
  </div>
  <button type="submit" class="btn btn-primary" id="add-plane">Submit</button>
</form>
*/
