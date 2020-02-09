const config = require('../config.json');

const ping = require('./ping');
const say = require('./say');
const maths = require('./maths');
const help = require('./help');
const setprefix = require('./setprefix');

var coms = {};
coms.ping = function (message) {
	ping.ping(message);
};
coms.say = function (message) {
	say.say(message);
};
coms.help = function (message) {
	console.log("HELP !");
	help.help(message);
};
coms.maths = function (message) {
	maths.maths(message);
};
coms.setprefix = function (message) {
	setprefix.setprefix(message);
};

function printInfos() {
	console.log("Link is done !");
}

function executeCommand(message) {
	const args = message.content.slice(config.settings.prefix.length).trim().split(/ +/g);
	const cmd = args.shift().toLowerCase();
//	console.log(coms);
	try {
		coms[cmd](message);
	} catch (e) {
		console.log("Function does not exist");
	}
}

module.exports = {
	printInfos,
	executeCommand,
}