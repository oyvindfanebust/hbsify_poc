var template = require("./template.hbs");
var gen = require('./messageGenerator');

module.exports = function(target) {
	var message = gen('Øyvind');
	target.innerHTML = template({ message: message });
};