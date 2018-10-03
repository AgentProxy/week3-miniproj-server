let carouselIndex = 0;
const images = [...document.querySelectorAll('.carousel-image')];
const arrowsIndex = [...document.querySelectorAll('.event-arrows')];
const eventIndexes = [0,0];
const eventContainers = [...document.querySelectorAll('.event-container')];

const index = {
    setupEventListener: function(){
        arrowsIndex.forEach(arrow => {
            const toggle = arrow.getAttribute("data-toggle");
            const arrowMethod = arrow.getAttribute("data-method");
            arrow.addEventListener("click", function(e){
                e.preventDefault();
                index.eventShow(arrowMethod,toggle);
            });
        });
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
    eventShow(method,toggle){
        const eventContainer = document.querySelector(`.event-container-${toggle}`);
        const events = eventContainer.querySelectorAll('.event-index-events');
        const eventsLength = events.length;
        let event = eventContainer.querySelector(`.event-index-events[data-id='${eventIndexes[toggle]}']`);
        event.classList.remove('show');
        if(method==="next"){  
            eventIndexes[toggle]++;
        }
        else{
            eventIndexes[toggle]--;
        }
        if(eventIndexes[toggle] > eventsLength-1 || eventIndexes[toggle] < 0){
            eventIndexes[toggle] = 0;
        }
        event = eventContainer.querySelector(`.event-index-events[data-id='${eventIndexes[toggle]}']`);  
        const eventLink = event.getAttribute('data-link');    
        document.querySelector(`.event-index-link-${toggle}`).href = eventLink;  
        event.classList.add('show');
    },
}

index.setupEventListener();
index.setupCarousel();

eventContainers.forEach(eventContainer => {
    const event = eventContainer.querySelector(".event-index-events[data-id='0']");
    event.classList.add('show');
});