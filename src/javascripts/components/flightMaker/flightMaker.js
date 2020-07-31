import './flightMaker.scss';

const number = () => Math.floor(Math.random() * 20000);
const buildFlights = (flight) => {
  const domString = `
    <div class="flight-card" id=${flight.id}>
    <img class="panLogo" src="https://i.ibb.co/1fHqVpB/PAN-AM-LOGO.png" alt="PAN-AM-LOGO" border="0">
        <div class="flight-body">
          <h4 class "card-title">Flight PA${number()}</h4>
          <h5 class "card-title">Click to see flight details</h5>
        </div>
    </div>
`;

  return domString;
};

export default { buildFlights };
