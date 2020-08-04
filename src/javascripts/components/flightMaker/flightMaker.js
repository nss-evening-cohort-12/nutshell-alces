import './flightMaker.scss';

const buildFlights = (flight) => {
  const domString = `
    <div class="flight-card" id=${flight.id}>
      <img class="panLogo" src="https://i.ibb.co/1fHqVpB/PAN-AM-LOGO.png" alt="PAN-AM-LOGO" border="0">
      <div class="flight-body">
        <h4 class "card-title">Flight PA${flight.flightNumber}</h4>
        <h5 type="button" class "card-title">Click to see flight details</h5>
        <a class="nav-item nav-link mr-auto delete-flight" href="#flightDashboard">Remove Flight</a>
      </div>
    </div>
`;

  return domString;
};

export default { buildFlights };
