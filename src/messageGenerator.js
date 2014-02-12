module.exports = function(name) {
	var n = Math.floor((Math.random()*10)+1);
	return "Hello " + name + Array(n).join("!");
};