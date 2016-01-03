$(document).ready(function() {

/* Кастомный скролл */

$(window).load(function(){
	$(".category-main-block__menu__basic").mCustomScrollbar();
	//$(".category-main-block__menu__submenu").mCustomScrollbar();
	$(".category-main-block__menu__submenu__content").mCustomScrollbar();
});

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

// show search window

$('.search-btn').click(function(event) {
	event.preventDefault();
	//открываем окно поиска
	$('.search-window').addClass('open');
	$('body').css('overflow', 'hidden');
});
$('.search-window__close-wrap').click(function(event) {
	event.preventDefault();
	//прячем окно поиска
	$('.search-window').removeClass('open');
	$('body').css('overflow', 'auto');
});

// открытие меню категорий на главной

//$('[data-category-main-menu]').hide();


/**/
$('[data-category-main="1"]').hover(function() {
	$('[data-category-main-menu="1"]').addClass('open');
	$('[data-category-main="2"], [data-category-main="3"]').addClass('hover');
}, function() {
	if ($('[data-category-main-menu="1"]').is(':hover')) {
		return;
	} else {
		$('[data-category-main-menu="1"]').removeClass('open');
		$('[data-category-main]').removeClass('hover');
	}
});

$('[data-category-main-menu="1"]').hover(function() {
	return;
}, function() {
	if ($('[data-category-main="1"]').is(':hover')) {
		return;
	} else {
		$('[data-category-main-menu="1"]').removeClass('open');
		$('[data-category-main]').removeClass('hover')
	}
});
/**/
$('[data-category-main="2"]').hover(function() {
	$('[data-category-main-menu="2"]').addClass('open');
	$('[data-category-main="1"], [data-category-main="3"]').addClass('hover');
}, function() {
	if ($('[data-category-main-menu="2"]').is(':hover')) {
		return;
	} else {
		$('[data-category-main-menu="2"]').removeClass('open');
		$('[data-category-main]').removeClass('hover');
	}
});

$('[data-category-main-menu="2"]').hover(function() {
	return;
}, function() {
	if ($('[data-category-main="2"]').is(':hover')) {
		return;
	} else {
		$('[data-category-main-menu="2"]').removeClass('open');
		$('[data-category-main]').removeClass('hover');
	}
});
/**/
$('[data-category-main="3"]').hover(function() {
	$('[data-category-main-menu="3"]').addClass('open');
	$('[data-category-main="1"], [data-category-main="2"]').addClass('hover');
}, function() {
	if ($('[data-category-main-menu="3"]').is(':hover')) {
		return;
	} else {
		$('[data-category-main-menu="3"]').removeClass('open');
		$('[data-category-main]').removeClass('hover');
	}
});

$('[data-category-main-menu="3"]').hover(function() {
	return;
}, function() {
	if ($('[data-category-main="3"]').is(':hover')) {
		return;
	} else {
		$('[data-category-main-menu="3"]').removeClass('open');
		$('[data-category-main]').removeClass('hover');
	}
});
/**/

$('[data-open-submenu]').click(function(event) {
	event.preventDefault();
	var submenu_number = $(this).data('open-submenu');
	$(this).parents('.category-main-block__menu').find('.category-main-block__menu__basic').css('left', '-100%');
	$(this).parents('.category-main-block__menu').find('[data-submenu="'+submenu_number+'"]').css('left', '0%');
});

$('.category-main-block__menu__submenu__back').click(function(event) {
	event.preventDefault();
	$(this).parents('.category-main-block__menu').find('.category-main-block__menu__basic').css('left', '0%');
	$(this).parents('.category-main-block__menu').find('[data-submenu]').css('left', '100%');
});

/* Слайдер новинок */

$('.novelty-slider').slick({
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 4,
	prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style="display: block;"></button>',
	nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;"></button>'
});

$('.bestsellers-slider').slick({
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 4,
	prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style="display: block;"></button>',
	nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;"></button>'
});


});