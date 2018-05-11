// developer: Alexander Bukreev, 2018
// e-mail: alexander.v.bukreev@gmail.com
'use strict';

// объект Валун на заказ
var valunNaZakaz = {
	length: 50,
	width: 50,
	hight: 0,
	bg: 'inputIndividuaOval',
	str: 'option1',
	calcPrice: function() {
		var strengthCoeff = 1;
		var formIndex = 40;
		if (this.bg == 'inputIndividuaRec') { formIndex = 50};
		if (this.str == 'option2') {strengthCoeff = 1.3};
		var price = ((this.length + this.width + (4 * this.hight)) * formIndex) * strengthCoeff;
		return price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	}
};

// слушателеть
function mainListener(id) {
	var mainSection = document.getElementById(id);


	// Потеря фокуса (blur)
	mainSection.addEventListener('blur', function(event) {
		if (event.target.id === 'inputIndividualLength') {
			lessNum(50);
			valunNaZakaz.length = parseInt(document.getElementById(event.target.id).value, 10);
			getPrice();
		};
		if (event.target.id === 'inputIndividualWidth') {
			lessNum(50);
			valunNaZakaz.width = parseInt(document.getElementById(event.target.id).value, 10);
			getPrice();
		};
		if (event.target.id === 'inputIndividualHeight') {
			lessNum(0);
			if (document.getElementById(event.target.id).value == '' || document.getElementById(event.target.id).value == '-' || document.getElementById(event.target.id).value == '+') { document.getElementById(event.target.id).value = 0 };
			valunNaZakaz.hight = parseInt(document.getElementById(event.target.id).value, 10);
			if (valunNaZakaz.hight < 0 || isNaN(valunNaZakaz.hight) || valunNaZakaz.hight == '') { valunNaZakaz.hight = 0 };
			getPrice();
		};
	}, true);

	// Ввод данных
	mainSection.addEventListener('input', function(event) {
		if (event.target.id === 'inputIndividualLength') {
			moreNum(500);
			valunNaZakaz.length = parseInt(document.getElementById(event.target.id).value, 10);
			if (valunNaZakaz.length < 50 || isNaN(valunNaZakaz.length)) { valunNaZakaz.length = 50 }
			getPrice();
		};
		if (event.target.id === 'inputIndividualWidth') {
			moreNum(500);
			valunNaZakaz.width = parseInt(document.getElementById(event.target.id).value, 10);
			if (valunNaZakaz.width < 50 || isNaN(valunNaZakaz.width)) { valunNaZakaz.width = 50 }
			getPrice();
		};
		if (event.target.id === 'inputIndividualHeight') {
			moreNum(500);
			valunNaZakaz.hight = parseInt(document.getElementById(event.target.id).value, 10);
			if (valunNaZakaz.hight < 0 || isNaN(valunNaZakaz.hight)) { valunNaZakaz.hight = 0 }
			getPrice();
		};
		/*
		if (event.target.id === 'inputIndividuaFormRadio1') {
			valunNaZakaz.bg = document.getElementById(event.target.id).value;
			getPrice();
		};
		if (event.target.id === 'inputIndividuaFormRadio2') {
			valunNaZakaz.bg = document.getElementById(event.target.id).value;
			getPrice();
		};
		if (event.target.id === 'strengthRadio1') {
			valunNaZakaz.str = document.getElementById(event.target.id).value;
			getPrice();
		};
		if (event.target.id === 'strengthRadio2') {
			valunNaZakaz.str = document.getElementById(event.target.id).value;
			getPrice();
		};
		*/
		if (event.target.id === 'valunComment') {
			textAreaIni();
		};
	}, true);

}

function btnOnClickBg(value) {
	valunNaZakaz.bg = value;
	getPrice();
}

function btnOnClickStr(value) {
	valunNaZakaz.str = value;
	getPrice();
}

function moreNum(value) {
	if (document.getElementById(event.target.id).value > value) {
		document.getElementById(event.target.id).value = value;
	}
};

function lessNum(value) {
	if (document.getElementById(event.target.id).value < value) {
		document.getElementById(event.target.id).value = value;
	}
};

function getPrice() {
	document.getElementById('inputIndividualPrice').innerHTML = valunNaZakaz.calcPrice();
	textAreaIni()
}

function textAreaIni() {
	var textArea = document.getElementById('valunZakaz');
	if (textArea) {
		var textComment = document.getElementById('valunComment');
		textArea.value = 'Валун на заказ: длина = ' + valunNaZakaz.length + ' см, ширина = ' +  valunNaZakaz.width +  ' см, высота = ' + valunNaZakaz.hight + ' см, основание = ' + deshifrator(valunNaZakaz.bg) + ', прочность = ' + deshifrator(valunNaZakaz.str) + ', цена = ' + valunNaZakaz.calcPrice() + ' руб. Комментарий: ' + textComment.value;
	}
}

function deshifrator(value) {
	if (value == 'inputIndividuaRec') { return 'прямоугольное'}
	if (value == 'inputIndividuaOval') { return 'округлое'}
	if (value == 'option1') { return 'стандартная'}
	if (value == 'option2') { return 'усиленная'}
		else {'error'};
}

