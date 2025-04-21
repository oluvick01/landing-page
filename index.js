const menuBtn = document.querySelector('.menu-button');
const menuItem = document.querySelector('.menu-item');
const menuNav = document.querySelector('.menu-nav')




menuBtn.addEventListener('click', (e) => {
    if (menuItem.classList.contains('hidden')){
        menuItem.classList.remove('hidden')
        menuItem.style.display = 'block';
    }else{
        menuItem.classList.add('hidden');
        menuItem.style.display = 'none';
    }

})