// Import our custom CSS
// import '../scss/styles.scss'

// Import only the Bootstrap components we need
import { Carousel } from 'bootstrap';


const isCarousel = document.getElementById('myCarousel')
if(isCarousel){
    const carousel = new Carousel('#myCarousel')
}