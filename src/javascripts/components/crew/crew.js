import './crew.scss';

const crewCardMakerAuth = (crew) => {
  const domString = `
    <div class="crew-card" id=${crew.id}>
      <img class="card-img-top" src=${crew.imageUrl}>
        <div class="crew-body">
          <h4 class "card-title">${crew.name}</h4>
          <h5 class "card-title">${crew.title}</h5>
          <button class="crew-button btn btn-light edit-crew"><i class="far fa-edit" style="color:white;"></i></button>
          <button class="crew-button btn btn-light delete-crew"><i class="fas fa-trash" style="color:white;"></i></button>
        </div>
    </div>
`;

  return domString;
};

const crewCardMakerNoAuth = (crew) => {
  const domString = `
    <div class="crew-card" id=${crew.id}>
      <img class="card-img-top" src=${crew.imageUrl}>
        <div class="crew-body">
          <h4 class "card-title">${crew.name}</h4>
          <h5 class "card-title">${crew.title}</h5>
        </div>
    </div>
`;

  return domString;
};

export default { crewCardMakerAuth, crewCardMakerNoAuth };
