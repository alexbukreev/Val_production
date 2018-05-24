// developer: Alexander Bukreev, 2018
// e-mail: alexander.v.bukreev@gmail.com

var gallerylId = 'gallery-modal';
var galleryGreyBg = 'gallery-bg';
var galleryPictId; // порядковое число из названия файла картинки
var countImg = 24 // кол-во картинк в галерее
function getGalleryModal(id) {
	var idNamePattern = 'gallery-';
	galleryPictId = id;
	galleryPictId = galleryPictId.replace(idNamePattern, '');

	document.getElementById(gallerylId).style.background = 'url("http://kupivalun.ru/wa-data/public/site/valunov/img/gallery/large/' + galleryPictId + '.jpg")  center center / contain no-repeat';

	document.getElementById(gallerylId).classList.toggle('display-none');
	document.getElementById(galleryGreyBg).classList.toggle('display-none');
}

function closeGalleryBtn() {
	document.getElementById(gallerylId).classList.add('display-none');
	document.getElementById(galleryGreyBg).classList.add('display-none');
}

function galleryLeft() {
	if (galleryPictId == 1) { galleryPictId = countImg+1}
	galleryPictId = --galleryPictId;
	document.getElementById(gallerylId).style.background = 'url("http://kupivalun.ru/wa-data/public/site/valunov/img/gallery/large/' + galleryPictId + '.jpg")  center center / contain no-repeat';
}

function galleryRight() {
	if (galleryPictId == countImg) { galleryPictId = 0}
	galleryPictId = ++galleryPictId;
	document.getElementById(gallerylId).style.background = 'url("http://kupivalun.ru/wa-data/public/site/valunov/img/gallery/large/' + galleryPictId + '.jpg")  center center / contain no-repeat';
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key == "Escape" || evt.key == "Esc");
    } else {
        isEscape = (evt.keyCode == 27);
    }
    if (isEscape) {
        closeGalleryBtn();
    }
};

