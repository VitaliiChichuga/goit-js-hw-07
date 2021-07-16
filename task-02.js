"use strict";


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredient = ingredients[i];
  console.log(ingredient);
const ingredientq = document.createElement('li');
ingredientq.textContent = (ingredient);
console.log(ingredientq);
const ingredientEl = document.querySelector(`ul#ingredients`);

ingredientEl.appendChild(ingredientq);
 };



 