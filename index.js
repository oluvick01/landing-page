const menuBtn = document.querySelector('.menu-button');
const menuItem = document.querySelector('.menu-item');
const menuNav = document.querySelector('.menu-nav')
const heroTxt = document.querySelector('.hero-txt')



menuBtn.addEventListener('click', (e) => {
    if (menuItem.classList.contains('hidden')){
        menuItem.classList.remove('hidden')
        menuItem.style.display = 'block';
        heroTxt.style.display = 'none';
        
    }else{
        menuItem.classList.add('hidden');
        menuItem.style.display = 'none';
        heroTxt.style.display = 'block';
    }

})