import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


// const swiper = new Swiper('.header-swiper', {
//   modules: [ Navigation, Pagination ]
// });

const swiper = new Swiper('.category-swiper', {
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 3000
  }
});

console.log(swiper)