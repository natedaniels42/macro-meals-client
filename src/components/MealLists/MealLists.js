import React from 'react';
import MealList from '../MealList/MealList';

function MealLists(props) {
    const mealLists = props.mealLists.length ? props.mealLists.map((mealList) => {
        return <MealList key={mealList._id} mealList={mealList} />
    }) : null;

    return (
        <div>
            {mealLists}
        </div>
    );
};

export default MealLists;