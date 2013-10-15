/*
 * jQuery plugin to check if a element is visible in viewport
 *
 * Licensed under the MIT licenses:
 * http://www.gnu.org/licenses/gpl.html
 *
 * @author Marc Schenk <marc(dot)schenk(at)kletterfux(dot)ch>
 * @param options object Define if elements height, width or both should be visible
 */
(function($) {

	$.fn.inViewport = function(orientation) {
		// offsets of current viewport relative to the document
		var winLeft = parseInt($(window).scrollLeft()),
			winRight = parseInt($(window).width() + winLeft),
			winTop = parseInt($(window).scrollTop()),
			winBottom = parseInt($(window).height() + winTop);

		// elements position relative to the document
		var elementLeft = parseInt(this.offset().left),
			elementRight = parseInt(elementLeft + this.outerWidth()),
			elementTop = parseInt(this.offset().top),
			elementBottom = parseInt(elementTop + this.outerHeight());

		// check if element is visible in current viewport
		var widthVisible = elementLeft >= winLeft && elementRight <= winRight,
			heightVisible = elementTop >= winTop && elementBottom <= winBottom;

		if (orientation == 'vertical') {
			return heightVisible;
		} else if (orientation == 'horizontal') {
			return widthVisible;
		} else {
			return widthVisible && heightVisible;
		}
	}

}(jQuery));
