
//////////////////////////////////////////////////////////////////
// Build process Grunt file
//////////////////////////////////////////////////////////////////

'use strict';

module.exports = grunt => {

	// Global variables...
	const globalConfig = {

		/*
			'path_dev_root' = source development files (eg. scss, js, images etc.)
			'path_app_root' = compiled 'app' asset files ready to be copied to 'dist' directory
			'path_dist_root' = compiled (distribution) asset files for web application usage
			'path_specs_root' = spec testing directory and configuration
			'path_pacts_root' = pact directory for Consumer Driven Contracts or 'CDCs'
			'path_dev_static_root' = the source of static page development files (eg. '500 error page')
			'path_dist_error_root' = compiled (distribution) static error pages ready for web application usage
		*/
		path_dev_root: 'src/',
		path_app_root: 'src/app/',
		path_dist_root: 'dist/',
		path_specs_root: 'specs/',
		path_pacts_root: 'specs/pacts/',
		path_dev_static_root: '<%= globalConfig.path_dev_root %>components/static/',
		path_app_error_root: '<%= globalConfig.path_app_root %>error/'
	};

	// Measures the time each task takes...
	require('time-grunt')(grunt);

	// Loads private package dependencies for JIT...
	require('jit-grunt')(grunt, {
		pact: '@pact-foundation/grunt-pact'
	});

	// Load grunt config...
	require('load-grunt-config')(grunt, {

		// auto grunt.initConfig
		init: true,

		// Pull through global variables
		data: {
			globalConfig: globalConfig, // Accessible with '<%= globalConfig %>'
		},

		// JIT (Just In Time) - load time of Grunt doesn't slow down if there are multiple plugins
		jitGrunt: true

	});
};


////////////////////////////////////////////////////////////////

