const url = 'http://localhost:4000/api/v1/mealList';

class MealListModel {
    static getAllMealsLists = () => {
        return fetch(url) 
            .then((response) => response.json())
    };

    static createMealList = (mealList) => {
        return fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mealList)
        })
            .then((response) => response.json())
    };

    static updateMealList = (mealList) => {
        return fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mealList)
        })
            .then((response) => response.json())
    };

    static deleteMealList = (id) => {
        return fetch (`${url}/${id}`, {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
    };
};

export default MealListModel;