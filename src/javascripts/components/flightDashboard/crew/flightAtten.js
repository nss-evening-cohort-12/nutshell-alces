import utils from '../../../helpers/utils';
import './crew.scss';
import pilots from '../../../helpers/data/crewData';

const buildFaDiv = () => {
  pilots.getCrew()
    .then((crew) => {
      let domString = `
      <div class="crewFas">
      <h2 class="text-center">Pilots</h2>
       <div class="d-flex justify-content-center flex-column">
       <div class="input-group mb-3">
       <div class="input-group-prepend">
         <label class="input-group-text" for="inputGroupSelect01">Attendant</label>
       </div>
       <select class="custom-select" id="inputGroupSelect01">
         <option selected>Choose...</option>`;
      crew.forEach((member) => {
        if (`${member.title}` === 'Air Stewardess') {
          domString += `<option value="${member.id}">${member.name}: ${member.title}</option>`;
        }
      });
      domString += `  </select>
      
      </div>`;
      domString += `
      <div class="input-group mb-3">
       <div class="input-group-prepend">
         <label class="input-group-text" for="inputGroupSelect01">Attendant</label>
       </div>
       <select class="custom-select" id="inputGroupSelect01">
         <option selected>Choose...</option>`;
      crew.forEach((member) => {
        if (`${member.title}` === 'Air Stewardess') {
          domString += `<option value="${member.id}">${member.name}: ${member.title}</option>`;
        }
      });
      domString += `  </select>
      
      </div>`;
      domString += `
      <div class="input-group mb-3">
       <div class="input-group-prepend">
         <label class="input-group-text" for="inputGroupSelect01">Attendant</label>
       </div>
       <select class="custom-select" id="inputGroupSelect01">
         <option selected>Choose...</option>`;
      crew.forEach((member) => {
        if (`${member.title}` === 'Air Stewardess') {
          domString += `<option value="${member.id}">${member.name}: ${member.title}</option>`;
        }
      });
      domString += `  </select>
      </div>`;
      domString += `
      <div class="input-group mb-3">
       <div class="input-group-prepend">
         <label class="input-group-text" for="inputGroupSelect01">Attendant</label>
       </div>
       <select class="custom-select" id="inputGroupSelect01">
         <option selected>Choose...</option>`;
      crew.forEach((member) => {
        if (`${member.title}` === 'Air Stewardess') {
          domString += `<option value="${member.id}">${member.name}: ${member.title}</option>`;
        }
      });
      domString += `  </select>
          </div>
         </div>
       </div>`;
      utils.printToDom('#crewF', domString);
    });
};

export default {
  buildFaDiv,
};
