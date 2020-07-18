import crewComponent from '../crew/crew';
import crewData from '../../helpers/data/crewData';

import utils from '../../helpers/utils';

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

export default { buildCrew };
