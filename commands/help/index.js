const config = require('../../config.json');
const Discord = require('discord.js');

async function help(message) {
	const Embed = new Discord.RichEmbed()
		.setColor('#7CFC00') // Green color
		.addField('Help page', '\u200b')
		.addField(`${config.settings.prefix}help`, 'Display this help page.')
		.addField(`${config.settings.prefix}setprefix [*new prefix*]`, 'Change the bot prefix.')
		.addField(`${config.settings.prefix}math [*calculation*]`, 'Make a simple calculation for you.')
		.addField(`${config.settings.prefix}say [*string*]`, 'Make the bot say something')
		.addField(`${config.settings.prefix}mute [*mention*]`, 'Mute the mentionned user')
		.addField(`${config.settings.prefix}kick [*mention*]`, 'Kick the mentionned user')
		.addField(`${config.settings.prefix}ban [*mention*]`, 'Ban the mentionned user')
		.addField(`${config.settings.prefix}ping`, 'Ping the bot')
		.setFooter(`Made by @You`);

	message.channel.send(Embed);
}

module.exports = {
	help,
}