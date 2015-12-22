$(document).ready(function() {

// Подключаем fancybox
$(".fancybox").fancybox();
//$.fancybox.open("http://www.vsevgallery.ru/img/bPIC/201104/201104343574.jpg")
//$.fancybox( {href : 'http://www.bestfon.com.ua/file/16075/728x408/16:9/%D0%9A%D0%BE%D1%84%D0%B5-%D1%81-%D0%BA%D0%B5%D0%BA%D1%81%D0%BE%D0%BC_1400447656.jpg', title : 'Кофеек'} );
//$.fancybox( ["http://widefon.com/_ld/206/85864006.jpg", 'http://www.radionetplus.ru/uploads/posts/2012-12/1355892128_vlyublennym-v-kofe-14.jpg'] );
//$.fancybox( '<h1>Lorem lipsum</h1>' );
//$.fancybox.open('#modal-1');

// Кнопка каталога в меню
$('.inner-menu a').click(function(event) {
	event.preventDefault();
	$(this).parent().toggleClass('open');
});
//
$(document).click(function(event) {
	if ($(event.target).closest(".inner-menu").length) return;
	$('.inner-menu').removeClass('open');
	event.stopPropagation();
});

// basket popup slider

$('#basket-popup-slider').slick({
	vertical: true,
	infinite: false,
	arrows: true,
	swipe: false,
	slidesToShow: 3,
	slidesToScroll: 3,
	adaptiveHeight: true,
	speed: 100,
	prevArrow: $('.slick-prev'),
	nextArrow: $('.slick-next')
});

// remove slide

$('.basket-popup-close-btn').on('click', function(e) {
	e.preventDefault();
	var slideNumber = $(this).parents('.basket-main-popup__slide').index()
	console.log("удален товар в слайдере с индексом " + slideNumber)
	$('#basket-popup-slider').slick('slickRemove', slideNumber); //slideIndex
		if (slideIndex !== 0){
		slideIndex--;
	}
});

// show basket popup

var bmp = $('.basket-main-popup'); //basket_main_popup

$('.go-to-cart').hover(function() {
	//bmp.css('visibility', 'visible');
	bmp.addClass('open');
}, function() {
	//bmp.css('visibility', 'hidden');
	bmp.removeClass('open');
});

bmp.hover(function() {
	//bmp.css('visibility', 'visible');
	bmp.addClass('open');
}, function() {
	//bmp.css('opacity', '0.1').delay(3000).css('visibility', 'hidden');
	bmp.removeClass('open');
});



});