import './airport.scss';

const airportCardMaker = (airport) => {
  const domString = `
    <div class="airport-card" id=${airport.id}>
      <img class="card-img-top" src="${airport.imgURL}" alt="Card image cap">
      <div class="airport-body">
        <h5 class="airport-name">Name: ${airport.name}</h5>
        <p class="airport-location">Location: ${airport.location}</p>
        <a href="${airport.webURL}">${airport.name}</a>
        <button class="airport-button btn btn-light delete-airport"><i class="fas fa-trash" style="color:#2767AD;"></i>  Destroy</button>
        <button class="airport-button btn btn-light edit-airport"><i class="far fa-edit" style="color:#2767AD;"></i>Edit</button>      
      </div>
    </div>
  `;

  return domString;
};

export default { airportCardMaker };
