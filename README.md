# FlexFramework 0.6.1
###### A modern CSS-HTML framework

My custom CSS with the intention of replacing Bootstrap. [My website](http://deesus.github.io/) makes extensive use of FlexFramework and demonstrates what can be achieved with it.
This project was almost entirely created from scratch. 
Main goals: should be veritably responsive; should have a low learning curve; should solve common design issues; should use flexboxes to solve everything.

#### Requirements:
- [Sass](https://github.com/sass/sass)
- [Compass](http://compass-style.org/)

#### Features:
- Flexbox CSS grid system
- CSS resets
- CSS buttons
- Typography
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
    ├── dist/
    │    ├── index.html
    │    ├── stylesheets/
    │    │    ├── flexframework.css
    │    │    └── flexframework.min.css
    │    ├── scripts/
    │    │    └── scripts.js
    │    └── fonts/
    │
    └── src/
          ├── index.html
          ├── config.rb
          ├── fonts/
          ├── scripts/
          │    └── scripts.js
          ├── sass/
          │    ├── FlexFramework.scss
          │    ├── _flexgrid.scss
          │    ├── _fonts.scss
          │    ├── _media.scss
          │    ├── _normalize.scss
          │    ├── _resets.scss
          │    ├── _styles.scss
          │    ├── _typography.scss 
          │    └── _utility.scss 
          └── stylesheets/
               ├── FlexFramework.css
               └── flexframework.min.css
```

#### TODO:

###### Refactor:
+ [ ] Change 'Open Sans' font-face: use CDN source; revise code.
+ [x] Change tap targets to only activate on small screens [media queries]
+ [ ] Add media query for `print`
+ [ ] To decide: remove all margins/padding with `* {margin:0;padding:0;}` or only remove them for `body`? C.f. resets.
+ [ ] Wrap selectors inside mixins so that we can import only what we need
+ [x] HTML Boilerplate includes sticky footer wrapper and CSS
+ [ ] Organize sections -- esp. grouping related CSS classes more conspicuously

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

###### Future:
+ [ ] Use Autoprefixer over Sass
+ [ ] C.f. Gumby, Skeleton, and Pure frameworks for additional ideas

#### License:
Copyright (c) 2016 Deepankara Reddy. Apache 2 License.
