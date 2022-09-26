// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника 
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value')

console.log(value.textContent);


let counterValue = 0;


decrement.addEventListener('click', () => { 
    counterValue -= 1;
    valueAdd()
    console.log(counterValue);
}) 


increment.addEventListener('click', () => { 
    counterValue += 1;
    valueAdd()
    console.log(counterValue);
})


function valueAdd() {
    value.textContent = counterValue;
}



