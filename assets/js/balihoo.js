////////////////////////////
/// Requirments:
/// 	jquery
/// 	bootstrap/carousel
///
///
$(function() { // Document Ready

	///////////////////
	/// Timepicker Field
	$('.bh--timepicker').timepicker();

	///////////////////
	/// Colorpicker Field
	$('.bh--colorpicker').spectrum({
		preferredFormat: "hex",
		showInput: true,
		allowEmpty: true
	});

	///////////////////
	/// Image Field
	$('.bh--form-image .carousel').carousel('pause');

});
