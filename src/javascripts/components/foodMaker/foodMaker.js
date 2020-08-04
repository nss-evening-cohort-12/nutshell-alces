import foodData from '../../helpers/data/foodData';
import utils from '../../helpers/utils';
import addFlights from '../flightDashboard/addFlights/addFlightLanding';

const foodMakerAuth = (food) => {
  const domString = `
  <tbody>
    <tr id="${food.id}" class="modify-food">
      <th scope="row">${food.name}</th>
        <td>$${food.price}</td>
        <td class="edit"><button type="button" id="${food.id}" class="btn btn-dark edit-food-item"><i class="fas fa-user-edit"></i></button></td>
        <td><button type="button" id="food-delete" class="btn btn-dark del-food-item"><i class="fas fa-trash-alt"></i></button></td>
        <td>
          <div>
            <input type="checkbox" id="food" ${food.isAvailable ? 'checked' : ''} name="food">
            <label for="food"></label>
          </div>
        </td>
    </tr>
  </tbody>
  `;

  return domString;
};

const foodMakerNoAuth = (food) => {
  const domString = `
  <tbody>
    <tr>
      <th scope="row">${food.name}</th>
      <td>$${food.price}</td>
    </tr>
  </tbody>
  `;

  return domString;
};

const authFood = () => {
  let rowString = '';
  foodData.getFoods()
    .then((foods) => {
      const headerString = `
      <div class="text-center">
        <h2>Menu</h2>
        <div class="text-center" id="food-button">
          <button type="button" id="add-food" class="btn btn-secondary mt-2 mb-4">Add Food</button>
        </div>
        <thead>
        <thead class="colored">
          <tr>
            <th scope="col">Food</th>
            <th scope="col">Price</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          <th scope="col">Available</th>
          </tr>
        </thead>
      </div>
      `;
      foods.forEach((food) => {
        rowString += foodMakerAuth(food);
      });
    const domString = `<table class='table table-bordered'>` + headerString + rowString + `</table>` // eslint-disable-line
      utils.printToDom('#component-viewer', '');
      utils.printToDom('#flightDashboard', '');
      addFlights.hideAddFlights();
      utils.printToDom('#component-viewer', domString);
    });
};
export default { foodMakerAuth, foodMakerNoAuth, authFood };
