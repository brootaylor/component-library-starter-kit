/**
 * This contains the core code for all effects
 * @module BWT
 */
var BWT = ((module, $) => {
	/**
	 * Functions for loading the charts
	 *
	 * @main loadCharts
	 */
	module.charts = (function () {
		/**
		 * This is a placeholder function for any charts JS
		 *
		 */
		const loadCharts = () => {
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

	})();

	return module;
})(BWT || {}, jQuery);
