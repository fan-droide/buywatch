// Import our custom CSS
// import '../scss/styles.scss'

// Import only the Bootstrap components we need
import { Carousel } from 'bootstrap';

// Create an example popover
// document.querySelectorAll('[data-bs-toggle="popover"]')
//   .forEach(popover => {
//     new Popover(popover)
//   })
//const carousel = new bootstrap.Carousel('#myCarousel')
const isCarousel = document.getElementById('myCarousel')
if(isCarousel){
    const carousel = new Carousel('#myCarousel')
}