////////////////////////////
/// Requirments:
/// 	jquery
/// 	bootstrap/carousel
///
///
$(function() { // Document Ready

	///////////////////
	/// Timepicker Field
	$('.bh--form-time-picker').timepicker();

	///////////////////
	/// Colorpicker Field
	$('.bh--form-color-picker').spectrum({
		preferredFormat: "hex",
		showInput: true,
		allowEmpty: true
	});

	///////////////////
	/// Image Field
	$('.bh--form-image .carousel').carousel('pause');
	$('.bh--form-image .item a').click(function(e) {
		e.preventDefault();

		$('.bh--form-image .item a').removeClass('selected');
		$(this).addClass('selected');
	});

});
