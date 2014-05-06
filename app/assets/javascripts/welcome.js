(function ($) {
	'use strict';
	$(function($){


		$.supersized({

			slideshow: 1,
			autoplay: 1,
			start_slide: 0,
			slide_interval: 3000,
			transition: 1,
			transition_speed: 1000,
			stop_loop: 0,
			performance: 1,
			keyboard_nav: 1,
			image_protect: 0,
			fit_always: 0,
			fit_landscape: 0,
			fit_portrait: 1,
			vertical_center: 1,
			horizontal_center: 1,
			min_width: 0,
			min_height: 0,
			random: 1,
			slides  :  	[
				{
					image : '/assets/inana-003.jpg',
					title : 'me, Inana'
				},
				{
					image : '/assets/inana-004.jpg',
					title : 'me, Inana'
				},
				{
					image : '/assets/inana-001.jpg',
					title : 'me, Inana'
				},
				{
					image : '/assets/inana-002.jpg',
					title : 'me, Inana'
				},
				{
					image : '/assets/inana-005.jpg',
					title : 'me, Inana'
				},
				{
					image : '/assets/inana-006.jpg',
					title : 'me, Inana'
				}
			]
		});
	});

}(jQuery));