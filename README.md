## FF - FlexFramework 0.2.2
###### A simple CSS-HTML framework

My custom CSS with the intention of replacing Bootstrap. This project was created from scratch. 
Main goals: design should be veritably responsive; should have a low learning curve; should solve common design issues; should use flexboxes to solve everything*.

#### Requirements:
- [Sass](https://github.com/sass/sass)
- [Compass](http://compass-style.org/)

#### Features:
- Flexbox CSS grid system
- Flexbox sticky footer
- HTML boilerplate

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
          └── stylesheets/
                └── FlexFramework.css
```

#### TODO:
- **Refactor**:
    + [x] HTML Boilerplate includes sticky footer wrapper and CSS
    + [ ] Review/revise CSS
- **Documentation**:
    + [ ] Add API documentation
    + [ ] Add showcase/example HTML (instead of just boilerplate template)
- **Functionality**:
    + [ ] Add CSS buttons
    + [ ] Add menus
    + [ ] Add utility functions
    + [x] Add typography
    + [x] Add media queries
- **Misc.**
    + [ ] Include standard dependencies: Modernizr, normalize.css [CSS reset], etc.
    + [ ] Move `img` styling to 'Default Styles' section
    + [ ] Make responsive
- **Future**
    + [ ] Consolidate [MythJS](https://github.com/segmentio/myth)
    + [ ] C.f. Gumby, Skeleton, and Pure frameworks for additional implementation ideas

#### License
Copyright (c) 2016 Dee Reddy.
