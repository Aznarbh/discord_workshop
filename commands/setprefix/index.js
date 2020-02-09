const config = require('../../config.json');
const fs = require('fs');

module.exports = {
        setprefix: async function(message) {
                if (!message.member.hasPermission('ADMINISTRATOR')) {
                        message.channel.send(`Sorry <@${message.author.id}>, but it seems like you can't do that !\n`);
                        return;
                }
                let msg = message.content.split(" ")[1];
                config.settings.prefix = msg;
                fs.writeFile("config.json", JSON.stringify(config, null, 4), function (err) {
                        if (err) return console.log(err);
                        message.channel.send("Prefix set on `" + msg + "`");
                });
        }
}
