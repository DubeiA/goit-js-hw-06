const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
console.log(images);



const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

const markup = images.map((image) => `<li class="gallery-item"><img class="pic" src=${image.url} alt=${image.alt}></li>`);

console.log(markup);

galleryEl.insertAdjacentHTML('beforeend', markup)


// for (let i = 0; i < images.length; i += 1) {
  
//   const itemIngredients = document.createElement('li');
//   itemIngredients.classList.add('item')
//   itemIngredients.innerHTML = images[i];
//   galleryEl.appendChild(itemIngredients);
// }