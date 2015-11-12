# json loader for webpack

## Difference

This json loader will strip the comments from the `.json` files. It is used for requiring a configuration file with some comments in it.

## Installation

~~`npm install json-loade`~~

*The change of the load is of course unnecessary so no need to pull request. The only way to install this is to save this dependency `dorayx/json-loader` into `package.json`*

## Usage

``` javascript
var json = require("json!./file.json");
// => returns file.json content without comments as json parsed object
```

Don't forget to polyfill `require` if you want to use it in node.
See `webpack` documentation.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
