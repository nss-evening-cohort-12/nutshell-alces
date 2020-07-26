import utils from '../../../helpers/utils';
import './crew.scss';

const buildFlightAttenDiv = () => {
  const domString = `
  <div class="crewFas">
    <div class="dropdown float-right">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Attendant
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
  
  </div>
  
  `;
  utils.printToDom('#crewF', domString);
};

export default {
  buildFlightAttenDiv,
};
