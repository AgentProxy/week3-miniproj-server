
const aboutContainer = document.querySelector('.about-container'); 
let carouselIndex = 0;
const images = [...document.querySelectorAll('.carousel-image')];

const about = {
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
about.setupCarousel();