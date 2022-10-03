// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//  якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid,
// які ми вже додали у вихідні файли завдання.


const checkValid = document.querySelector('#validation-input');
const validAttribute = checkValid.getAttribute("data-length");


// checkValid.addEventListener("blur", (event) => {

//     if (event.target.value.length !== Number(validAttribute)) {
        
//          return checkValid.classList.add("invalid");
//     }
   
//    return checkValid.classList.replace("invalid" , "valid");
// });




checkValid.addEventListener('blur', event => {
	if (event.target.value.length === Number(validAttribute)) {
		checkValid.classList.add('valid')
		
			checkValid.classList.remove('invalid')
		
	} 
     else {
          
			checkValid.classList.remove('valid')
		checkValid.classList.add('invalid')
	
}
})
