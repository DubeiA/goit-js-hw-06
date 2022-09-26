// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.


// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//  якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid,
// які ми вже додали у вихідні файли завдання.


const checkValid = document.querySelector('#validation-input');
const validAttribute = checkValid.getAttribute("data-length");


checkValid.addEventListener("blur", (event) => {
//   checkValid.value = "";
    if (event.target.value.length <= validAttribute) {
        
         return checkValid.classList.add("invalid");
    }
   
   return checkValid.classList.replace("invalid" , "valid");
});


console.log(validAttribute);


//  =================================================================
// checkValid.addEventListener('blur', event => {
// 	if (event.target.value.length == checkValid.getAttribute('data-length')) {
// 		checkValid.classList.add('valid')
// 		if (checkValid.classList.contains('invalid')) {
// 			checkValid.classList.remove('invalid')
// 		}
// 	} else {
// 		if (checkValid.classList.contains('valid')) {
// 			checkValid.classList.remove('valid')
// 		}
// 		checkValid.classList.add('invalid')
// 	}
// })

// =========================================================================
// const withHelp = document.getElementById("validation-input").onblur = function() {
//   console.log(this.value.length);
//   if (this.getAttribute('data-length') > this.value.length) { 
//     this.classList.remove('valid');
//     this.classList.add('invalid');
//   } else {
//     this.classList.remove('invalid');
//     this.classList.add('valid');
//   }
// };