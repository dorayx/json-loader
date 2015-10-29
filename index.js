/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stripJsonComments = require('strip-json-comments');

module.exports = function(source) {
	this.cacheable && this.cacheable();
	var strippedSource = stripJsonComments(source);
	var value = (typeof source === "string") ? JSON.parse(strippedSource) : strippedSource;
	this.value = [value];
	return "module.exports = " + JSON.stringify(value, undefined, "\t") + ";";
}
