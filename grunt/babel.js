module.exports = {

	//
	// BABEL
	//

	// Development output
	dev: {
		options: {
			sourceMap: true,
			presets: ['babel-preset-env'],
			compact: false,
			comments: true,
			minified: false
		},
		files: {
			'<%= globalConfig.path_app_root %>js/base.js': ['<%= globalConfig.path_app_root %>js/base.js']
		}
	},

	// Production output
	prod: {
		options: {
			sourceMap: true,
			presets: ['babel-preset-env'],
			compact: true,
			comments: false,
			minified: true
		},
		files: {
			'<%= globalConfig.path_app_root %>js/base.js': ['<%= globalConfig.path_app_root %>js/base.js']
		}
	}
};
