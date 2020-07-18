import planesData from '../../helpers/data/planesData';
import planesComponent from '../planes/planes';
import utils from '../../helpers/utils';
@import "../javascripts/components/planes/planes.scss";

const showPlanes = () => {
  planesData.getPlanes()
    .then((planes) => {
      let domString = '<div id="model-category" class="d-flex flex-wrap">';

      planes.forEach((plane) => {
        domString += planesComponent.createPlaneCard(plane);
      });

      domString += '</div>';

      utils.printToDom('#plane-collection', domString);
    })
    .catch((err) => console.error('getPlanes does not work', err));
};

export default { showPlanes };
