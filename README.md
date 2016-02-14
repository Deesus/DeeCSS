## FF - FlexFramework 0.2.2
###### A simple CSS-HTML framework

My custom CSS with the intention of replacing Bootstrap. This project was created from scratch. 
Main goals: design should be veritably responsive; should have a low learning curve; should solve common design issues.

#### Requirements:
- [Sass](https://github.com/sass/sass)
- [Compass](http://compass-style.org/)

#### Features:

- Flexbox CSS grid system
- Flexbox sticky footer
- HTML boilerplate
- Class selectors to solve common design tasks

#### File Structure:
```
DeeCSS/
    ├── README.md
    ├── public/
    │    ├── index.html
    │    ├── stylesheets/
    │    │    └── styles.css
    │    └── scripts/
    │          └── scripts.js
    └── Sass/
          ├── FlexFramework.scss
          ├── styles.css
          └── styles.css.map
```

#### TODO:

- **Refactor**:
    + [x] Consolidate Sass
        + [ ] Find a way to consolidate `-webkit-box` inside mixins. Possibly create separate mixins specifically for -webkit-box?
    + [x] HTML Boilerplate includes sticky footer wrapper and CSS
    + [ ] Consolidate [MythJS](https://github.com/segmentio/myth)
    + [ ] Separate menus, buttons, etc. into different CSS and different partials
- **Documentation**:
    + [ ] Improve README
    + [ ] Add API documentation
    + [X] Show file structure
    + [ ] Add showcase/example HTML (instead of just boilerplate template)
- **Functionality**:
    + [ ] Add CSS buttons
    + [ ] Add menus
    + [ ] Add (more) utility functions
    + [ ] Add typography
- **Major/structural changes**:
    + [ ] Customize grid classes (e.g. "lg-4" or "sm-4") for different screen sizes (i.e. small, medium, large screens)
    + [ ] Make adaptive (`@media` for desktop, mobile, touchpad versions)
    + [ ] Make responsive to screen size -- c.f. Bootstrap, Heroku, or Tumblr
    + [ ] C.f. Gumby, Skeleton, and Pure frameworks for additional implementation ideas
    + [ ] Include standard dependencies: Modernizr, normalize.css [CSS reset], etc.
- **Misc.**
    + [ ] Move `img` styling to 'Default Styles' section

#### License
Copyright (c) 2016 Dee Reddy.
