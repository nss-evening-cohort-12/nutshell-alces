import utils from '../../helpers/utils';

const showCrewAddForm = () => {
  const domString = `
  <form> 
    <div class="form-group">
      <label for "add-crew-image">Image:</label>
      <input type="imageUrl" class"form-control" id="add-crew-image" placeholder="Image Url">
    </div>
    <div class="form-group">
      <label for "add-crew-name">Name:</label>
      <input type="text" class"form-control" id="add-crew-name" placeholder="First Last">
    </div>
    <div class="form-group">
      <label for "add-crew-title">Title:</label>
      <input type="text" class"form-control" id="add-crew-title" placeholder="Job Title">
    </div>
      <button type="submit" class="btn btn-light" id="crew-creator">Add Crew</button>
    </form>
  `;

  utils.printToDom('#component-editor', '');
  utils.printToDom('#component-editor', domString);
};

export default { showCrewAddForm };
