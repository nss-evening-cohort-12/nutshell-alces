import crewComponent from '../crew/crew';
import crewData from '../../helpers/data/crewData';
<<<<<<< HEAD
import './crewList.scss';
=======

>>>>>>> master
import utils from '../../helpers/utils';

const buildCrew = () => {
  crewData.getCrew()
    .then((crews) => {
      let domString = `
<<<<<<< HEAD
        <h2 class="text-center">Pan Am Crew</h2>
          <div id="crew" class="d-flex flex-wrap">
=======
        <div class="crew">
          <h2 class="text-center">Pan Am Crew</h2>
          <div class="d-flex flex-wrap">
>>>>>>> master
          `;
      crews.forEach((crew) => {
        domString += crewComponent.crewCardMaker(crew);
      });

<<<<<<< HEAD
      domString += '</div>';
=======
      domString += '</div></div>';
>>>>>>> master

      utils.printToDom('#crew', domString);
    })
    .catch((err) => console.error('no call no show', err));
};

export default { buildCrew };
