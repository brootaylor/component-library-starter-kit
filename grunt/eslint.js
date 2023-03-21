module.exports = {

	//
	// ESLINT
	//

	options: {
		configFile: '.eslintrc.js'
	},
	target: [
		'<%= globalConfig.path_dev_root %>js/**/*.js',
		'<%= globalConfig.path_dev_root %>components/**/*.js',
		'!<%= globalConfig.path_dev_root %>js/base/base.js',
		'!<%= globalConfig.path_dev_root %>js/vendor/**/*.js']
};
