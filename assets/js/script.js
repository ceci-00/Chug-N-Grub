<<<<<<< HEAD
function toggleModal(){
    const 
}

{}
=======


const getDrinkByName = async (name) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await response.json();
    return data.drinks;
  }
  
  getDrinkByName('margarita')
    .then(data => console.log(data));
>>>>>>> 0196f940fe0e05ecae8078ee5fd5257835512839
