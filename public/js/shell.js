let menuOpen = false;

const views = {
    setupEventListener: function(){
        const menuButton = document.querySelector('.toggle-button');
        menuButton.addEventListener('click',() => {
            this.openMenu();
        });
        window.addEventListener('resize', () => views.fixNavbar());
    },
    openMenu: function(){
        const menuLinks = document.querySelector('.menu-links');
        menuOpen = !menuOpen;
        if(menuOpen){
            menuLinks.classList.add('menu-links-open');
            menuLinks.style.height = "370px";
        }
        else{
            const menuLinksOpen = document.querySelector('.menu-links-open');
            menuLinksOpen.addEventListener('transitionend', () =>{
                menuLinks.classList.remove('menu-links-open');
            },{once: true})  
            menuLinks.style.height = "0px";
        }
    },
    fixNavbar: function(){
        const nav = document.querySelector('.navbar');
        const nextElement = nav.nextElementSibling;
        nextElement.style.paddingTop = nav.offsetHeight + 'px';        //setting carousel below the nav bar
    },
}

views.fixNavbar();
views.setupEventListener();

