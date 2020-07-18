// import editCrew from '../editCrew/editCrew';
import crewComponent from '../crew/crew';

import crewData from '../../helpers/data/crewData';

import utils from '../../helpers/utils';

// const editCrewEvent = (e) => {
//   e.preventDefault();

//   const crewId = e.target.closest('.edit-crew').id;
//   const editedCrew = {
//     name: $('#edit-crew-name').val(),
//     title: $('#edit-crew-title').val(),
//     image: $('#edit-crew-image').val(),
//   };

//   crewData.updateCrew(crewId, editedCrew)
//     .then(() => {
//       buildCrew();
//       utils.printToDom('#edit-crew', '');
//     })
//     .catch((err) => console.error('could not edit crew', err));
// };

// const showCrewEditForm = (e) => {
//   editCrew.showCrewForm(e.target.closest('.crew-card').id),
// };

const buildCrew = () => {
  crewData.getCrew()
    .then((crews) => {
      let domString = `
        <div class="crew">
          <h2 class="text-center">Pan Am Crew</h2>
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

const removeCrewEvent = (e) => {
  const crewId = e.target.closest('.crew-card').id;
  crewData.deleteCrew(crewId)
    .then((response) => {
      console.warn('crew terminated', response);

      buildCrew();
    })
    .catch((err) => console.error('not terminated', err));
};

const crewEvents = () => {
  $('body').on('click', '.delete-crew', removeCrewEvent);
};

export default { buildCrew, crewEvents };
