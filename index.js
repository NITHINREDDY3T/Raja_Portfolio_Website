const hamBurger = document.querySelector('.header .navbar .nav_list .hamburger');
const mobileMenu = document.querySelector('.header .navbar .nav_list ul');
const header = document.querySelector('#header .container');

hamBurger.addEventListener('click', () =>
{
    hamBurger.classList.toggle('active');
    mobileMenu.classList.toggle('active')
});

document.addEventListener('scroll', () =>
{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor ='#29323c';
    }
    else{
        header.style.backgroundColor ='transparent';
    }
});