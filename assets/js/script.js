
//drink api by drink
const getDrinkByName = async (name) => {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        const data = await response.json();
        console.log(data);  // Log the data to the console

        // Clear previous content
        document.getElementById('drink-container').innerHTML = '';

        // Display each drink
        data.drinks.forEach(drink => {
            const drinkElement = document.createElement('div');
            drinkElement.innerHTML = `
                <h3>${drink.strDrink}</h3>
                
                <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" width="100">
            `;
            document.getElementById('drink-container').appendChild(drinkElement);
        });

        return data.drinks;
    } catch (error) {
        console.error('Error fetching drink:', error);
    }
}

getDrinkByName('margarita')
    .then(data => console.log(data));



//meal api but main catagory
const getMealByCategory = async (item) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${item}`);
        const data = await response.json();
        console.log(data);  // Log the data to the console

        // Clear previous content
        document.getElementById('meal-image').innerHTML = '';

        // Display each meal
        data.meals.forEach(meal => {
            const mealElement = document.createElement('div');
            mealElement.innerHTML = `
            <button><h3>${meal.strMeal}</h3></button>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="100">
                
            `;
            document.getElementById('meal-image').appendChild(mealElement);
        });

        return data.meals;
    } catch (error) {
        console.error('Error fetching meal:', error);
    }
}

getMealByCategory('seafood')
    .then(data => console.log(data));





    //final meal slection
const getEntreSelection = async (entre) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${entre}`);
        const data = await response.json();
        console.log(data);  // Log the data to the console
        displayMealDetails(data.meals);
        return data.meals;
    } catch (error) {
        console.error('Error fetching meal:', error);
    }
}

const displayMealDetails = (meals) => {
    const mealDetailsContainer = document.getElementById('meal-details');

    // Clear previous content
    mealDetailsContainer.innerHTML = '';

    // Display details
    meals.forEach(meal => {
        const mealElement = document.createElement('div');
        mealElement.innerHTML = `
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="100">
            <p>${meal.strInstructions}</p>
        `;
        mealDetailsContainer.appendChild(mealElement);
    });
}

getEntreSelection('52944')
    .then(data => console.log(data));
