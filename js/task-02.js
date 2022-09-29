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

const firstItemIngredients = document.createElement('li');
firstItemIngredients.classList.add('item');
firstItemIngredients.textContent = ingredients[0];

const secondItemIngredients = document.createElement('li');
secondItemIngredients.classList.add('item');
secondItemIngredients.textContent = ingredients[1];

const thirdItemIngredients = document.createElement('li');
thirdItemIngredients.classList.add('item');
thirdItemIngredients.textContent = ingredients[2];

const fourthItemIngredients = document.createElement('li');
fourthItemIngredients.classList.add('item');
fourthItemIngredients.textContent = ingredients[3];

const fifthItemIngredients = document.createElement('li');
fifthItemIngredients.classList.add('item');
fifthItemIngredients.textContent = ingredients[4];

const sixthItemIngredients = document.createElement('li');
sixthItemIngredients.classList.add('item');
sixthItemIngredients.textContent = ingredients[5];

listIngrediens.append(firstItemIngredients, secondItemIngredients, thirdItemIngredients,
  fourthItemIngredients, fifthItemIngredients, sixthItemIngredients);

// можливо так ? Але не можу додуматись = як з перебиранням масиву додати інгредієнти... 