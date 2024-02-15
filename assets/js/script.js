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
const fetchMealsByLeanMeat = async () => {
    try {
        const lmResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const lmData = await lmResponse.json();
        const leanMeatCategory = lmData.categories.find(category => ['Beef', 'Lamb', 'Pork', 'Goat'].includes(category.strCategory));
        if (leanMeatCategory) {
            document.getElementById('leanmeatBtn').textContent = leanMeatCategory.strCategory;
        } else {
            console.error('Category "Lean Meats" not found.');
        }
    } catch (error) {
        console.error('Error fetching lean meat category:', error);
    }
};
const fetchMealsByPoultry = async () => {
    try {
        const poultryResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const poultryData = await poultryResponse.json();
        const chickenCategory = poultryData.categories.find(category => category.strCategory === 'Chicken');
        if (chickenCategory) {
            document.getElementById('poultryBtn').textContent = chickenCategory.strCategory;
        } else {
            console.error(`Category “Chicken” not found.`);
        }
    } catch (error) {
        console.error('Error fetching lean meat category:', error);
    }
};
const fetchMealsBySeafood = async () => {
    try {
        const seafoodResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const seafoodData = await seafoodResponse.json();
        const seafoodCategory = seafoodData.categories.find(category => category.strCategory === 'Seafood');
        if (seafoodCategory) {
            document.getElementById('seafoodBtn').textContent = seafoodCategory.strCategory;
        } else {
            console.error(`Category “Seafood” not found.`);
        }
    } catch (error) {
        console.error('Error fetching lean meat category:', error);
    }
};
const fetchMealsByVeggies = async () => {
    try {
        const vegetarianResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const vegetarianData = await vegetarianResponse.json();
        const vegetarianCategory = vegetarianData.categories.find(category => category.strCategory === 'Vegetarian');
        if (vegetarianCategory) {
            document.getElementById('vegBtn').textContent = vegetarianCategory.strCategory;
        } else {
            console.error(`Category “Vegetarian” not found.`);
        }
    } catch (error) {
        console.error(`Error fetching categories:`, error);
    }
};
document.getElementById('leanmeatBtn').addEventListener('click', function () {
    const category = this.getAttribute('data-category');
    getMealByCategory(category);
});
document.getElementById('poultryBtn').addEventListener('click', function () {
    const category = this.getAttribute('data-category');
    getMealByCategory(category);
});
document.getElementById('seafoodBtn').addEventListener('click', function () {
    const category = this.getAttribute('data-category');
    getMealByCategory(category);
});
document.getElementById('vegBtn').addEventListener('click', function () {
    const category = this.getAttribute('data-category');
    getMealByCategory(category);
});
const mUl = document.getElementById('m-content');
const meDC = document.querySelector('.mContent');
const cBtn = document.getElementById('close-btn');
// event listeners
mUl.addEventListener('click', getDirections);
cBtn.addEventListener('click', () => {
    meDC.parentElement.classList.remove('viewR');
});
// get meal list that matches with the ingredients
function getMealByCategory(item) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${item}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                data.meals.slice(0, 4).forEach(meal => {
                    html += `
                        <div class="item max-w-screen-xl mx-auto p-8 border-black border-4 " data-id="${meal.idMeal}">
                            <div class="mimg">
                                <img src="${meal.strMealThumb}" alt="food">
                            </div>
                            <div class="mName text-4xl text-bold text-center">
                                <h3>${meal.strMeal}</h3>
                                <a href="#" class="btn5 text-blue-400">Recipe</a>
                            </div>
                        </div>
                    `;
                });
                mUl.classList.remove('notFound');
            } else {
                html = "Sorry, no meal!";
                mUl.classList.add('notFound');
            }
            mUl.innerHTML = html;
            return data;
        })
        .catch(error => console.error('Error fetching data:', error));
}
// Usage
getMealByCategory('seafood')
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
// get recipe of the meal
function getDirections(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn5')) {
        let mI = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mI.dataset.id}`)
            .then(response => response.json())
            .then(data => directionModal(data.meals));
    }
}
// create a modal
function directionModal(meal) {
    console.log(meal);
    meal = meal[0];
    let html = `
        <h2 class = "meal-title">${meal.strMeal}</h2>
        <p class = "meal-category">${meal.strCategory}</p>
        <div class = "meal-Directions">
            <h3>Directions:</h3>
            <p class="text-4xl">${meal.strInstructions}</p>
        </div>
        <div class = "meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
    `;
    meDC.innerHTML = html;
    meDC.parentElement.classList.add('viewR');
}
//drink api by drink
const getDrinkByName = async (name) => {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php
        `);
        const data = await response.json();
        console.log(data);  // Log the data to the console
        // Clear previous content
        document.getElementById('drink-container').innerHTML = '';
        // Display each drink
        data.drinks.forEach(drink => {
            const drinkElement = document.createElement('div');
            drinkElement.innerHTML = `
            <div  class="max-w-screen-xl mx-auto p-8 text-center border-bold border-4" data-id="${drink.idDrink}>
            <div class="dimg">
                <img src="${drink.strDrinkThumb}" alt="drink"></div>
            <p class="text-6xl text-bold text-center p-8" id="drinksTitle"><h3 clas-s="text-4xl">${drink.strDrink}</h3></p>
           <div class="recipe p-8">${drink.strInstructions}</div>
            </div>
            `;
            document.getElementById('drink-container').appendChild(drinkElement);
        });
        return data.drinks;
    } catch (error) {
        console.log('Error fetching drink:', error);
    }
}
getDrinkByName()
    .then(data => { console.log(data) });
document.getElementById('leanmeatBtn').addEventListener('click', fetchMealsByLeanMeat)
document.getElementById('poultryBtn').addEventListener('click', fetchMealsByPoultry)
document.getElementById('seafoodBtn').addEventListener('click', fetchMealsBySeafood)
document.getElementById('vegBtn').addEventListener('click', fetchMealsByVeggies)