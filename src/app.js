var template = require("./template.hbs");
var gen = require('./messageGenerator');

module.exports = function(target, options) {
	var message = gen(options.name);
	target.innerHTML = template({ message: message });
};