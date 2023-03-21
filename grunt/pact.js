module.exports = {

	//
	// Pact
	// Runs Consumer Driven Contracts or 'CDCs'
	// https://docs.pact.io/ , https://www.npmjs.com/package/@pact-foundation/grunt-pact
	//

	options: {
		port: 3000, // Port number that the server runs on, defaults to 1234
		dir: '<%= globalConfig.path_pacts_root %>contracts/', // Directory to write the pact contracts relative to the current working directory, defaults to none
		//consumer: <String>, // The name of the consumer to be written to the pact contracts, defaults to none
		//provider: <String> // The name of the provider to be written to the pact contracts, defaults to none
	},
	your_target: {
		// Specify Pact configuration files here
		src:[
			'<%= globalConfig.path_pacts_root %>**/*.pact.js'
		]
	}
};
