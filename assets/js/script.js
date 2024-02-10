document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('[data-modal-toggle]');

    toggleButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const targetModalId = button.getAttribute('data-modal-target');
        const targetModal = document.getElementById(targetModalId);

        if (targetModal) {
          // Toggle the "hidden" class to show/hide the modal
          targetModal.classList.toggle('hidden');

          // Optionally, you can also handle other things like setting focus to the modal, etc.

          // Prevent the default behavior of the button (e.g., form submission)
          event.preventDefault();
        }
      });
    });
  });

    const closeModalButtons = document.querySelectorAll('[data-modal-close]');

    closeModalButtons.forEach(function (closeButton) {
      closeButton.addEventListener('click', function (event) {
        const targetModalId = closeButton.getAttribute('data-modal-target');
        const targetModal = document.getElementById(targetModalId);
  
        if (targetModal) {
          // Hide the modal
          targetModal.classList.add('hidden');
  
  
          // Prevent the default behavior of the button
          event.preventDefault();
        }
      });
    });

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

.then(data => console.log(data));



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





//final meal slection
const getEntreSelection = async (entre) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${entre}`);




var button1 = document.querySelector('#poultryBtn')
button1.addEventListener('click', fetchMealsByCategory)
=======
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
    } catch (error) {
        console.log('Error fetching meal:', error);
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
    
getEntreSelection('52944')
.then(data => console.log(data));

button.addEventListener("click", (toggleModal) => )