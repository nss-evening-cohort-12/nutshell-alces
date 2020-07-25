const buildFlights = (flight) => {
  const domString = `
    <div class="flight-card" id=${flight.id}>
      <img class="card-img-top" src="https://i.pinimg.com/564x/c2/1b/3d/c21b3d039d9c50ce5f337d8be9d531c1.jpg">
        <div class="flight-body">
          <h4 class "card-title">Flight # 1234</h4>
          <h5 class "card-title">Click to see flight details</h5>
        </div>
    </div>
`;

  return domString;
};

export default { buildFlights };
