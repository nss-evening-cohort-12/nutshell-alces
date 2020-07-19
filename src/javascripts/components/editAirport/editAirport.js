import airportData from '../../helpers/data/airportData';
import utils from '../../helpers/utils';

const showForm = (airportId) => {
  airportData.getAirportById(airportId)
    .then((response) => {
      const airport = response.data;

      const domString = `
        <h2>Edit Airport</h2>
        <form class="edit-airport" id=${airportId}>
          <div class="form-group">
            <label for="edit-airport-pic">Picture</label>
            <input type="imageUrl" class="form-control" id="edit-airport-pic" value=${airport.imgURL}>
          </div>
          <div class="form-group">
            <label for="edit-airport-name">Name</label>
            <input type="text" class="form-control" id="edit-airport-name" value=${airport.name}>
          </div>
          <div class="form-group">
            <label for="edit-airport-location">Location</label>
            <input type="text" class="form-control" id="edit-airport-location" value=${airport.location}>
          </div>
          <div class="form-group">
            <label for="edit-airport-website">Website</label>
            <input type="url" class="form-control" id="edit-airport-website" value=${airport.webURL}>
          </div>
          <button type="submit" class="btn btn-primary" id="airport-editor">Update</button>
        </form>
      `;
      utils.printToDom('#edit-airport', domString);
    })
    .catch((err) => console.error('get airport failed', err));
};

export default { showForm };
