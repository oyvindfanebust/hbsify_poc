var template = require("./template.hbs");

module.exports = function() {
	document.body.innerHTML = template({ name: "Øyvind" });
};