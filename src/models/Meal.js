const url = 'http://localhost:4000/api/v1/meals';


class MealModel {
    static getAllMeals = () => {
        return fetch(url)
            .then((response) => response.json())
    }
}

export default MealModel;