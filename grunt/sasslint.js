module.exports = {

	//
	// SASSLINT
	//

	options: {
		configFile: 'sass-lint.yml'
	},
	my_target: [
		'<%= globalConfig.path_dev_root %>scss/**/*.scss'
	]
};