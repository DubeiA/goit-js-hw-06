// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст 
// заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >,
//     вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const categoriesEl = document.querySelector('#categories').children.length;
console.log(`Number of categories: ${categoriesEl}`);

const titleEl = document.querySelectorAll('.item > h2');
// console.log(titleEl);

const itemList = document.querySelectorAll('.item > ul');
// console.log(itemList);



const firstNameItems = titleEl[0].textContent;
console.log(`Category: ${firstNameItems}`);

const firstListLength = itemList[0].children.length;
console.log(`Elements: ${firstListLength}`);

const secondNameItems = titleEl[1].textContent;
console.log(`Category: ${secondNameItems}`);

const secondListLength = itemList[1].children.length;
console.log(`Elements: ${secondListLength}`);

const thirdNameItems = titleEl[2].textContent;
console.log(`Category: ${thirdNameItems}`);

const thirdListLength = itemList[2].children.length;
console.log(`Elements: ${thirdListLength}`);



    // for (let i = 0; i < titleEl.length; i += 1) {
    //     const names = titleEl[i];
    //     console.log(`Category: ${names.textContent}`); 
     
    //  }
    
//     console.log('hello js');


// console.log('Number of categories:', document.querySelectorAll('li.item').length);

// console.log('Category:', document.querySelector('li.item').firstElementChild.firstChild);

// console.log('Elements:', document.querySelector('li.item').firstElementChild.nextElementSibling.children.length);

// console.log('Category:', document.querySelector('li.item').nextElementSibling.firstElementChild.firstChild);

// console.log('Elements:', document.querySelector('li.item').nextElementSibling.firstElementChild.nextElementSibling.children.length);

// console.log('Category:', document.querySelector('li.item').nextElementSibling.nextElementSibling.firstElementChild.firstChild);

// console.log('Category:', document.querySelector('li.item').nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.children.length);





