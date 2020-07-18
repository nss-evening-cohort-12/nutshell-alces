import './crew.scss';

const crewCardMaker = (crew) => {
  const domString = `
    <div class="crew-card" id=${crew.id}>
      <img class="card-img-top" src=${crew.imageUrl}>
        <div class="crew-body">
        <h4 class "card-title">${crew.name}</h4>
        <h5 class "card-title">${crew.title}</h5>
        <button class="crew-button btn btn-light delete-crew"><i class="fas fa-trash" style="color:#2767AD;"></i>  Terminate</button>
        <button class="crew-button btn btn-light edit-crew"><i class="far fa-edit" style="color:#2767AD;"></i>  Edit</button>
        </div>
        </div>
`;

  return domString;
};

export default { crewCardMaker };
