const createPlane = (plane) => {
  const domString = ` <div class="plane-card">
                        <img class="card-img-top" src="${plane.imgURL}" alt="Card image cap">
                        <div class="plane-body">
                          <h5 class="plane-name">Name: ${plane.name}</h5>
                          <p class="plane-type">Type: ${plane.type}</p>
                          <p class="card-text"><small class="text-muted">Last Serviced: </small></p>
                        </div>
                      </div> `;
  return domString;
};

export default { createPlane };
