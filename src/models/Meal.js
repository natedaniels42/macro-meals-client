const url = 'http://localhost:4000/api/v1';

class MealModel {
    static getAllMeals = () => {
        return fetch(`${url}/meals`)
            .then((response) => response.json())
    }

    static getMealById = (mealId) => {
        return fetch(`${url}/meals/${mealId}`)
            .then((response) => response.json())
    }
}

export default MealModel;