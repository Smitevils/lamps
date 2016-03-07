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

// card - other goods of this category
$('.slider__goods-of-this-cathegory__container').slick({
	vertical: true,
	infinite: true,
	arrows: true,
	swipe: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	adaptiveHeight: true,
	speed: 100
	//prevArrow: $('.slick-prev'),
	//nextArrow: $('.slider__goods-of-this-cathegory__next-btn')
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

// show user profile popup

var upp = $('.user-profile-popup'); //sign-in-popup

$('.user-profile').hover(function() {
	upp.addClass('open');
}, function() {
	upp.removeClass('open');
});

upp.hover(function() {
	upp.addClass('open');
}, function() {
	upp.removeClass('open');
});

// show sign in popup

var sip = $('.sign-in-popup'); //sign-in-popup

$('.user-sign-in').hover(function() {
	sip.addClass('open');
}, function() {
	sip.removeClass('open');
});

sip.hover(function() {
	sip.addClass('open');
}, function() {
	sip.removeClass('open');
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
// $('[data-category-main="1"]').hover(function() {
// 	$('[data-category-main-menu="1"]').addClass('open');
// 	$('[data-category-main="2"], [data-category-main="3"]').addClass('hover');
// }, function() {
// 	if ($('[data-category-main-menu="1"]').is(':hover')) {
// 		return;
// 	} else {
// 		$('[data-category-main-menu="1"]').removeClass('open');
// 		$('[data-category-main]').removeClass('hover');
// 	}
// });

/*****************/

$('[data-category-main="1"]').click(function(event) {
	$('[data-category-main-menu="1"]').addClass('open');
	$('[data-category-main="2"], [data-category-main="3"]').addClass('hover');
});

$('[data-category-main="1"]').hover(function() {
	//
}, function() {
	if ($('[data-category-main-menu="1"]').is(':hover')) {
		return;
	} else {
		$('[data-category-main-menu="1"]').removeClass('open');
		$('[data-category-main]').removeClass('hover');
	}
});

/************/

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
// $('[data-category-main="2"]').hover(function() {
// 	$('[data-category-main-menu="2"]').addClass('open');
// 	$('[data-category-main="1"], [data-category-main="3"]').addClass('hover');
// }, function() {
// 	if ($('[data-category-main-menu="2"]').is(':hover')) {
// 		return;
// 	} else {
// 		$('[data-category-main-menu="2"]').removeClass('open');
// 		$('[data-category-main]').removeClass('hover');
// 	}
// });

$('[data-category-main="2"]').click(function(event) {
	$('[data-category-main-menu="2"]').addClass('open');
	$('[data-category-main="1"], [data-category-main="3"]').addClass('hover');
});

$('[data-category-main="2"]').hover(function() {
	// $('[data-category-main-menu="2"]').addClass('open');
	// $('[data-category-main="1"], [data-category-main="3"]').addClass('hover');
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
// $('[data-category-main="3"]').hover(function() {
// 	$('[data-category-main-menu="3"]').addClass('open');
// 	$('[data-category-main="1"], [data-category-main="2"]').addClass('hover');
// }, function() {
// 	if ($('[data-category-main-menu="3"]').is(':hover')) {
// 		return;
// 	} else {
// 		$('[data-category-main-menu="3"]').removeClass('open');
// 		$('[data-category-main]').removeClass('hover');
// 	}
// });

$('[data-category-main="3"]').click(function(event) {
	$('[data-category-main-menu="3"]').addClass('open');
	$('[data-category-main="1"], [data-category-main="2"]').addClass('hover');
});

$('[data-category-main="3"]').hover(function() {
	// $('[data-category-main-menu="3"]').addClass('open');
	// $('[data-category-main="1"], [data-category-main="2"]').addClass('hover');
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

$('.may-like').slick({
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 4,
	prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style="display: block;"></button>',
	nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;"></button>'
});

//
function checkOpenFilter() {
	if ($('.main-filter__container').is('.open')) {
		$('.main-filter__container').slideDown('fast');
	} else {
		$('.main-filter__container').slideUp('fast');
	}
}
checkOpenFilter();
$('.btn__main-filter-search').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$(this).toggleClass('open');
	//$('.main-filter__container').slideToggle("fast");
	$('.main-filter__container').toggleClass('open');
	checkOpenFilter();
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

/* табы в категориях */

function categoryTabs(active_tab) {
	$('.tabs__menu-item').removeClass('active');
	$('.tabs__menu-item[data-tab="'+active_tab+'"]').addClass('active');
	$('.tabs__content-item').removeClass('open');
	$('.tabs__content-item[data-tab-container="'+active_tab+'"]').addClass('open');
}

$('.tabs__menu-item').click(function(event) {
	event.preventDefault();
	var active_tab = $(this).data('tab');
	categoryTabs(active_tab);
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

// konami easter egg

var easter_egg = new Konami();
easter_egg.code = function() { alert('Konami code!'); }
easter_egg.load();

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
/* если выбран чекбокс самовывоз */
$('.delivery-method').click(function(event) {
	if ($('#delivery-individual-method-pickup').is(':checked')) {
		$('.adress-block').hide();
	} else {
		$('.adress-block').show();
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

/* карты */

if($('#map').length != 0){

            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 17,
                    scrollwheel: false,
                    navigationControl: false,
		            mapTypeControl: false,
		            scaleControl: false,
		            disableDefaultUI: false,
            		draggable: true,
                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(document.getElementById('map').dataset.centerx, document.getElementById('map').dataset.centery),

                    // How you would like to style the map.
                    // This is where you would paste any style found on Snazzy Maps.
                    styles:[
							  {
							    "stylers": [
							      { "hue": "#e6ff00" },
							      { "saturation": -100 },
							      { "gamma": 1.69 },
							      { "lightness": 10 }
							    ]
							  }
							]
                    };

                // Get the HTML DOM element that will contain your map
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above



                // Let's also add a marker while we're at it
                var image = document.getElementById('map').dataset.cursor;
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(document.getElementById('map').dataset.centerx, document.getElementById('map').dataset.centery),
                    map: map,
                    title: document.getElementById('map').dataset.title,
                    icon: image,
                    animation: google.maps.Animation.BOUNCE
                });

            var map = new google.maps.Map(mapElement, mapOptions);

            marker.setMap(map);
            }
        google.maps.event.addDomListener(window, 'load', init);
}

/* filter */

// var snapSlider = document.getElementById('price-limit');

// noUiSlider.create(snapSlider, {
// 	start: [5000, 10000],
// 	step: 1000,
// 	connect: true,
// 	range: {
// 		'min': 0,
// 		'max': 20000
// 	},
// 	format: wNumb({
// 		decimals: 1,
// 		mark: '//',
// 		thousand: '',
// 		prefix: 'от ',
// 		postfix: '',
// 	})
// });
// var snapValues = [
// 	document.getElementById('slider-snap-value-lower'),
// 	document.getElementById('slider-snap-value-upper')
// ];
if ($("#price-limit").length != 0) {
	var priceSlider = $('#price-limit')[0];
	noUiSlider.create(priceSlider, {
		start: [5000, 10000],
		step: 1000,
		connect: true,
		range: {
			'min': 0,
			'max': 20000
		},
		format: wNumb({
			decimals: 1,
			mark: '',
			thousand: '',
			prefix: 'от ',
			postfix: '',
		})
	});
	var priceSliderSnapValues = [
		$('#price-limit').parents('.filter-slider').find('.slider-snap-value-lower')[0],
		$('#price-limit').parents('.filter-slider').find('.slider-snap-value-upper')[0]
	];
	priceSlider.noUiSlider.on('update', function( values, handle ) {
		priceSliderSnapValues[handle].innerHTML = values[handle];
	});
};

if ($("#quantity-limit").length != 0) {
	var quantitySlider = $('#quantity-limit')[0];
	noUiSlider.create(quantitySlider, {
		start: [5000, 10000],
		step: 1000,
		connect: true,
		range: {
			'min': 0,
			'max': 20000
		},
		format: wNumb({
			decimals: 1,
			mark: '',
			thousand: '',
			prefix: 'от ',
			postfix: '',
		})
	});
	var quantitySliderSnapValues = [
		$('#quantity-limit').parents('.filter-slider').find('.slider-snap-value-lower')[0],
		$('#quantity-limit').parents('.filter-slider').find('.slider-snap-value-upper')[0]
	];
	quantitySlider.noUiSlider.on('update', function( values, handle ) {
		quantitySliderSnapValues[handle].innerHTML = values[handle];
	});
};

/* selects */

// initialize the selectize control
//$('#manufacturer').fancySelect();

// fetch the instance
//var selectize = $select[0].selectize;

/* card galery */
if ($("#galery-slider-for-1").length != 0 && $('#galery-slider-nav-1').length != 0) {
	$('#galery-slider-for-1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.galery-slider-nav-1',
		infinite: true
	});
	$('#galery-slider-nav-1').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '#galery-slider-for-1',
		dots: false,
		arrows: false,
		vertical: true,
		centerMode: false,
		focusOnSelect: true,
		infinite: true
	});
};

if ($("#galery-slider-for-2").length != 0 && $('#galery-slider-nav-2').length != 0) {
	$('#galery-slider-for-2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '#galery-slider-nav-2',
		infinite: true
	});
	$('#galery-slider-nav-2').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '#galery-slider-for-2',
		dots: false,
		arrows: false,
		vertical: true,
		centerMode: false,
		focusOnSelect: true,
		infinite: true
	});
};



/* fixed menu for scroll page */

var scrolled = 0; // переменная хранит значение page scrollTop
scrolled = window.pageYOffset || document.documentElement.scrollTop;
//console.log(scrolled);

window.onscroll = function() {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
  //console.log(scrolled);
  //
	if (scrolled >= 200) {
		$('body').addClass('scrolled');
		$('header').removeClass('animated fadeOutUp');
		$('header').addClass('animated fadeInDown');
	} else if (scrolled <= 200 && scrolled >= 100) {
		$('header').removeClass('animated fadeInDown');
		$('header').addClass('animated fadeOutUp');
	} else {
		$('body').removeClass('scrolled');
		$('header').removeClass('animated fadeInDown');
		$('header').removeClass('animated fadeOutUp');
	}
}

/* open modal windows */

/* fast see */
$('.main-product-card__label__buttons a:first-child').on('click', function(event) {
	event.preventDefault();
	$.fancybox.open('#fast-buy');
	setTimeout(function() {
		$('.slick-next').click();
	}, 100);
});

/* fast buy */
$('.main-product-card__label__buttons a:last-child').on('click', function(event) {
	event.preventDefault();
	$.fancybox.open('#modal-order-one-click');
});


/* btn close modal */
$('.btn__close-modal').click(function(event) {
	event.preventDefault();
	$.fancybox.close();
});

/* main popup signin */

function checkTabSignIn(tab_number) {
	$('.sign-in-menu__tab').removeClass('active');
	$('.sign-in-menu__tab-content').removeClass('open');
	$('.sign-in-menu__tab[data-tab="' + tab_number + '"]').addClass('active');
	$('.sign-in-menu__tab-content[data-tab-content="' + tab_number + '"]').addClass('open');
}
// tabs
$('.sign-in-menu__tab').click(function(event) {
	event.preventDefault();
	tab_number = $(this).data('tab');
	checkTabSignIn(tab_number);
});


/* плавный скролл к обьекту */

$('.scroll-to').click(function(e){
	e.preventDefault();
	var href = $(this).attr('href');
	var offsetTop = $(href).offset().top;

	$('html, body').stop().animate({scrollTop: offsetTop - 50}, 2000);
	e.preventDefault();
});

/* маски на инпуты */
$('[type="tel"]').mask('+7 (000) 000-00-00');

/* скролл к верху страницы */
$('body').materialScrollTop();

/* открываем фото на всю страницу */
$('.card__galery__btn-full-photo').click(function(e) {
	e.preventDefault();
	var imgpath = $('.galery-slider-for .slick-slide.slick-current.slick-active img').attr('src');
	$('#modal-img-full img').attr('src', imgpath);
	$.fancybox.open('#modal-img-full');
});

// печать страницы
$('.print-btn').click(function(e) {
	e.preventDefault();
	window.print();
});

// редактирование и сохранение пользовательских данных
$(document).on('click', '.user-info__edit-user-block', function(event) {
	event.preventDefault();
	$(this).parents('.user-info__block').addClass('editable');
	$(this).parents('.user-info__block').removeClass('static');
});
$(document).on('click', '.user-info__save-user-block', function(event) {
	event.preventDefault();
	$(this).parents('.user-info__block').removeClass('editable');
	$(this).parents('.user-info__block').addClass('static');
});

});
