const sass = require('node-sass');

module.exports = {

	//
	// SASS / SCSS
	//

	// Compile SCSS into CSS
	options: {
		implementation: sass,
		sourceMap: true
	},
	dist: {
		files: {
			'<%= globalConfig.path_app_root %>css/styles.css': '<%= globalConfig.path_dev_root %>scss/styles.scss', // Main website styles
			'<%= globalConfig.path_app_root %>css/theme.css': '<%= globalConfig.path_dev_root %>scss/theme.scss' 	// Fractal pattern library 'theme' CSS
		}
	}
};
