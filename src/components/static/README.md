# Static error pages

These are pages that need a completely static output - rather than the application piecing it together. For example the `500` page.

`.html` versions of these pages are outputted to the `error/` directory. The application project will then copy these files across to the applicable `artifacts/../error/` location.

**NOTE:** The static pages, (and related 'partials'), use a `processhtml` task to build it out.

The following snippet is an example of the HTML *paths* that need to be updated for the specific project. This specific snippet is from the `doc_head_paths.hbs` file...

```html
<!-- build:[href] /Assets/brand/PRA/FastmarketsV2/_dist/_app/css/ -->
<link rel="stylesheet" href="/css/styles.css">
<!-- /build -->

<!-- build:[href] /Assets/brand/PRA/FastmarketsV2/_dist/_app/ico/ -->
<link rel="apple-touch-icon" sizes="180x180" href="/ico/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/ico/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/ico/favicon-16x16.png">
<link rel="shortcut icon" href="/ico/favicon.ico">
<!-- /build -->
```

The `doc_base_paths.hbs` file also needs a similar treatment as follows...

```html
<!-- build:[src] /Assets/brand/PRA/FastmarketsV2/_dist/_app/js/ -->
<script src="/js/vendor.min.js"></script>
<script src="/js/base.min.js"></script>
<!-- /build -->
```

This ensures the outputted file path is what's need for production.
