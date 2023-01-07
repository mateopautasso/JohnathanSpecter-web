const menuMobile = document.querySelector('.menu-mobile');
const iconMenuMobile = document.querySelector('.a-more-options');
const iconMenuMobileClose = document.querySelector('.a-more-options-menu')
iconMenuMobile.addEventListener('click', desplegarMenuMobile);
iconMenuMobileClose.addEventListener('click', closeMenuMobile);

function desplegarMenuMobile () {
     menuMobile.classList.toggle('inactive');
}
function closeMenuMobile () {
     menuMobile.classList.add('inactive');
}
