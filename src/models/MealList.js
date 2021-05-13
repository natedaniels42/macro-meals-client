const url = 'http://localhost:4000/api/v1/mealList';

class MealListModel {
    static getAllMealsLists = () => {
        return fetch(url)
            .then((response) => response.json());
    };

    static getMealListById = (mealListId) => {
        return fetch(`${url}/${mealListId}`)
            .then((response) => response.json())
    }

    static findByUser = (userId) => {
        return fetch(`${url}/${userId}/findbyuser`)
            .then((response) => response.json())
    }

    static createMealList = (mealList, userId) => {
        return fetch(`${url}/${userId}`, {
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

    static deleteMealList = (mealListId) => {
        return fetch (`${url}/${mealListId}`, {
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