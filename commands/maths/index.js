const math = require('mathjs');
const Discord = require('discord.js');
const config = require('../../config.json');

async function maths(message) {
	let args = message.content.replace(config.settings.prefix + "say ", "").split(" ");
	if (!args[0]) return message.channel.send("Please, enter numbers.");
	let calcul;
	args.shift();
	try {
		calcul = math.evaluate(args.join(' '));
	} catch (e) {
		return message.channel.send("Please, enter some valid numbers.");
	}
	const mathEmbed = new Discord.RichEmbed()
		.setColor('#1489dc')
		.addField('Numbers', args.join(' '))
		.addField('Result', calcul);

	message.channel.send(mathEmbed);
}

module.exports = {
	maths,
}