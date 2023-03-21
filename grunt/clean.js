module.exports = {

	//
	// CLEAN
	//

	// Clean the 'app' and 'dist' directories before copying updated files across
	build: {
		src: [
			'<%= globalConfig.path_app_root %>',
			'<%= globalConfig.path_dist_root %>'
		]
	}
};
