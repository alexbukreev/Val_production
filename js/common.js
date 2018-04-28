// developer: Alexander Bukreev, 2018
// e-mail: alexander.v.bukreev@gmail.com

// Прокрутка окна
window.onscroll = function() {hideTopSubMunu(35, 'navbar-top__burger', 'navbar-top__checkbox', 'btn__top-id', 'visible-block')};
// прячем меню в бургер при прокрутке вверх
function hideTopSubMunu(margingTop, id1, id2, id3, visibleClass) {
	var navbarTopBurger = document.getElementById(id1);
	var navbarTopChekcbox = document.getElementById(id2);
	var btnTopId = document.getElementById(id3);
	// показываем и скрываем бургер
    if (document.body.scrollTop > margingTop || document.documentElement.scrollTop > margingTop) {
        navbarTopBurger.classList.add(visibleClass);
        btnTopId.classList.remove('visible-none');
    } else {
        navbarTopBurger.classList.remove(visibleClass);
        btnTopId.classList.add('visible-none');
        navbarTopChekcbox.checked = false;
    }
}

// разделение на разряды в сумме на сайте
//cartTotal('cart-total');
//cartTotal('cart-total-2');
//function cartTotal(id) {
	//var htmlElem = document.getElementById(id);
	//console.log('d');
	//document.getElementById(id).innerHTML = "fff";
	//htmlElem.innerHTML = "fff";
	//if (htmlElem) {

		//htmlElem.innerHTML = 'fff';
		//htmlElem.dataset.total.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + '&nbsp;руб.';
	//}
//}

//window.onload = function() {
    cartTotal('cart-total');
    cartTotal('cart-total-2');
    function cartTotal(id) {
		var htmlElem = document.getElementById(id);
    	if (htmlElem) {
        	htmlElem.innerHTML = htmlElem.innerHTML.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        	//htmlElem.dataset.total.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + '&nbsp;руб.';
		}
    };
//}

// modal 
var modalId;
function getModal(id) {
	switch(id) {
		case 31:
			modalId = 'modal_textura';
		break;
		case 30:
			modalId = 'modal_diametr';
		break;
		default: modalId = id;
	}

	var MAIN_MODAL = document.getElementById('main-modal');
	MAIN_MODAL.classList.toggle('display-none');

	var visibleBlock = document.getElementById(modalId);
	visibleBlock.classList.toggle('display-none');
}

function closeBtn() {
	MAIN_MODAL = document.getElementById('main-modal');
	MAIN_MODAL.classList.toggle('display-none');

	var visibleBlock = document.getElementById(modalId);
	visibleBlock.classList.toggle('display-none');
}

function scrollOnTop() {
	window.scrollTo(0,0);
}