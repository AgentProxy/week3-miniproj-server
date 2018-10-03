let carouselIndex = 0;
const images = [...document.querySelectorAll('.carousel-image')];
const arrows = [...document.querySelectorAll('.arrow-accordion')];
const eventContents = [...document.querySelectorAll('.event-content')];
const eventHeaders = [...document.querySelectorAll('.event-header')];
const events = {
    showContent: function(e,index){
        const arrow = arrows[index];
        const eventContent = eventContents[index];
        e.preventDefault();
        if(arrow.classList.contains("active")){
            arrow.classList.remove('active');
            eventContent.style.maxHeight = null;
        }
        else{
            arrow.classList.add('active');
            eventContent.style.maxHeight = eventContent.scrollHeight + "px";
        }
    },
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
    resizeAccordions: function(){
        arrows.forEach(function(arrow,index){
            const eventContent = eventContents[index];
            if(arrow.classList.contains("active")){
                eventContent.style.maxHeight = eventContent.scrollHeight + "px";
            }
        });
    }
}
eventHeaders.forEach(function(div,index){
    div.addEventListener('click',(e)=>{events.showContent(e,index)});
});
eventContents.forEach(content=>{
    content.style.maxHeight =  (content.scrollHeight*3) + "px";
})
events.setupCarousel();
window.addEventListener('resize', () => events.resizeAccordions());

