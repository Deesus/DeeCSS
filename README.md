# FlexFramework 0.4.1
###### A simple CSS-HTML framework

My custom CSS with the intention of replacing Bootstrap. [My website](http://deesus.github.io/) makes extensive use of FlexFramework and demonstrates what can be achieved with it.
This project was *almost* entirely created from scratch. 
Main goals: should be veritably responsive; should have a low learning curve; should solve common design issues; should use flexboxes to solve everything.

#### Requirements:
- [Sass](https://github.com/sass/sass)
- [Compass](http://compass-style.org/)

#### Features:
- Flexbox CSS grid system
- CSS resets
- CSS buttons
- typography
- Flexbox sticky footer
- HTML boilerplate

#### Quick start:
1. Cd to the the `src/` directory to modify existing resources.
2. Add a compass watcher in the `src` directory: `$ compass watch`.
3. Add/edit whatever you want to the stylesheets; the output will be written to `FlexFramework.css`.

#### Useful Info:
- External stylesheets (e.g. normalize.css) are placed in the `external` subdirectory
- Production resources are located in the `public` directory

#### File Structure:
```
FlexFramework/
    ├── README.md
    ├── CHANGELOG.md
    ├── LICENSE
    ├── public/
    │    ├── index.html
    │    ├── stylesheets/
    │    │    ├── flexframework.css
    │    │    └── flexframework.min.css
    │    ├── scripts/
    │    │    └── scripts.js
    │    └── fonts/
    │
    └── src/
          ├── config.rb
          ├── sass/
          │    ├── FlexFramework.scss
          │    ├── _flexgrid.scss
          │    ├── _fonts.scss
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

###### Refactor:
+ [ ] Wrap selectors inside mixins so that we can import only what we need
+ [ ] Use `ff` or `FF` in naming prefix to clear-up naming conventions
+ [ ] Do we really need `column` selector (width-less grid container)?
+ [x] HTML Boilerplate includes sticky footer wrapper and CSS
+ [ ] Review and revise TODOs, CSS, and HTML

###### Documentation:
+ [ ] Add API documentation
+ [ ] Add showcase/example HTML (instead of just boilerplate template)

###### Functionality:
+ [ ] Create more pre-defined flex class selectors
+ [x] Add CSS buttons
+ [ ] Add menus
+ [x] Add utility functions
+ [x] Add media queries
+ [ ] Add JS

###### Misc.:
+ [ ] Include standard dependencies: Modernizr, normalize.css [CSS reset], etc.
+ [ ] Make responsive

###### Future:
+ [ ] C.f. Gumby, Skeleton, MythJS, and Pure frameworks for additional ideas

#### License:
Copyright (c) 2016 Dee Reddy. Apache 2 License.
