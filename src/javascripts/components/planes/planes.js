import './planes.scss';

const createPlaneCard = (plane) => {
  const domString = ` <div id="${plane.id}" class="plane-card">
                        <img class="card-img-top" src="${plane.imgURL}" alt="Card image cap">
                        <div class="plane-body">
                          <h5 class="plane-name">Name: ${plane.name}</h5>
                          <p class="plane-type">Type: ${plane.type}</p>
                          <p class="card-text"><small class="text-muted">Last Serviced: </small></p>
                        </div>
                        <button class="plane-button btn btn-light delete-plane"><i class="fas fa-trash" style="color:#2767AD;"></i>  Crash</button>
                        <button class="plane-button btn btn-light edit-plane"><i class="far fa-edit" style="color:#2767AD;"></i>  Edit</button>
                      </div> `;
  return domString;
};

export default { createPlaneCard };
