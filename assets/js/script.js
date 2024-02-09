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
        console.log('Error fetching drink:', error);
    }
}
getDrinkByName('margarita')
    .then(data => { console.log(data) });



const fetchMealsByCategory = async (category) => {
    try {
        // Fetch categories to get the ID of the specified category
        const categoriesResponse = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const categoriesData = await categoriesResponse.json();
        // Find the ID of the specified category
        const categoryId = categoriesData.categories.find(cat => cat.strCategory === category)?.idCategory;
        if (!categoryId) {
            console.log(`Category not found.`, category);
            return;
        }
        // Fetch meals from the specified category
        const mealsResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`);
        const mealsData = await mealsResponse.json();
        return mealsData.meals;
    } catch (error) {
        console.log('Error fetching data:', error);
    }
    // Example: Fetch meals in the "Chicken" category
    document.getElementById('poultryBtn').innerHTML = 'Chicken';

    // Display each drink
    data.category.forEach(category => {
        const poultryList = document.createElement('div');
        categoriesData.innerHTML = `
                    <button class="bg-blue-300"><h3>${categories.strCategory}</h3></button>
                    <img src="${categories.strCategory}" alt="${categories.strCategory}" width="100">
                `;
        document.getElementById('poultryBtn').appendChild(categoriesData);
    });
    fetchMealsByCategory('Chicken')
        / then(chickenMeals => console.log(chickenMeals))
};









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
        console.log('Error fetching meal:', error);
    }
}

getMealByCategory('seafood')
    .then(data => console.log(data));






// const button = document.querySelector("button");

console.log(fetchMealsByCategory)

var button1 = document.querySelector('#poultryBtn')
button1.addEventListener('click', fetchMealsByCategory)
