import './airport.scss';

const airportCardMakerAuth = (airport) => {
  const domString = `
    <div class="airport-card" id=${airport.id}>
      <img class="card-img-top" src="${airport.imgURL}" alt="Card image cap">
      <div class="airport-body">
        <h5 class="airport-name">${airport.name}</h5>
        <p class="airport-location">${airport.location}</p>
        <div class="mb-2">
          <a href="${airport.webURL}">Visit Site</a>
        </div>
        <button class="airport-button btn delete-airport"><i class="fas fa-trash" style="color:#2767AD;"></i></button>
        <button class="airport-button btn edit-airport"><i class="far fa-edit" style="color:#2767AD;"></i></button>      
      </div>
    </div>
  `;

  return domString;
};

const airportCardMakerNoAuth = (airport) => {
  const domString = `
    <div class="airport-card" id=${airport.id}>
      <img class="card-img-top" src="${airport.imgURL}" alt="Card image cap">
      <div class="airport-body">
        <h5 class="airport-name">${airport.name}</h5>
        <p class="airport-location">${airport.location}</p>
        <div class="mb-2">
          <a href="${airport.webURL}">Visit Site</a>
        </div>
      </div>
    </div>
  `;

  return domString;
};

export default { airportCardMakerAuth, airportCardMakerNoAuth };
