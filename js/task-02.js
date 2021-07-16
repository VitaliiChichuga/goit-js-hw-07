
"use strict"

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredient = ingredients[i];
//   console.log(ingredient);
// const ingredientq = document.createElement('li');
// ingredientq.textContent = (ingredient);
// console.log(ingredientq);
// const ingredientEl = document.querySelector(`ul#ingredients`);

// ingredientEl.appendChild(ingredientq);
//  };



 const parentOfList = document.querySelector('#ingredients');

const createListOfIngredients = (list) => {
  let itemEl;
  const listOfIngredients = [];
  for (let item of list) {
    itemEl = document.createElement('li')    
    itemEl.textContent = item;    
    listOfIngredients.push(itemEl);  
   }
  
  return listOfIngredients;
}


console.log(createListOfIngredients(ingredients));
const listEl = createListOfIngredients(ingredients); 
parentOfList.append(...listEl);