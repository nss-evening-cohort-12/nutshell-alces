import flightCrewData from '../../../helpers/data/flightCrewData';

const createFlightCrewTable = (flightId) => {
  const flightCrew = [];
  const pilot1 = $('#pilot1-selector').val();
  const pilot2 = $('#pilot2-selector').val();
  const fa1 = $('#fa1-selector').val();
  const fa2 = $('#fa2-selector').val();
  const fa3 = $('#fa3-selector').val();
  const fa4 = $('#fa4-selector').val();

  flightCrew.push(pilot1, pilot2, fa1, fa2, fa3, fa4);

  flightCrew.forEach((member) => {
    const newFlightCrewObj = {
      flightId,
      crewId: member,
    };

    flightCrewData.addFlightCrew(newFlightCrewObj)
      .catch((err) => console.error(err));
  });
};

export default { createFlightCrewTable };
