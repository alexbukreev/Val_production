// developer: Alexander Bukreev, 2018
// e-mail: alexander.v.bukreev@gmail.com

// Прокрутка окна
window.onscroll = function() {hideTopSubMunu(35, 'navbar-top__burger', 'navbar-top__checkbox', 'visible-block')};
// прячем меню в бургер при прокрутке вверх
function hideTopSubMunu(margingTop, id1, id2, visibleClass) {
	var navbarTopBurger = document.getElementById(id1);
	var navbarTopChekcbox = document.getElementById(id2);
	// показываем и скрываем бургер
    if (document.body.scrollTop > margingTop || document.documentElement.scrollTop > margingTop) {
        navbarTopBurger.classList.add(visibleClass);
    } else {
        navbarTopBurger.classList.remove(visibleClass);
        navbarTopChekcbox.checked = false;
    }
}