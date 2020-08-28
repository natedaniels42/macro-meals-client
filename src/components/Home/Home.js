import React from 'react';
import './Home.css'

function Home() {
    return (
        <div className="home-body">
            <div className="banner">
                <img className="banner-image" src="/food.jpg" alt="home page banner"></img>
            </div>
            <h1 className="welcome">Welcome to <span className="company-name2">Macro Meals</span></h1>
            <p className="home-description">Eating healthy can be difficult and finding delicious nutrional meals can be a chore.  Let us help you.  At Macro Meals we provide you the resources to search for a variety of healthy meals from reputable sources.</p>
            <p className="home-description">Basic nutrition is broken up to 3 different macronutrient categories: carbohydrates, proteins, and fats.  Depending on your nutritional needs you may need different proportions of these 3 nutrients.  With our custom search you can find meals that fit into your individual needs.  All you need to do to get started is to sign up</p>
        </div>
    )
}

export default Home;