module.exports = {

	//
	// CSS MINIFICATION
	//

	dist: {
		files: [{
			expand: true,
			cwd: '<%= globalConfig.path_app_root %>css',
			src: [
				'styles.css'
			],
			dest: '<%= globalConfig.path_app_root %>css'
		}]
	},

};
