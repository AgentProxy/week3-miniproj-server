let carouselIndex = 0;
const images = [...document.querySelectorAll('.carousel-image')];
const eventContents = [...document.querySelectorAll('.event-content')];
const eventHeaders = [...document.querySelectorAll('.event-header')];
const events = {
    setupCarousel: function(){
        images[carouselIndex].classList.add("present");
        setInterval(() => {
            this.changeCarousel();
        },5000);
    },
    changeCarousel: function(){
        images[carouselIndex].classList.remove("present");
        carouselIndex++;
        if(carouselIndex > images.length-1){
            carouselIndex = 0;
        }
        images[carouselIndex].classList.add("present");
    },
}

events.setupCarousel();


// const aboutContainer = document.querySelector('.about-container'); 
// let carouselIndex = 0;
// const images = [...document.querySelectorAll('.carousel-image')];

// const about = {
//     setupCarousel: function(){
//         images[carouselIndex].classList.add("active");
//         setInterval(() => {
//             this.changeCarousel();
//         },5000);
//     },
//     changeCarousel: function(){
//         images[carouselIndex].classList.remove("active");
//         carouselIndex++;
//         if(carouselIndex > images.length-1){
//             carouselIndex = 0;
//         }
//         images[carouselIndex].classList.add("active");
//     },
// }
// about.setupCarousel();

