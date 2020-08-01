import flightFoodData from '../../../helpers/data/flightFoodData';
import foodData from '../../../helpers/data/foodData';

const createFlightFoodsTable = (flightId) => {
  const flightFoods = [];

  foodData.getFoods()
    .then((foods) => {
      foods.forEach((food) => {
        const foodObj = food.id;
        if (food.isAvailable === true && document.getElementById('international-flight').checked === true) {
          flightFoods.push(foodObj);
        } else if (food.isAvailable === true && document.getElementById('domestic-flight').checked === true && food.type === 'snack') {
          flightFoods.push(foodObj);
        }
      });
      flightFoods.forEach((foodItem) => {
        const newFlightFoodObj = {
          flightId,
          foodId: foodItem,
        };
        flightFoodData.addFlightFoods(newFlightFoodObj)
          .then((response) => console.error(response.data))
          .catch((err) => console.error(err));
      });
    })
    .catch((err) => console.error('could not get foods', err));
};

export default { createFlightFoodsTable };
