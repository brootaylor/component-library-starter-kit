module.exports = {

	//
	// Jasmine (testing)
	// https://jasmine.github.io/2.0/introduction.html
	//

	pivotal: {
		src: '<%= globalConfig.path_dev_root %>**/*.js',
		options: {
			summary: true,
			specs: '<%= globalConfig.path_specs_root %>*Spec.js',
			helpers: '<%= globalConfig.path_specs_root %>*Helper.js',
			vendor: [
				'<%= globalConfig.path_dev_root %>js/vendor/jquery-3.3.1.min.js',
				'<%= globalConfig.path_dev_root %>js/vendor/consoleError.js'
			],
			outfile: '<%= globalConfig.path_specs_root %>_SpecRunner.html',
			keepRunner: true
		}
	}

};
