'use strict';

/*
* Paths config
*/
const paths = {
	build: `${__dirname}/www`,
	src: `${__dirname}/src/components`,
	static: `${__dirname}/src/app`,
	docs: `${__dirname}/docs`,
};

/*
 * Require the Fractal module
 */
const fractal = require('@frctl/fractal').create();

/*
 * Web UI Theme config
 */
const mandelbrot = require('@frctl/mandelbrot')({
	favicon: '/ico/favicon.ico',
	lang: 'en-gb',
	styles: ['default', '/css/theme.css'],
	static: {
		mount: 'fractal'
	}
});

/*
 * Customising Handlebars (ie. 'helpers')
 */
const hbs = require('@frctl/handlebars')({
	helpers: {
		ifEquals: function (v1, v2, options) {
			if (v1 === v2) {
				return options.fn(this);
			}
			return options.inverse(this);
		},
		unlessOneOf: function (v1, v2, v3, options) {
			if (!(v1 || v2 || v3)) {
				return options.fn(this);
			}
			return options.inverse(this);
		}
	}
});

/*
 * Project config
 */
fractal.set('project.title', 'Front End Component Library Framework');
fractal.set('project.version', '0.11.2018');
fractal.set('project.author', 'Bruce Taylor');

/*
 * BrowserSync integration
 */
fractal.web.set('server.sync', true);
fractal.web.set('server.syncOptions', {
    open: true, // Opens your default browser (eg. Chrome) unless specific browsers listed below...
    // browser: ['chrome', 'firefox'], // Specify browsers you'd like to open & sync automatically
});

/*
 * Components config
 */
fractal.components.set('default.preview', '@preview');
fractal.components.set('default.status', null);
fractal.components.set('statuses.prototype.color', 'lightgray');
fractal.components.set('statuses.wip.color', 'tomato');
fractal.components.set('statuses.ready.color', 'green');
fractal.components.engine(hbs);

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', paths.src);

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('ext', '.md');
fractal.docs.set('path', paths.docs);

/*
 * Web UI config
 */
fractal.web.theme(mandelbrot);
fractal.web.set('static.path', paths.static); // Tell the Fractal web preview plugin where to look for static assets.
fractal.web.set('builder.dest', paths.build); // Tell Fractal where to output a static HTML version.


/*
 * Export config
 */
module.exports = fractal;
