const url = 'http://localhost:4000/api/v1/mealList';

class MealListModel {
    static getAllMealsLists = () => {
        return fetch(url) 
            .then((response) => response.json())
    };

    static getMealListById = (mealListId) => {
        return fetch(`${url}/${mealListId}`)
            .then((response) => response.json())
    }

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

    static updateMealList = (mealList, id) => {
        return fetch(`${url}/${id}`, {
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

    static addMeal = (mealListId, mealId) => {
        console.log(mealId);
        return fetch(`${url}/${mealListId}/addmeal/${mealId}`, {
            method: 'POST',  
        })
        .then((response) => response.json())
    };

    static removeMeal = (mealListId, mealId) => {
        console.log(mealId);
        return fetch(`${url}/${mealListId}/removemeal/${mealId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
    };
};

export default MealListModel;