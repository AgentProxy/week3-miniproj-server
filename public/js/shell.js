let menuOpen = false;
const menuLinks = document.querySelector('.menu-links');
const nav = document.querySelector('.navbar');
const views = {
    setupEventListener: function(){
        const menuButton = document.querySelector('.toggle-button');
        const tabLinks = document.querySelectorAll('.tab-links')
        menuButton.addEventListener('click',() => {
            this.openMenu();
        });
        tabLinks.forEach((tabLink) => {
            tabLink.addEventListener('click',(e) => {
                this.openDropDown(e);
            })
        });
        window.addEventListener('resize', () => views.fixNavbar());
    },
    openDropDown: function(e){
        e.preventDefault();
        menuLinks.style.height = "500px";
    },
    openMenu: function(){
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
        const nextElement = nav.nextElementSibling;
        nextElement.style.paddingTop = nav.offsetHeight + 'px';        //setting carousel below the nav bar
    },
}

views.fixNavbar();
views.setupEventListener();

