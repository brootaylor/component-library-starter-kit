# Grid layout system

This is the **global** layout system for presenting content in various grid-type layout configurations.

It makes use of a `@supports (display: grid)` [feature query](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) to only utilise the 'new' [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout) grid system. It falls back to a *Flexbox* solution if the browser doesn't adequately support the new CSS Grid Layout method.

**NOTE:** This grid solution can also use list markup if that seems more appropriate in the context.

For example...

```html
<ul class="grid grid-halves">
    <li class="grid-panel">
        <!-- Content goes here... -->
    </li>
    <li class="grid-panel">
        <!-- Content goes here... -->
    </li>
</ul>
```
