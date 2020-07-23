import crewData from '../../helpers/data/crewData';

import utils from '../../helpers/utils';
import './editCrew.scss';

const showCrewForm = (crewId) => {
  crewData.getCrewById(crewId)
    .then((response) => {
      const crew = response.data;

      const domString = `
        <h2 class="text-center"> Edit Crew Member</h2>
        <form class="crew-card" id=${crewId}> 
          <div class="form-group">
            <label for "edit-crew-image">Image:</label>
            <input type="imageUrl" class="form-control" id="edit-crew-image" placeholder="Image Url" value=${crew.imageUrl}>
          </div>
          <div class="form-group">
            <label for "edit-crew-name">Name:</label>
            <input type="text" class="form-control" id="edit-crew-name" placeholder="First Last" value="${crew.name}">
          </div>
          <div class="form-group">
            <label for "edit-crew-title">Title:</label>
            <input type="text" class="form-control" id="edit-crew-title" placeholder="Job Title" value="${crew.title}">
          </div>
          <button type="submit" class="btn btn-light" id="crew-editor">Confirm Changes</button>
        </form>
      `;

      utils.printToDom('#component-editor', '');
      utils.printToDom('#component-editor', domString);
    })
    .catch((err) => console.error('get crew failed', err));
};

export default { showCrewForm };
