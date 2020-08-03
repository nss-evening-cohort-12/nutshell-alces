import utils from '../../../helpers/utils';
import './crew.scss';
import pilots from '../../../helpers/data/crewData';

const buildPilotDiv = () => {
  pilots.getCrew()
    .then((crew) => {
      let domString = `
      <div class="crewPilots">
      <h2 class="text-center">Pilots</h2>
        <div class="d-flex justify-content-center flex-column">
        <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="pilot1">Pilot</label>
        </div>
        <select class="custom-select" id="pilot1-selector">
          <option value="" selected>Choose...</option>`;
      crew.forEach((member) => {
        if (`${member.title}` === 'Pilot') {
          domString += `<option value="${member.id}">${member.name}: ${member.title}</option>`;
        }
      });
      domString += `  </select>
      
      </div>`;
      domString += `
      <div class="input-group mb-3">
       <div class="input-group-prepend">
         <label class="input-group-text" for="pilot2">Pilot</label>
       </div>
       <select class="custom-select" id="pilot2-selector">
         <option value="" selected>Choose...</option>`;
      crew.forEach((member) => {
        if (`${member.title}` === 'Pilot') {
          domString += `<option value="${member.id}">${member.name}: ${member.title}</option>`;
        }
      });
      domString += `  </select>
      
      </div>
         </div>
       </div>`;
      utils.printToDom('#crew', domString);
    });
};

export default {
  buildPilotDiv,
};
