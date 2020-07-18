import './crew.scss';

const crewCardMaker = (crew) => {
  const domString = `
    <div class="crew-card">
      <img class="card-img-top" src=${crew.imageUrl} id=${crew.id}>
        <div class="crew-body">
        <h4 class "card-title">${crew.name}</h4>
        <h5 class "card-title">${crew.title}</h5>
        </div>
        </div>`;

  return domString;
};

export default { crewCardMaker };
