


const fontSizeControl = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

console.log(fontSizeControl.value);
console.log(textSize.textContent);



fontSizeControl.addEventListener("input", () => {

    textSize.style.fontSize = fontSizeControl.value + "px";
    
});

