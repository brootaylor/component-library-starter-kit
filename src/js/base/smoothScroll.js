/**
 * This contains the core code for all effects
 * @module BWT
 */
var BWT = ((module, $) => {
	/**
	 * Functions for smooth scrolling
	 *
	 * @main smoothScroll
	 */
	module.smoothScroll = (function () {
		/**
		 * This function watches for clicks on the triggers, then gets the target position.
		 * It then scrolls the page to that position
		 *
		 */
		const triggerSmoothScroll = () => {
			let $smoothTriggers = $('.js-smoothscroll');

			$smoothTriggers.on('click', function(event) {
				let $thisTrigger = $(this),
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

	})();

	return module;
})(BWT || {}, jQuery);
