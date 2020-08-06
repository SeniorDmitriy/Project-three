$(function(){

$('.slider__inner, .news__slider__inner').slick({
	nextArrow: '<button type="button" class="slick__btn slick-next"></button>',
	prevArrow: '<button type="button" class="slick__btn slick-prev"></button>',
	autoplay: 3000,
	infinite: false
});

$('input[type=radio], input[type=checkbox], select').styler();

$('.header__btn-menu').on('click', function(){
	$('.list__item').slideToggle();
});



});