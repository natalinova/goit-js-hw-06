const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredients = document.querySelector('#ingredients');
let arrayIngredients = [];
ingredients.forEach((ingredient) => {
  const itemIngredients = document.createElement('li');
  itemIngredients.textContent = ingredient;
  itemIngredients.classList = ('item')
  arrayIngredients.push(itemIngredients);
})
listIngredients.append(...arrayIngredients);
