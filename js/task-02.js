const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  'допомагав Google:)'
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const listIngrediens = document.querySelector('ul')


for (let i = 0; i < ingredients.length; i += 1) {
  
  const itemIngredients = document.createElement('li');
  itemIngredients.classList.add('item')
  itemIngredients.innerHTML = ingredients[i];
  listIngrediens.appendChild(itemIngredients);
}

console.log(listIngrediens);


// const firstItemIngredients = document.createElement('li');
// firstItemIngredients.classList.add('item')
// console.log(firstItemIngredients);


// const uniqueGenres = ingredients.map((ingredients) => ingredients);
// console.log(uniqueGenres);