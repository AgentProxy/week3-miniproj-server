const prizeContents = [...document.querySelectorAll('.prize-content')];
const arrows = [...document.querySelectorAll('.arrow-accordion')];
const prizeHeaders = [...document.querySelectorAll('.prize-header')];
const prizes = {
    showContent: function(e,index){
        const arrow = arrows[index];
        const prizeContent = prizeContents[index];
        e.preventDefault();
        if(arrow.classList.contains("active")){
            arrow.classList.remove('active');
            prizeContent.style.maxHeight = null;
        }
        else{
            arrow.classList.add('active');
            prizeContent.style.maxHeight = prizeContent.scrollHeight + "px";
        }
    },
    resizeAccordions: function(){
        arrows.forEach(function(arrow,index){
            const prizeContent = prizeContents[index];
            if(arrow.classList.contains("active")){
                prizeContent.style.maxHeight = prizeContent.scrollHeight + "px";
            }
        });
    }
}

window.addEventListener('resize', () => prizes.resizeAccordions());
prizeHeaders.forEach(function(div,index){
    div.addEventListener('click',(e)=>{prizes.showContent(e,index)});
});
prizeContents.forEach(content=>{
    content.style.maxHeight =  (content.scrollHeight*2) + "px";
})