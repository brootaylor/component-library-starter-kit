# JS development

The JavaScript is split into 2 groups. `vendor` and `base`.

* JS in the `vendor` directory are 3rd party scripts / plugins (*eg. jQuery*)
* JS in the `base` directory are custom site-specific scripts

Each of these directories import their related scripts into a concatenated output. Namely `vendor.js` and `base.js` respectively.
