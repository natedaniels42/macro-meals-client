require('dotenv').config();
const url = process.env.REACT_APP_API_URL;


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