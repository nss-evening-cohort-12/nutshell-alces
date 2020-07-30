import flightFoodData from '../../../helpers/data/flightFoodData';
import foodData from '../../../helpers/data/foodData';

const createFlightFoodsTable = (flightId) => {
  const flightFoods = [];

  foodData.getFoods()
    .then((foods) => {
      foods.forEach((food) => {
        console.warn(food);
        if (food.isAvailable === true && document.getElementById('international-flight').checked === true) {
          flightFoods.push(foods);
          console.warn(flightFoods);
          flightFoods.forEach((foodItem) => {
            const newFlightFoodObj = {
              flightId,
              foodId: foodItem,
            };
            console.warn(newFlightFoodObj);

            flightFoodData.addFlightFoods(newFlightFoodObj)
              .then((response) => console.error(response.data))
              .catch((err) => console.error(err));
          });
        }
      });
    })
    .catch((err) => console.error('could not get foods', err));
};

export default { createFlightFoodsTable };
