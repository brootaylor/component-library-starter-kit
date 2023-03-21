module.exports = {

	//
	// JS imports...
	//

	// Allows for multiple JS imports into a single file
	dist: {
		files: {
			'<%= globalConfig.path_app_root %>js/vendor.js': '<%= globalConfig.path_dev_root %>js/vendor/vendor.js',
			'<%= globalConfig.path_app_root %>js/base.js': '<%= globalConfig.path_dev_root %>js/base/base.js',
		}
	}
};
