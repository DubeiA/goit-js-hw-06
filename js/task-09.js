// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на 
// button.change - color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bgColorText = document.querySelector('.color');
const btnRandomColor = document.querySelector('.change-color');
const body = document.querySelector('body')



btnRandomColor.addEventListener('click', () => {

  body.style.backgroundColor = getRandomHexColor();

   
  bgColorText.textContent = body.style.backgroundColor;
     
   
 });

  







