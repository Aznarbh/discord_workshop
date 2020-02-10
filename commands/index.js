const config = require('../config.json');

const ping = require('./ping');
const say = require('./say');
const maths = require('./maths');
const help = require('./help');
const setprefix = require('./setprefix');
const mute = require('./mute');
const ban = require('./ban');
const kick = require('./kick');

var coms = {};
coms.ping = function (message) {
	ping.ping(message);
};
coms.say = function (message) {
	say.say(message);
};
coms.help = function (message) {
	help.help(message);
};
coms.maths = function (message) {
	maths.maths(message);
};
coms.setprefix = function (message) {
	setprefix.setprefix(message);
};
coms.mute = function (message) {
	mute.mute(message);
};
coms.ban = function (message) {
	ban.ban(message);
};
coms.kick = function (message) {
	kick.kick(message);
};

function printInfos() {
	console.log("Link is done !");
}

function executeCommand(message) {
	const args = message.content.slice(config.settings.prefix.length).trim().split(/ +/g);
	const cmd = args.shift().toLowerCase();
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