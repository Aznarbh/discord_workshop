const config = require('../../config.json');

async function say (message) {
        var args = message.content.replace(config.settings.prefix + "say ", "");
        message.delete();
        message.channel.send(args);
}

module.exports = {
        say
}