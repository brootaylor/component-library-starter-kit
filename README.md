# Component Library Starter Kit

Frontend component library 'starter kit' to help with the initial set up of a new web project that requires front-end development.

It's built upon [Fractal](https://github.com/frctl/fractal), a tool that enables the rapid development of components, templates and pages. This helps in assembling, previewing and documenting website component libraries, and then integrating them into web sites and applications.

## What does this framework do?

* Builds and documents a web component library that can then later be assembled in a variety of ways to build anything from larger components right up to whole pages.
* Able to output a complete static version of the web component library which can then be deployed to a server.
	- A URL (eg.`https://patterns.domain.com`) could then be shared with business product owners.
	- (*This is useful if the business is using an Agile feature driven workflow with product owners / UX & design / development*).
* Outputs production-ready F/E assets - *(ie. CSS, JS, Images, Fonts etc.)* - and copy's these assets to the MVC solution.

## Installation & initial setup

To get the project up and running, and view components in the browser, complete the following steps:

1. Download and install Node: <https://nodejs.org/> *(if required)*
2. Clone this repo
3. Install the Fractal CLI tool globally: `npm i -g @frctl/fractal`
4. Install project dependencies: `npm install`
5. To get front-end assets set up locally: `grunt`
6. Start the development environment: `fractal start --sync`  
	> Your default browser will automatically open on <http://localhost:3000>

## Developing & Building

### Where's the source code?

* F/E development of HTML, CSS, JS, images, fonts etc. is done in `src/`
* **NOTE:** Don't work in the `dist/` directory. This folder is where the source code deploys outputted code

### While developing

* **Run:** `fractal start --sync` and `grunt dev`

> **Builds on 'watch'**  
    - Your default or specified browser/s will automatically open on <http://localhost:3000>  
    - Fractal watches & compiles changes to the components (`.hbs` & `.config.json` *files*)  
    - Grunt watches & compiles changes to assets like *SCSS, JS, Images* etc.  
    - Outputs compiled assets to `src/app/`  
  	- Outputs compiled static HTML pages to `error/`  
    - Outputs compiled assets to `src/app/`  
    - Copies `src/app/` ==> `dist/app/`

### Outputting production-ready code

* **Run:** `grunt prod`

> **Full build**  
    - Outputs compiled assets to `src/app/`  
  	- Outputs compiled static HTML pages to `error/`  
  	- Cleans the `dist/` directory before copying new files across  
  	- Copies `src/_app/` ==> `/dist/_app/`

## Creating a static build of the pattern / component library

To create a static instance of this project, run the following task:

`fractal build`

* This will create a folder called `www`, into which the required files will be created. The contents of this directory can be deployed to a server if required.  
	> You can also preview a static version of the component library by opening the `index.html` file from within the `www` directory.
* A URL (eg.`https://patterns.domain.com`) could then be shared with business product owners.  
	> This will give them a static visual of the entire component library.


---

## Accessibility checklist

Developing for accessibility is basically keeping in mind that the end user is an actual human being that might or might not have limitations, disabilities, impairments and so on.

See some advice on [Developing for accessibility](https://medium.com/parksideinteractive/developing-for-accessibility-d14d50e18f70)
