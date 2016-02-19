# FF - FlexFramework 0.2.5
###### A simple CSS-HTML framework

My custom CSS with the intention of replacing Bootstrap. This project was *almost* entirely created from scratch. 
Main goals: should be veritably responsive; should have a low learning curve; should solve common design issues; should use flexboxes to solve everything.

#### Requirements:
- [Sass](https://github.com/sass/sass)
- [Compass](http://compass-style.org/)

#### Features:
- Flexbox CSS grid system
- CSS resets
- Flexbox sticky footer
- HTML boilerplate

#### Quick start:
- External stylesheets (e.g. normalize.css) are placed in the `external` subdirectory
- Production resources are located in the `public` directory

1) Cd to the the `src/` directory to modify existing resources.
2) Add a compass watcher in the `src` directory: `$ compass watch`.
3) Add/edit whatever you want to the stylesheets; the output will be written to `FlexFramework.css`.

#### File Structure:
```
FlexFramework/
    ├── README.md
    ├── CHANGELOG.md
    ├── public/
    │    ├── index.html
    │    ├── stylesheets/
    │    │    └── styles.css
    │    └── scripts/
    │          └── scripts.js
    └── src/
          ├── config.rb
          ├── sass/
          │    ├── FlexFramework.scss
          │    ├── _flexgrid.scss
          │    ├── _media.scss
          │    ├── _resets.scss 
          │    ├── _typography.scss 
          │    └── _utility.scss 
          ├── stylesheets/
          │    └── FlexFramework.css
          └── external/
               └── normalize.scss
```

#### TODO:
- **Refactor**:
    + [x] HTML Boilerplate includes sticky footer wrapper and CSS
    + [ ] Review/revise CSS
    + [ ] Add minified CSS
- **Documentation**:
    + [ ] Add API documentation
    + [ ] Add showcase/example HTML (instead of just boilerplate template)
- **Functionality**:
    + [ ] Create more pre-defined flex class selectors
    + [x] Add CSS buttons
    + [ ] Add menus
    + [ ] Add utility functions
    + [x] Add typography
    + [x] Add media queries
    + [ ] Add JS
- **Misc.**
    + [ ] Include standard dependencies: Modernizr, normalize.css [CSS reset], etc.
    + [ ] Move `img` styling to 'Default Styles' section
    + [ ] Make responsive
- **Future**
    + [ ] C.f. Gumby, Skeleton, MythJS, and Pure frameworks for additional implementation ideas

#### License:
Copyright (c) 2016 Dee Reddy.
