const arrows = [...document.querySelectorAll('.arrow-accordion')];
const faqContents = document.querySelectorAll('.faq-content');
const faqHeaders = [...document.querySelectorAll('.faq-header')];
const faq = {
    showContent: function(e,index){
        const arrow = arrows[index];
        const faqContent = faqContents[index];
        e.preventDefault();
        if(arrow.classList.contains("active")){
            arrow.classList.remove('active');
            faqContent.style.maxHeight = null;
        }
        else{
            arrow.classList.add('active');
            faqContent.style.maxHeight = faqContent.scrollHeight + "px";
        }
    },
    resizeAccordions: function(){
        arrows.forEach(function(arrow,index){
            const faqContent = faqContents[index];
            if(arrow.classList.contains("active")){
                faqContent.style.maxHeight = faqContent.scrollHeight + "px";
            }
        });
    }
}

window.addEventListener('resize', () => faq.resizeAccordions());
faqHeaders.forEach(function(div,index){
    div.addEventListener('click',(e)=>{faq.showContent(e,index)});
});
