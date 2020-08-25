const url = 'http://localhost:4000/api/v1/mealList';

class MealListModel {
    static getAllMealsLists = () => {
        return fetch(url) 
            .then((response) => response.json())
    };
}

export default MealListModel;