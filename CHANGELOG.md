### 0.4.3
- added JS boilerplate
- refactored `::selection` and `box-sizing` as mixins

### 0.4.2
- Changed rows' flex-wrap to `nowrap`. Reason: wrapping breaks the purpose of rows. `nowrap` forces elements into a single line.

### 0.4.1
- Refactored form input styles.
- Using `silver` as standard color (for buttons, input, etc.).

### 0.4.0
- Added default fonts (`open sans`).

### 0.3.2
- Added Apache license.

### 0.3.1
- Added styles for form inputs.

### 0.3.0
- Added flex item properties (`align-self`).
- Added text-justify class.

### 0.2.8
- Added minified CSS.
- Renamed public CSS to `flexframework.css`.

### 0.2.7
- Simplified containers and fluid-containers.
- Simplified utility classes: i.e. remove `.row-no-fluid`; rename `.clear-container`.
- Change default `::selection` bg color.
- Minor formatting, name changes.

### 0.2.6
- Renamed/re-mapped `row` and `container-fluid`. Now we wrap sections with `container` (n.b. no "fluid"). We specify rows that aren't wrapped in '.container' class with `row` and if they are nested in `container`, rows are specified with `container-row`.

### 0.2.5
- Fixed possible bug w/ margins in `container-fluid` -- removed auto margins.
- Added pre-defined flex class selectors `flex-column` and `flex-row`.
- Added default buttons.

### 0.2.4
- Added basic `_utility` CSS selectors.
- Added "holy grail layout".
- Added anchor and ul resets; moved img reset.

### 0.2.3
- Changed to Compass project (rather than solely Sass).
    - Remarks: There is no point in trying to create personal mixins that already exist (in Compass).
- Added module folders (for external stylesheets -- e.g. resets).
- Split styles into partials.
- Added media queries.

### 0.2.2
- Added basic typography/font sizing.
- Renamed `styles.scss` to `FlexFramework.scss`.

### 0.2.1
- Added sticky footer.
