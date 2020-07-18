import airportData from '../../helpers/data/airportData';
// import utils from '../../helpers/utils';

const buildHangar = () => {
  airportData.getAirports()
    .then((airports) => console.warn('Get airports worked', airports))
    .catch((err) => console.error('get airports broke', err));
  // const domString = '<h1>I SEE AIRPORTS</h1>';
  // utils.printToDom('#hangar', domString);
};

export default { buildHangar };
