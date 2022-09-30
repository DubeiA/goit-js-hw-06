const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const listIngrediens = document.querySelector('ul')

const vegetable = ingredients.map(ingredient => { 
  const itemIngredients = document.createElement('li');
  itemIngredients.classList.add('item');
  itemIngredients.textContent = ingredient;
  return itemIngredients
})

console.log(vegetable);

listIngrediens.append(...vegetable);

