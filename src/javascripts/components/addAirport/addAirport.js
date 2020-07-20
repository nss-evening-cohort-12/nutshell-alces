import utils from '../../helpers/utils';

const showForm = () => {
  const domString = `
    <form>
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
      <button type="submit" class="btn btn-primary" id="airport-creator">Submit</button>
    </form>
  `;

  utils.printToDom('#new-airport', domString);
};

export default { showForm };
