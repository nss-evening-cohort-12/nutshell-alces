import utils from '../../../helpers/utils';
import './flightPath.scss';

const buildDestinationDiv = () => {
  const domString = `
                  <div class="flightPath">
                    <div class="path-container-fluid">
                      <h2 class="text-center">Flight Path</h2>
                      <div class="originDiv">
                        <div class="dropdown">
                          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Origin
                          </button>
                          <div class="dropdown-menu" id="origin-dropdown" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">airport1</a>
                            <a class="dropdown-item" href="#">airport2</a>
                            <a class="dropdown-item" href="#">airport3</a>
                            <a class="dropdown-item" href="#">airport4</a>
                            <a class="dropdown-item" href="#">airport5</a>
                            <a class="dropdown-item" href="#">airport6</a>
                            <a class="dropdown-item" href="#">airport7</a>
                            <a class="dropdown-item" href="#">airport8</a>
                            <a class="dropdown-item" href="#">airport9</a>
                          </div>
                        </div>
                      </div>
                      <div class="destinationDiv">
                        <div class="dropdown">
                          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Destination
                          </button>
                          <div class="dropdown-menu" id="destination-dropdown" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">airport1</a>
                            <a class="dropdown-item" href="#">airport2</a>
                            <a class="dropdown-item" href="#">airport3</a>
                            <a class="dropdown-item" href="#">airport4</a>
                            <a class="dropdown-item" href="#">airport5</a>
                            <a class="dropdown-item" href="#">airport6</a>
                            <a class="dropdown-item" href="#">airport7</a>
                            <a class="dropdown-item" href="#">airport8</a>
                            <a class="dropdown-item" href="#">airport9</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`;
  utils.printToDom('#destination', domString);
};

export default { buildDestinationDiv };
