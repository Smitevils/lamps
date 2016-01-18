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
	//event.preventDefault();
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

//

$('.btn__main-filter-search').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('.main-filter__container').slideToggle("fast");
});

/* tabtab.js */
var active_tab = $('.animate-tabs .tabs').data('active-tab'); // search active tab
$('.animate-tabs .tabs').tabtab({
	tabMenu: '.tabs__menu',             // direct container of the tab menu items
	tabContent: '.tabs__content',       // direct container of the tab content items
	//next: '.tabs-controls__next',       // next slide trigger
	//prev: '.tabs-controls__prev',       // previous slide trigger

	startSlide: active_tab,                      // starting slide on pageload
	arrows: true,                       // keyboard arrow navigation
	dynamicHeight: true,                // if true the height will dynamic and animated.
	fixedHeight: false,                 // fixedHeight
	useAnimations: true,                // disables animations.

	easing: 'ease',                     // http://julian.com/research/velocity/#easing
	speed: 350,                         // animation speed
	slideDelay: 0,                      // delay the animation
	perspective: 1200,                  // set 3D perspective
	transformOrigin: 'center left',      // set the center point of the 3d animation
	perspectiveOrigin: '50% 50%',       // camera angle

	translateY: 0,                      // animate along the Y axis (val: px or ‘slide’)
	translateX: 0,                      // animate along the X axis (val: px or ‘slide’)
	scale: 1,                           // animate scale (val: 0-2)
	rotateX: 0,                        // animate rotation (val: 0deg-360deg)
	rotateY: 10,                         // animate Y acces rotation (val: 0deg-360deg)
	skewY: 0,                           // animate Y skew (val: 0deg-360deg)
	skewX: 0,                           // animate X skew (val: 0deg-360deg)
});

// easter egg

/*$('.i-truck-car').click(function(event) {
	var x = $('.i-truck-car').css('margin-top');
	x = x.substr(0, x.length - 2);
	x = parseInt(x);
	setInterval(function() {
		x = x - 1;
		$('.i-truck-car').css('margin-top', (x + "px"));
	}, 5);
});*/

// blog slider

$('#blog__slider').slick({
	vertical: false,
	infinite: true,
	arrows: true,
	swipe: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: false,
	speed: 400/*,
	prevArrow: $('.slick-prev'),
	nextArrow: $('.slick-next')*/
});

/* basket */

function basketItemCount(operator, value, object) {
	if (operator == "minus") {
		if (value > 1) {
			value--;
			object.val(value);
			object.attr('value', value);
		} else {
			return;
		}
	} else if (operator == "plus") {
		if (value < 100) {
			value++;
			object.val(value);
			object.attr('value', value);
		} else {
			return;
		}
	}
}
$('.item-minus').click(function(event) {
	event.preventDefault();
	var value = $(this).parents('.item-counter').find('.item-counter-input').val(); value = parseInt(value);
	var object = $(this).parents('.item-counter').find('.item-counter-input');
	var operator = "minus";
	basketItemCount(operator, value, object);
	//
	value = $(this).parents('.item-counter').find('.item-counter-input').val(); value = parseInt(value);
	checkPriceItem(object, value);
	checkEndPrice(object, value);
});
$('.item-plus').click(function(event) {
	event.preventDefault();
	var value = $(this).parents('.item-counter').find('.item-counter-input').val(); value = parseInt(value);
	var object = $(this).parents('.item-counter').find('.item-counter-input');
	var operator = "plus";
	basketItemCount(operator, value, object);
	//
	value = $(this).parents('.item-counter').find('.item-counter-input').val(); value = parseInt(value);
	checkPriceItem(object, value);
	checkEndPrice(object, value);
});
function checkPriceItem(object, value) {
	var end_price = 0;
	var price = parseInt(object.parents('.basket__table__item').find('.basket__table__price').html());
	end_price = price * value;
	object.parents('.basket__table__item').find('.basket__table__price-end').html(end_price)
}
function checkEndPrice() {
	var total_price = 0;
	$(".basket__table__price-end").each(function(indx, element){
		total_price = total_price + (parseInt($(this).html()));
	});
	$('.total-price').html(total_price);
}

$('.delite-item').click(function(event) {
	event.preventDefault();
	var item = $(this).parents('.basket__table__item');
	item.slideUp(400);
	setTimeout(function() {
		item.remove();
		checkEndPrice();
	}, 400);
	
});
checkEndPrice();

//

// Вкладки формы заказов
function checkFormTabs() {
	if ($('#buyer-method-1').is("checked")) {
		$('.legal-delivery').hide();
		$('.individual-delivery').show();
	} else if ($('#buyer-method-2').is("checked")) {
		$('.individual-delivery').hide();
		$('.legal-delivery').show();
	}
}
checkFormTabs();
$('.buyer-individual').click(function(event) {
	//checkFormTabs();
	$('.legal-delivery').hide();
	$('.individual-delivery').show();
});
$('.buyer-legal').click(function(event) {
	// checkFormTabs();
	$('.individual-delivery').hide();
	$('.legal-delivery').show();
});

function displayFirstSelectedFileMetadata() {
	var selectedFile = document.getElementById('ordering__content__upload-file').files[0];
	document.querySelector(".name-of-file").innerHTML = selectedFile.name;
	/*document.querySelector("#singleSize").innerHTML = selectedFile.size + " bytes";
	document.querySelector("#singleType").innerHTML = selectedFile.type;
	document.querySelector("#singleDate").innerHTML = selectedFile.lastModifiedDate;*/
}
$('#ordering__content__upload-file').change(function(event) {
	displayFirstSelectedFileMetadata();
});

/* если выбран чекбокс загрузить реквизиты */
$('#load-file-checkbox').click(function(event) {
	//alert()
	if ($('#load-file-checkbox').is(':checked')) {
		$('.ordering__content__upload-file, .name-of-file').show();
		$('.hide-fields-for-legal').hide();
	} else {
		$('.ordering__content__upload-file, .name-of-file').hide();
		$('.hide-fields-for-legal').show();
	}
});

/* загружаем файл на странице рассчитать проект */
function uploadFileGetProject() {
	var selectedFile = document.getElementById('get-project__upload-file').files[0];
	document.querySelector(".name-of-file").innerHTML = selectedFile.name + " " + selectedFile.size + " bytes";
	/*document.querySelector("#singleSize").innerHTML = selectedFile.size + " bytes";
	document.querySelector("#singleType").innerHTML = selectedFile.type;
	document.querySelector("#singleDate").innerHTML = selectedFile.lastModifiedDate;*/
}
$('#get-project__upload-file').change(function(event) {
	uploadFileGetProject();
});



});