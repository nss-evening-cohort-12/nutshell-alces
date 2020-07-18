import editCrew from '../editCrew/editCrew';
import addCrew from '../addCrew/addCrew';
import crewComponent from '../crew/crew';

import crewData from '../../helpers/data/crewData';

import utils from '../../helpers/utils';

const buildCrew = () => {
  crewData.getCrew()
    .then((crews) => {
      let domString = `
        <div class="crew">
          <h2 class="text-center">Pan Am Crew</h2>
          <button class="btn btn-light" id="show-add-crew"><i class="fas fa-plus-square" style="color:#2767AD;"></i>New Crew</button>
          <div class="d-flex flex-wrap">
          `;
      crews.forEach((crew) => {
        domString += crewComponent.crewCardMaker(crew);
      });

      domString += '</div></div>';

      utils.printToDom('#crew', domString);
    })
    .catch((err) => console.error('no call no show', err));
};

const addCrewEvent = (e) => {
  e.preventDefault();

  const newCrew = {
    imageUrl: $('#add-crew-image').val(),
    name: $('#add-crew-name').val(),
    title: $('#add-crew-title').val(),
  };

  crewData.addCrew(newCrew)
    .then(() => {
      buildCrew();
      utils.printToDom('#new-crew', '');
    })
    .catch((err) => console.error('not hired', err));
};

const removeCrewEvent = (e) => {
  const crewId = e.target.closest('.crew-card').id;
  crewData.deleteCrew(crewId)
    .then((response) => {
      console.warn('crew terminated', response);

      buildCrew();
    })
    .catch((err) => console.error('not terminated', err));
};

const editCrewEvent = (e) => {
  e.preventDefault();

  const crewId = e.target.closest('.edit-crew').id;
  const editedCrew = {
    imageUrl: $('#add-crew-image').val(),
    name: $('#edit-crew-name').val(),
    title: $('#edit-crew-title').val(),
  };

  crewData.updateCrew(crewId, editedCrew)
    .then(() => {
      buildCrew();
      utils.printToDom('#edit-crew', '');
    })
    .catch((err) => console.error('could not edit crew', err));
};

const showCrewEditForm = (e) => {
  editCrew.showCrewForm(e.target.closest('.crew-card').id);
};

const crewEvents = () => {
  $('body').on('click', '.delete-crew', removeCrewEvent);
  $('body').on('click', '#show-add-crew', addCrew.showCrewAddForm);
  $('body').on('click', '#crew-creator', addCrewEvent);
  $('body').on('click', '.edit-crew', showCrewEditForm);
  $('body').on('click', '#crew-editor', editCrewEvent);
};

export default { buildCrew, crewEvents };
