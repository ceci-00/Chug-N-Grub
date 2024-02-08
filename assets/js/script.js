

const getDrinkByName = async (name) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await response.json();
    return data.drinks;
  }
  
  getDrinkByName('margarita')
    .then(data => console.log(data));

                         
const foodSelections = async () => {
  const mealResponse = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php?');
  const mealData = await response.json();
  return mealData.category;
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