'use strict';

// Site-specific JS files / modules

// Global JS functions...
/**
 * This contains the core code for all effects
 * @module BWT
 */
var BWT = function (module, $) {
	/**
  * objectFitPolyfill function
  *
  * @method objectFitPolyfill
  * @private
  */
	module.objectFitPolyfill = function () {

		/**
  * This function calls the 'objectFitImages' function from the 'objectFitImages' vendor JS file
   * It's a polyfill for legacy browsers - (mainly IE11 and older)
   * It passes the 'img.obj-fit' selector into the function to apply the polyfill to elements with this class
  *
  * @method objectFitInit
  * @private
  */
		var objectFitInit = function objectFitInit() {
			var $someImages = $('img.obj-fit');
			objectFitImages($someImages);
		};

		/**
   * Fires objectFitInit function
   *
   * @method init
   * @private
   */
		(function init() {
			objectFitInit();
		})();
	}();

	return module;
}(BWT || {}, jQuery);

/**
 * This contains the core code for all effects
 * @module BWT
 */
var BWT = function (module, $) {
	/**
  * Functions for smooth scrolling
  *
  * @main smoothScroll
  */
	module.smoothScroll = function () {
		/**
   * This function watches for clicks on the triggers, then gets the target position.
   * It then scrolls the page to that position
   *
   */
		var triggerSmoothScroll = function triggerSmoothScroll() {
			var $smoothTriggers = $('.js-smoothscroll');

			$smoothTriggers.on('click', function (event) {
				var $thisTrigger = $(this),
				    $thisTriggerHref = $thisTrigger.attr('href'),
				    $thisTarget = $($thisTriggerHref),
				    $thisTargetPosition = $thisTarget.offset().top;

				event.preventDefault();

				$('html, body').animate({
					scrollTop: $thisTargetPosition
				}, 1000);
			});
		};

		/**
   * This fires all functions for the smoothscroll
   *
   * @method init
   * @private
   */
		(function init() {
			triggerSmoothScroll();
		})();
	}();

	return module;
}(BWT || {}, jQuery);

// Component-specific JS functions...
/**
 * This contains the core code for all effects
 * @module BWT
 */
var BWT = function (module, $) {
	/**
  * Functions for loading the charts
  *
  * @main loadCharts
  */
	module.charts = function () {
		/**
   * This is a placeholder function for any charts JS
   *
   */
		var loadCharts = function loadCharts() {
			console.log("Charts logic could go here...");
		};

		/**
   * This fires all functions for the loadCharts
   *
   * @method init
   * @private
   */
		(function init() {
			loadCharts();
		})();
	}();

	return module;
}(BWT || {}, jQuery);
//# sourceMappingURL=base.js.map
