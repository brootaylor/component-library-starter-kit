module.exports = {

	//
	// Image compression...
	//

	options: {
		optimizationLevel: 3, // Select optimization level between 0 and 7
		svgoPlugins: [{ removeViewBox: false }]
	},
	dynamic: {
		files: [{
			expand: true,
			cwd: '<%= globalConfig.path_app_root %>img/',
			src: [
				'**/*.{png,jpg,gif,svg}'
			],
			dest: '<%= globalConfig.path_app_root %>img/'
		}]
	}

};
