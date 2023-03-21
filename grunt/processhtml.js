module.exports = {

	//
	// Process html files at build time to modify them depending on the release environment requirements
	//

	dist: {
		options: {
			process: true,
			data: {
				title: 'Error static pages',
				message: 'This is for production distribution'
			}
		},
		files: {
			// Static partials that need to be processed...
			'<%= globalConfig.path_dev_static_root %>partials/doc_head_paths.html': ['<%= globalConfig.path_dev_static_root %>partials/doc_head_paths.hbs'],
			'<%= globalConfig.path_dev_static_root %>partials/doc_base_paths.html': ['<%= globalConfig.path_dev_static_root %>partials/doc_base_paths.hbs'],

			// Error pages (static versions) that need to be processed (eg.500.html)...
			'<%= globalConfig.path_app_error_root %>500.html': ['<%= globalConfig.path_dev_static_root %>static--error-500.hbs']
		}
	},

};
