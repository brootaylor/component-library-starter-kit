module.exports = {

	//
	// Copy all relevant folders & files to relevant 'app/' and 'dist/' directories...
	//

	// Copy CSS => (Used for 'watch' task)...
	styles: {
		files: [
			{
				expand: true,
				cwd: '<%= globalConfig.path_dev_root %>',
				src: [
					'app/css/**',
					'!app/css/**/theme.css', '!app/css/**/theme.css.map' // This is the CSS for the Fractal Web UI - (not needed in the solution)
				],
				dest: '<%= globalConfig.path_dist_root %>',
				filter: 'isFile'
			}
		]
	},

	// Copy JS => (Used for 'watch' task)...
	scripts: {
		files: [
			{
				expand: true,
				cwd: '<%= globalConfig.path_dev_root %>',
				src: [
					'app/js/**'
				],
				dest: '<%= globalConfig.path_dist_root %>',
				filter: 'isFile'
			}
		]
	},

	// Other assets (eg. Images, Video, Fonts etc.) => (Used for 'watch' task)...
	assets_other: {
		files: [
			{
				expand: true,
				cwd: '<%= globalConfig.path_dev_root %>',
				src: [
					'img/**',
					'ico/**',
					'video/**',
					'fonts/**'
				],
				dest: '<%= globalConfig.path_app_root %>',
				filter: 'isFile'
			}
		]
	},

	// Copy Aall relevant files from ./ and src/ copied across to src/app/...
	app_output: {
		files: [
			// 'src' files
			{
				expand: true,
				cwd: '<%= globalConfig.path_dev_root %>',
				src: [
					'**/*',
					'!app/**',
					'!components/**',
					'!scss/**', // Grunt task takes care of this
					'!js/**'    // Grunt task takes care of this
				],
				dest: '<%= globalConfig.path_app_root %>',
				filter: 'isFile'
			}
		]
	},

	// Copy all files from src/app/ copied across to dist/...
	dist_output: {
		files: [
			// 'Root' files
			{
				expand: true,
				cwd: './',
				src: [
					'manifest.json',
					'serviceworker.js',
					'humans.txt',
					'robots.txt',
					'sitemap.xml',
					'bitbucket-pipelines.yml',
					'.htaccess'
					],
				dest: '<%= globalConfig.path_dist_root %>',
				filter: 'isFile'
			},
			// 'app' files
			{
				expand: true,
				cwd: '<%= globalConfig.path_dev_root %>',
				src: [
					'app/**',
					'!app/css/**/theme.css', '!app/css/**/theme.css.map' // This is the CSS for the Fractal Web UI - (not needed in the 'dist' solution)
					],
				dest: '<%= globalConfig.path_dist_root %>',
				filter: 'isFile'
			}
		]
	}
};
