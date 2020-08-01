import './planes.scss';

const createPlaneCardAuth = (plane) => {
  const domString = ` <div id="${plane.id}" class="plane-card">
                        <div class="plane-body">
                        <img class="card-img-top" src="${plane.imgURL}" alt="Card image cap">
                          <h5 class="plane-name">Name: ${plane.name}</h5>
                          <p class="plane-type">Type: ${plane.type}</p>
                          <p class="card-text"><small class="text-muted">Last Serviced: ${plane.service}</small></p>
                          <button class="plane-button btn btn delete-plane"><i class="fas fa-trash" style="color:#2767AD;"></i></button>
                          <button class="plane-button btn btn edit-plane"><i class="far fa-edit" style="color:#2767AD;"></i></button>
                        </div>
                       
                      </div> `;
  return domString;
};

const createPlaneCardNoAuth = (plane) => {
  const domString = ` <div id="${plane.id}" class="plane-card">
                        <img class="card-img-top" src="${plane.imgURL}" alt="Card image cap">
                        <div class="plane-body">
                          <h5 class="plane-name">Name: ${plane.name}</h5>
                          <p class="plane-type">Type: ${plane.type}</p>
                          <p class="card-text"><small class="text-muted">Last Serviced: ${plane.service}</small></p>
                        </div>
                      </div> `;
  return domString;
};

export default { createPlaneCardAuth, createPlaneCardNoAuth };
