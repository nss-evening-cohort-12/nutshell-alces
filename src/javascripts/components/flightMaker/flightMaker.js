import './flightMaker.scss';

const buildFlights = (flight) => {
  console.warn(flight.flightNumber);
  const domString = `
    <div class="flight-card" id=${flight.id}>
    <img class="panLogo" src="https://i.ibb.co/1fHqVpB/PAN-AM-LOGO.png" alt="PAN-AM-LOGO" border="0">
        <div class="flight-body">
          <h4 class "card-title">Flight PA${flight.flightNumber}</h4>
          <h5 class "card-title">Click to see flight details</h5>
        </div>
    </div>
`;

  return domString;
};

export default { buildFlights };
