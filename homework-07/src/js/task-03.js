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
//  const galleryEl = document.querySelector('#gallery');
// const imagesEl = [];
// for (let i = 0; i < images.length; i += 1) {
//   const option = images[i];
// const galleryListEl = document.createElement('li');
//   const galleryImagesEl = document.createElement('img');
//   galleryImagesEl.src = option.url;
//   galleryImagesEl.alt =  option.alt;
//   galleryImagesEl.width = 320;
//   imagesEl.push(galleryImagesEl)
//   galleryEl.setAttribute("style", "list-style-type:none; display: flex;");
//   galleryEl.appendChild(galleryImagesEl); 
//   galleryEl.appendChild(galleryListEl);
  
// };

for (let el of images)
document.querySelector('#gallery').insertAdjacentHTML('beforeEnd', `<li><img src="${el.url}" width = 320 alt="${el.alt}" ></li>`);
document.querySelector('#gallery').setAttribute("style", "list-style-type:none; display: flex;");
 





  