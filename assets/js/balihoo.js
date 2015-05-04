"use strict";

////////////////////////////
/// Requirments:
/// 	jquery
/// 	bootstrap/carousel
///
///
$(function() { // Document Ready

	///////////////////
	/// Timepicker Field
	///
	///
	$('.bh-timepicker').timepicker();

	///////////////////
	/// Colorpicker Field
	///
	///
	$('.bh-colorpicker').spectrum({
		preferredFormat: "hex",
		showInput: true,
		allowEmpty: true
	});

	///////////////////
	/// Image Field
	///
	///
	$('.bh-form-image .carousel .item').each(function(){
		var next = $(this).next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));

		if (next.next().length>0) {
			next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');
		}
		else {
			$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
		}
	});
	$('.bh-form-image .carousel').carousel('pause');

});
