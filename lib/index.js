var reactTools = require('react-tools');
var loaderUtils = require('loader-utils');
var jsx = require('pkunk-jsx');

module.exports = function(source) {
	this.cacheable && this.cacheable();

	this.callback(null, jsx(source));

/*	var sourceFilename = loaderUtils.getRemainingRequest(this);
	var current = loaderUtils.getCurrentRequest(this);

	var transform = reactTools.transformWithDetails(source, {
		harmony: query.harmony,
		stripTypes: query.stripTypes,
		es5: query.es5,
		sourceMap: this.sourceMap
	});
	if (transform.sourceMap) {
		transform.sourceMap.sources = [sourceFilename];
		transform.sourceMap.file = current;
		transform.sourceMap.sourcesContent = [source];
	}
	this.callback(null, transform.code, transform.sourceMap);*/
};
