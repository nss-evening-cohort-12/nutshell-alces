import editCrew from '../editCrew/editCrew';
import addCrew from '../addCrew/addCrew';
import crewComponent from '../crew/crew';
import hideLanding from '../landingPage/landingPage';
import crewData from '../../helpers/data/crewData';

import './crewList.scss';
import utils from '../../helpers/utils';

const buildCrew = () => {
  hideLanding.buildLandingPageButtons();
  crewData.getCrew()
    .then((crews) => {
      let domString = `
          <h2 class="text-center">Pan Am Crew</h2>
          <div class="container text-center">
            <button class="btn btn-light text-center mt-4" id="show-add-crew"><i class="fas fa-plus-square" style="color:#2767AD;"></i>New Crew</button>
            <div class="d-flex flex-wrap text-center">
          `;
      crews.forEach((crew) => {
        domString += crewComponent.crewCardMaker(crew);
      });

      domString += `</div>
                  </div>`;

      utils.printToDom('#component-viewer', '');
      utils.printToDom('#component-viewer', domString);
    })
    .catch((err) => console.error('no call no show', err));
};

const viewCrewEvent = (e) => {
  e.preventDefault();
  $('#homepage').addClass('hide');
  buildCrew();
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

const showCrewEditForm = (e) => {
  editCrew.showCrewForm(e.target.closest('.crew-card').id);
  console.warn(e.target.closest('.crew-card').id);
};

const editCrewEvent = (e) => {
  e.preventDefault();
  const crewId = e.target.closest('.crew-card').id;

  const editedCrew = {
    imageUrl: $('#edit-crew-image').val(),
    name: $('#edit-crew-name').val(),
    title: $('#edit-crew-title').val(),
  };

  crewData.editCrew(crewId, editedCrew)
    .then(() => {
      buildCrew();
      utils.printToDom('#new-crew', '');
    })
    .catch((err) => console.error('could not edit crew', err));
};

const crewEvents = () => {
  $('body').on('click', '.delete-crew', removeCrewEvent);
  $('body').on('click', '#show-add-crew', addCrew.showCrewAddForm);
  $('body').on('click', '#crew-creator', addCrewEvent);
  $('body').on('click', '.edit-crew', showCrewEditForm);
  $('body').on('click', '#crew-editor', editCrewEvent);
  $('body').on('click', '.crew-nav', viewCrewEvent);
};

export default { buildCrew, crewEvents };
