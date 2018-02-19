// Прокрутка окна
window.onscroll = function() {hideTopSubMunu()};

// прячем меню в бургер при прокрутке вверх
function hideTopSubMunu() {
	var navbarTopBurger = document.getElementById('navbar-top__burger');
	var navbarTopChekcbox = document.getElementById('navbar-top__checkbox');
	var visibleBlock = 'visible-block';
	// показываем и скрываем бургер
    if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
        navbarTopBurger.classList.add(visibleBlock);
    } else {
        //document.getElementById("myP").className = "";
        navbarTopBurger.classList.remove(visibleBlock);
        navbarTopChekcbox.checked = false;
    }
}