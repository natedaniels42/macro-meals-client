require('dotenv').config();
const url = 'https://glacial-citadel-34005.herokuapp.com/api/v1';


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