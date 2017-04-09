$(function(){

	$('.comments-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		dots: true
	});

	$('.popular-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true,
	});

	$('.js-cat').on('click', function(){
		var cat = $(this).data('item');
		$('.gallery-category-item').removeClass('active');
		$(this).addClass('active');
		$('.gallery-item').hide();
		$('.gallery-item--'+cat).show();
	});

	$('.top-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		dots: true, 
		arrows: false
	});

	$('.comments-new h2').on('click', function(){
		if ( $(this).hasClass('open') ) {
			$('.comments-new').css('height', '84px');
			$('.comments-new-form').hide();
			$(this).removeClass('open');
		} else {
			$('.comments-new').css('height', '480px');
			$('.comments-new-form').show();
			$(this).addClass('open');
		}
	});
	
	$('.partners-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3
	});

	$('.news-slider__item').each(function(){
		var $width = $(this).data('width');
		var $top = $(this).data('top');
		$(this)
			.css('width', $width)
			.css('margin-top', $top);
	});

	$('.programm__item').each(function() {
		var $minus = $(this).data('minus');
		$(this).css('margin-top', -$minus);
	});

	var showmenu = $('.menu-volodin-second');
	$('.menu-volodin').on('click', function() {
		if (showmenu.hasClass('show')) {
			$(this).removeClass('active')
			$(showmenu).removeClass('show');
		} else {
			$(this).addClass('active');
			$(showmenu).addClass('show');
		}
	});

	$(document).on('click', function(e) {
		var showmenu = $('.menu-volodin-second');
		if (!$(e.target).closest(".menu-volodin").length) {
			$('.menu-volodin').removeClass('active')
			$(showmenu).removeClass('show');
		}
	  e.stopPropagation();
	});

	var secondmenu = $('.menu-item-has-children');
	$(secondmenu).on('click', function(e) {
		e.preventDefault();
		if ($(this).hasClass('active')) {
			$('.menu-item-has-children').removeClass('active');
			$('.menu-top-second').removeClass('show');
		} else {
			$('.menu-item-has-children').removeClass('active');
			$('.menu-top-second').removeClass('show');
			$(this).addClass('active');
			$(this).children('.menu-top-second').addClass('show');
		}
	});

	$(document).on('click', function(e) {
		var secondmenu = $('.menu-item-has-children');
		if (!$(e.target).closest(".menu-item-has-children").length) {
			$('.menu-item-has-children').removeClass('active');
			$('.menu-top-second').removeClass('show');
		}
		e.stopPropagation();
	});



});
