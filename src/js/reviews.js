
import axios from 'axios';
import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BASE_URL = 'https://portfolio-js.b.goit.study/api';
const END_POINT = "/reviews"
const revGallery =document.querySelector('.js-reviews-list');

export async function getReviews() {

    const url = `${BASE_URL}${END_POINT}`
    const {data} = await axios.get(url);
    return data; 
}
  
function createMarkup(arr){
    return arr.map(obj => {
const {
    author,
    avatar_url,
    review
} = obj;
return `
<li class="gallery-item swiper-slide">
   <img class="gallery-image"
   src = "${avatar_url}"
   alt = "${author}"/>
   <h4 class="review-author ">${author}</h4>
   <p class="review-text">${review}</p>
</li>
`
    }).join('');
}

async function renderPage(){
    try {
        const res = await getReviews();
        revGallery.insertAdjacentHTML('beforeend', createMarkup(res));
    }catch (error){
        console.log(error);
    } 
}
renderPage()


// async function renderPage(){
//     try {
//         const res = await getReviews();
//         let markup = createMarkup(res);
//         if (markup === '<p class="not-found-text">Not found</p>') {
//             // Display error message to user using alert
//             alert("Reviews not found");
//         } else {
//             revGallery.insertAdjacentHTML('beforeend', markup);
//         }
//     } catch (error){
//         console.log(error);
//         // Display error message to user using alert
//         alert("Failed to fetch reviews");
//     } 
// }
// renderPage();


// import { Navigation, Keyboard, Mousewheel, Parallax } from 'swiper/modules';

// // Import Swiper and modules styles
// import 'swiper/css/bundle';
// Swiper.use([Navigation, Pagination]);
// // Init Swiper:
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//     direction: 'horizontal',
//     loop: false,
//     speed: 500,
//     spaceBetween: 20,

//     // Configure Swiper to use modules
//     modules: [Navigation, Keyboard, Mousewheel, Parallax],

//   // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     keyboard: {
//         enabled: true,
//     },

//     mousewheel: {
//         enabled: true,
//         forceToAxis: true,
//     },

//     // Parallax
//     parallax: true,

// });
const revList =document.querySelector(".js-reviews-list")

function addSwiper(){

    const revSwiper = new Swiper(".swiper-reviews", {
        modules: [Navigation],
        speed: 400,
        slidesPerView: 1,
        // loop: true,
        // loopAddBlankSlides: true,
        navigation: {
          nextEl: '.swiper-butn-rev-next',
prevEl: '.swiper-butn-rev-prev',

          breakpoints:{
            768:{
                slidesPerView: 2,

              1280:{
                slidesPerView: 4,
              }  
            }
          },

          keyboard:{
            enabled:true,
          },

          mousewheel: {
            enabled:true,
          }
        },b
       
        
      });

  
}
addSwiper()
