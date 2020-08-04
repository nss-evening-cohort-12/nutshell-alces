import foodData from '../../helpers/data/foodData';
import utils from '../../helpers/utils';

const showFoodEditForm = (foodId) => {
  foodData.getFoodById(foodId)
    .then((response) => {
      const food = response.data;
      const domString = `
      <form class="modify-food" id=${foodId}>
        <div class="form-group">
          <label for="editFood-name">Food Name</label>
          <input type="text" class="form-control" id="editFood-name" value="${food.name}">
        </div>
        <div class="form-group">
          <label for="editFood-price">Price</label>
          <input type="text" class="form-control" id="editFood-price" value=${food.price}>
        </div>
        <div class="form-group">
          <label for="editFood-type">Type</label>
          <input type="text" class="form-control" id="editFood-type" value=${food.type}>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="editFood-checkbox" ${food.isAvailable ? 'checked' : ''}>
          <label class="form-check-label" for="editFood-checkbox">Is Currently Available</label>
        </div>
        <button type="submit" class="btn btn-primary" id="food-editor">Update!</button>
      </form>
      `;
      utils.printToDom('#component-editor', '');
      utils.printToDom('#component-editor', domString);
    })
    .catch((err) => console.error('get single food to edit failed', err));
};

export default { showFoodEditForm };
