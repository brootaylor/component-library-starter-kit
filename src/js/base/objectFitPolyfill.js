/**
 * This contains the core code for all effects
 * @module BWT
 */
var BWT = ((module, $) => {
	/**
	 * objectFitPolyfill function
	 *
	 * @method objectFitPolyfill
	 * @private
	 */
	module.objectFitPolyfill = (() => {

        /**
		 * This function calls the 'objectFitImages' function from the 'objectFitImages' vendor JS file
         * It's a polyfill for legacy browsers - (mainly IE11 and older)
         * It passes the 'img.obj-fit' selector into the function to apply the polyfill to elements with this class
		 *
		 * @method objectFitInit
		 * @private
		 */
		const objectFitInit = () => {
            let $someImages = $('img.obj-fit');
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
	})();

	return module;
})(BWT || {}, jQuery);
