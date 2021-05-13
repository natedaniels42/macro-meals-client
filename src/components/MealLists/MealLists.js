import { render } from '@testing-library/react';
import React from 'react';
import MealList from '../MealList/MealList';

function MealLists(props) {
    const mealLists = props.mealLists.map((mealList) => {
        return <MealList key={mealList._id} mealList={mealList} deleteList={props.deleteList} />
    })
    
    return (
        <div>
            {mealLists}
        </div>
    );
 };
 
 
 


export default MealLists;