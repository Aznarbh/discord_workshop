const Discord = require("discord.js");
const client = new Discord.Client();
const commands = require('commands');
const config = require('./config.json');

client.on("ready", () => {
        commands.printInfos();
        console.log("Ready !");
});

client.on("message", (message) => {
        if (!message.content.startsWith(config.settings.prefix) || message.author.bot) return;
        commands.executeCommand(message);
});

client.login(config.token);