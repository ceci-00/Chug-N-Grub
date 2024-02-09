
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
                <button class="bg-blue-300"><h3>${drink.strDrink}</h3></button>
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

                         
const foodSelections = async () => {
  const mealResponse = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php?');
  const mealData = await response.json();
  return mealData.strCategory;
}
foodSelections('strCategory')
  .then(mealData => console.log(mealData));

  //  document.getElementByClass('block').style.display = 'none'
  // randomize selection
//  $("#lean-meat").innerText.sort(leanMeatList[])
//  $("#poultry").innerText.sort(poultryList[])
//  currentQuestionIndex = 0
//  setNextQuestion()

//  leanMeatList = ['Beef', 'Pork', 'Lamb', 'Goat']
//  poultryList = ['Chicken', 'Turkey', 'Duck']
//  seafoodList = ['Fish', 'Crab', 'Lobster', 'Mussels']


//meal api but main catagory
const getMealByCategory = async (item) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${item}`);
        const data = await response.json();
        console.log(data);  // Log the data to the console

        // Clear previous content
        document.getElementById('meal-container').innerHTML = '';

        // Display each meal
        data.meals.forEach(meal => {
            const mealElement = document.createElement('div');
            mealElement.innerHTML = `
            <button class="bg-blue-200"><h3>${meal.strMeal}</h3></button>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="100">
                
            `;
            document.getElementById('meal-container').appendChild(mealElement);
        });

        return data.meals;
    } catch (error) {
        console.error('Error fetching meal:', error);
    }
}

getMealByCategory('seafood')
    .then(data => console.log(data));





    //final meal slection
    document.addEventListener('DOMContentLoaded', () => {
        // Attach click event listener to the button
        const viewDetailsButton = document.getElementById('viewDetailsButton');
        viewDetailsButton.addEventListener('click', () => {
            // Open a new page with meal details
            window.open('meal-details.html', '_blank');
        });
    });
    
    // Function to get meal details by ID
    const getMealDetailsById = async (id) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        return data.meals;
    };
    
    // Example: Get meal details for a specific ID
    getMealDetailsById('52944')
        .then(data => displayMealDetails(data));
    
    // Function to display meal details
    const displayMealDetails = (meals) => {
        const mealDetailsContainer = window.open('meal-details.html', '_blank');
        meals.forEach(meal => {
            const mealElement = document.createElement('div');
            mealElement.innerHTML = `
                <h3>${meal.strMeal}</h3>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="100">
                <p>${meal.strInstructions}</p>
            `;
            mealDetailsContainer.document.body.appendChild(mealElement);
        });
    };
    
}

getEntreSelection('52944')
    .then(data => console.log(data));

    const button = document.querySelector("button");
    
    button.addEventListener("click", (toggleModal) => )
