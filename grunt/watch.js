module.exports = {

	//
	// WATCH
	// Various tasks to run when developing and you need files to be watched (ie. 'grunt dev' build)
	//

	// Compiling SCSS and adding CSS vendor prefixes on watch...
	styles: {
		files: [
			'<%= globalConfig.path_dev_root %>**/*.scss'
		],
		tasks: [
			'sass',
			'postcss'
		]
	},

	// Importing and compiling JS on watch...
	scripts: {
		files: [
			'<%= globalConfig.path_dev_root %>js/**/*.js', 			// Global JS
			'<%= globalConfig.path_dev_root %>components/**/*.js'	// Component-specific JS
		],
		tasks: [
			'import',
			// 'eslint',
			'babel:dev'
		],
		options: {
			interrupt: true
		}
	},

	// Other asset file types like images, favicon icons and fonts / font icons etc. that need to be watched and copied to app/
	assets_other: {
		files: [
			'<%= globalConfig.path_dev_root %>img/**', // Images
			'<%= globalConfig.path_dev_root %>video/**', // Videos
			'<%= globalConfig.path_dev_root %>fonts/**', // Fonts / font icons
			'<%= globalConfig.path_dev_root %>ico/**' // favicon icons
		],
		tasks: [
			'copy:assets_other'
		]
	},

	// Output static error page templates (eg. '500.html')...
	html_static: {
		files: [
			'<%= globalConfig.path_dev_static_root %>**/*.hbs'
		],
		tasks: [
			'processhtml',
		]
	},
};
