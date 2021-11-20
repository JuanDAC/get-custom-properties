[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Get Custom Properties

> The library get custom properties from selector that you defined in your styles

## Table of contents

- [Project Name](#project-name)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [useBasic](#usebasic)
  - [Contributing](#contributing)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

Bring the custom properties defined by the selectors in the css styles or properties that you defined in the styles element inside the html document.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

To install and set up the library, run:

```sh
$ npm install get-custom-properties
```

Or if you prefer using Yarn:

```sh
$ yarn add get-custom-properties
```

## Usage

### from rule

custom properties from selector rule

Example:

`in CSS file`

```css
:root {
  --color-primary-600: #a33c3b;
  --color-primary-400: #f0706e;
  --color-primary-200: #ff918f;
  --custom-without-value: ;
}
```

`in JS file`

```mjs
import { getCustomProperties } from "get-custom-properties";

console.log(getCustomProperties(":root"));
// ['--color-primary-600', '--color-primary-400', '--color-primary-200', '--custom-without-value']
```

### from properties registered

custom properties from registered in `<style>` label

Example:

`in HTML file`

```html
<style id="customs-registers">
  @property --my-color {
    syntax: <color>;
    inherits: false;
    initialvalue: #c0ffee;
  }

  @property --my-othe-color {
    syntax: <color>;
    inherits: false;
    initialvalue: #570705;
  }
</style>
```

`in JS file`

```mjs
import { getCustomPropertiesRegisted } from "get-custom-properties";

console.log(getCustomPropertiesRegisted("#customs-registers"));
/* 
  [
    {
      name: "--my-color",
      syntax: "<color>",
      initialValue: "#c0ffee",
      inherits: false
    },  
    {
      name: "--my-other-color",
      syntax: "<color>",
      initialValue: "#570705",
      inherits: false
    },  
  ] 
  */
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/JuanDAC/power-styles/tags).

## Authors

- **JuanDAC** - [JuanDAC](https://github.com/JuanDAC)

See also the list of [contributors](https://github.com/JuanDAC/power-styles/contributors) who participated in this project.

## License

[MIT License](https://andreasonny.mit-license.org/2019)
