import utils from '../../../helpers/utils';
import './crew.scss';
import pilots from '../../../helpers/data/crewData';

const buildFaDiv = () => {
  pilots.getCrew()
    .then((crew) => {
      let domString = `
      <div class="crewFas">
        <h2 class="text-center"> Flight Attendants</h2>
          <div class="d-flex justify-content-center flex-column">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="fa1">Attendant</label>
              </div>
              <select class="custom-select" id="fa1-selector">
                <option value="" selected>Choose...</option>`;
      crew.forEach((member) => {
        if (`${member.title}` === 'Air Stewardess') {
          domString += `
                <option value="${member.id}">${member.name}: ${member.title}</option>`;
        }
      });
      domString += `  
              </select>
      
            </div>`;
      domString += `
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="fa2">Attendant</label>
              </div>
              <select class="custom-select" id="fa2-selector">
                <option value="" selected>Choose...</option>`;
      crew.forEach((member) => {
        if (`${member.title}` === 'Air Stewardess') {
          domString += `
                <option value="${member.id}">${member.name}: ${member.title}</option>`;
        }
      });
      domString += `  
              </select>
            </div>`;
      domString += `
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="fa3">Attendant</label>
              </div>
              <select class="custom-select" id="fa3-selector">
                <option value="" selected>Choose...</option>`;
      crew.forEach((member) => {
        if (`${member.title}` === 'Air Stewardess') {
          domString += `
                <option value="${member.id}">${member.name}: ${member.title}</option>`;
        }
      });
      domString += `  
              </select>
            </div>`;
      domString += `
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="fa4">Attendant</label>
              </div>
              <select class="custom-select" id="fa4-selector">
                <option value="" selected>Choose...</option>`;
      crew.forEach((member) => {
        if (`${member.title}` === 'Air Stewardess') {
          domString += `
                <option value="${member.id}">${member.name}: ${member.title}</option>`;
        }
      });
      domString += `  
              </select>
            </div>
        </div>
      </div>`;
      utils.printToDom('#crewF', domString);
    });
};

export default {
  buildFaDiv,
};
