module.exports = {

	//
	// PostCSS
	// Adds vendor prefixes to support legacy browsers
	//

	options: {
		processors: [
			require('postcss-preset-env')({
				features: {
					'nesting-rules': true
				}
			}),
			require('autoprefixer')({})
		]
	},
	dist: {
		src: '<%= globalConfig.path_app_root %>css/*.css'
	}

};
