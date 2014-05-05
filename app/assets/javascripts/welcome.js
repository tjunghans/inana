(function ($) {
	'use strict';
	$(function($){


		$.supersized({
			slides  :  	[
				{
					image : '/assets/IMG_3052@2x.jpg',
					title : 'me, Inana'
				}
			],
			slideshow: false,
			image_protect: false,
			fit_always: 0,
			fit_landscape: 0,
			fit_portrait: 1,
			vertical_center: 1,
			horizontal_center: 1,
			min_width: 0,
			min_height: 0
		});
	});

}(jQuery));