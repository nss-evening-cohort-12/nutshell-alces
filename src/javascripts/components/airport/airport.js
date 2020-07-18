import './airport.scss';

const airportCardMaker = (airport) => {
  const domString = `
    <div class="airport-card">
      <img class="card-img-top" src="${airport.imgURL}" alt="Card image cap">
      <div class="airport-body">
        <h5 class="airport-name">Name: ${airport.name}</h5>
        <p class="airport-location">Location: ${airport.location}</p>
        <a href="${airport.webURL}">${airport.name}</a>
      </div>
    </div>
  `;

  return domString;
};

export default { airportCardMaker };
