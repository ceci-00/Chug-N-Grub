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
// const getDrinkByName = async (name) => {
//     try {
//         const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
//         const data = await response.json();
//         console.log(data);  // Log the data to the console

//         // Clear previous content
//         document.getElementById('drink-container').innerHTML = '';

//         // Display each drink
//         data.drinks.forEach(drink => {
//             const drinkElement = document.createElement('div');
//             drinkElement.innerHTML = `
//             <button class="bg-blue-300"><h3>${drink.strDrink}</h3></button>
//             <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" width="100">
//             `;
//             document.getElementById('drink-container').appendChild(drinkElement);
//         });

//         return data.drinks;
//     } catch (error) {
//         console.log('Error fetching drink:', error);
//     }
// }
// getDrinkByName('margarita')

//     .then(data => { console.log(data) });



const fetchMealsByCategory = async (category) => {
    try {
        const categoriesResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const categoriesData = await categoriesResponse.json();
        const leanMeatCategory = categoriesData.categories.filter(Object => Object.strCategory === 'Beef','Lamb','Pork','Goat')
        console.log(leanMeatCategory)
        if (leanMeatCategory) {
            document.getElementById('leanmeatBtn').textContent = leanMeatCategory[0].strCategory;
        } else {
            console.error('Category "Lean Meats" not found.');
        }
        const chickenCategory = categoriesData.categories.filter(Object => Object.strCategory === 'Chicken');
        console.log(chickenCategory)
        if (chickenCategory) {
            document.getElementById('poultryBtn').textContent = chickenCategory[0].strCategory;
        } else {
            console.error(`Category “Chicken” not found.`);
        }
        const seafoodCategory = categoriesData.categories.filter(Object => Object.strCategory === 'Seafood');
        console.log(seafoodCategory)
        if (seafoodCategory) {
            document.getElementById('seafoodBtn').textContent = seafoodCategory[0].strCategory;
        } else {
            console.error(`Category “Seafood” not found.`);
        }        
    } catch (error) {
        console.error(`Error fetching categories:`, error);
    }
};

const fetchCategoryImages = async (imageURl) => {
    try {
        const imagesResponse = await fetch('https:\/\/www.themealdb.com\/images\/category\/chicken.png');
        console.log(imagesResponse)
        // you need to work on this part the then parameter is wrong
            .then((fetchBlob) => {
                const imageURL = imagesResponse.createObjectURL(fetchBlob);
                console.log(imageURL)
                const chickenImg = document.querySelector("#poultryImg");
                chickenImg.src = imageURL;
            })
    } catch (error) {
        console.error('Error fetching Image:', error);
    }
}


//     try {
//         // Fetch categories to get the ID of the specified category
//         const categoriesResponse = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
//         const categoriesData = await categoriesResponse.json();
//         // Find the ID of the chicken category
//         const chickenCategory = categoriesData.categories.find(cat => cat.strCategory === 'Chicken');
//         console.log(chickenCategory)
//         if (chickenCategory) {
//             // const chickenImg = chickenCategory.strCategoryThumb;
//             // const imgElement = document.createElement('img');
//             // imgElement.src = chickenImg;
//             // document.body.appendChild(imgElement);
//             document.getElementById('poultryBtn').textContent = chickenCategory[0].strCategory;
//         } else {
//             console.error('Category "Chicken" not found.');
//         }
//     } catch (error) {
//         console.error('Error fetching categories:', error);
//     }
// };

//  document.getElementByClass('block').style.display = 'none'
// randomize selection
// function fetchMealsByCategory() {
//      var lmBtn = $("#leanmeatBtn").innerText.sort(leanMeatList[])
//     //  var pBtn = $("#poultryBtn").innerText.sort(poultryList[])
//     //  var sfBtn = $("#seafoodBtn").innerText.sort(seafoodList[])
//     console.log(lmBtn)
//     var leanMeatList = ['Beef', 'Pork', 'Lamb', 'Goat']
//     // var poultryList = ['Chicken', 'Turkey', 'Duck']
//     // var seafoodList = ['Fish', 'Crab', 'Lobster', 'Mussels']
//     if (lmBtn) {
//         beefImg = getElementById('leanmeatBtn').createElement('img')
//         beefImg.src = "https:\/\/www.themealdb.com\/images\/category\/chicken.png"


//     }
// }


// //meal api but main catagory
// const getMealByCategory = async (item) => {
//     try {
//         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${item}`);
//         const data = await response.json();
//         console.log(data);  // Log the data to the console

//         // Clear previous content
//         document.getElementById('meal-container').innerHTML = '';

//         // Display each meal
//         data.meals.forEach(meal => {
//             const mealElement = document.createElement('div');
//             mealElement.innerHTML = `
//             <button class="bg-blue-200"><h3>${meal.strMeal}</h3></button>
//             <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="100">

//             `;
//             document.getElementById('meal-container').appendChild(mealElement);
//         });

//         return data.meals;
//     } catch (error) {
//         console.log('Error fetching meal:', error);
//     }
// }

// getMealByCategory('seafood')
//     .then(data => console.log(data));





//final meal slection
const getEntreSelection = async (entre) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${entre}`);


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
        }
    } catch (error) {
        console.log('Error fetching meal:', error)
    }

    const displayMealDetails = (meals) => {
        const mealDetailsContainer = document.getElementById('meal-details');

        // Clear previous content
        mealDetailsContainer.innerText = '';

        // Display details
        meals.forEach(meal => {
            const mealElement = document.createElement('div');
            mealElement.innerText = `
        <h3>${meal.strMeal}</h3>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="100">
        <p>${meal.strInstructions}</p>
        `;
            mealDetailsContainer.appendChild(mealElement);
        });
    }
};

// Example: Get meal details for a specific ID
// getMealDetailsById('52944')
//    .then(data => displayMealDetails(data));

// Function to display meal details
// const displayMealDetails = (meals) => {
//     const mealDetailsContainer = window.open('meal-details.html', '_blank');
//     meals.forEach(meal => {
//         const mealElement = document.createElement('div');
//         mealElement.innerHTML = `
//                 <h3>${meal.strMeal}</h3>
//                 <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="100">
//                 <p>${meal.strInstructions}</p>
//             `;
//         mealDetailsContainer.document.body.appendChild(mealElement);
//     });
// };
// // event listener for poultry button
document.querySelector('#leanmeatBtn').addEventListener('click', fetchMealsByCategory)
document.querySelector('#poultryBtn').addEventListener('click', fetchMealsByCategory)
document.querySelector('#poultryBtn').addEventListener('click', fetchCategoryImages)
document.querySelector('#seafoodBtn').addEventListener('click', fetchMealsByCategory)


// getEntreSelection('52944')
//     .then(data => console.log(data));


// button.addEventListener("click", (toggleModal) => hide)
