async function mute (message) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
                message.channel.send(`Sorry <@${message.author.id}>, but it seems like you can't do that !\n`);
                return;
        }
        let MuteRole = message.guild.roles.find(role => role.name === "Mute");
        let MutedRole = message.guild.roles.find(role => role.name === "Muted");
        let pos = 1;
        if (!MuteRole && !MutedRole) {
//                let r = message.guild.roles.find(role => role.name === "Master Bot");
//                pos = r.position;
                await message.guild.createRole({
                                name: 'Mute',
                                hoist: "false",
                                mentionable: "false",
                                permissions: ["READ_MESSAGES"],
                                position: pos
                })
                .then(role => console.log(`Created new role with name ${role.name}`))
                .catch(console.error);
        }
        let NewMuteRole = message.guild.roles.find(role => role.name === "Mute");
        if (!NewMuteRole) return message.reply(`Cannot create or find the role Mute`);
        const categoryChannels = message.guild.channels.filter(channel => channel.type === "category");
        categoryChannels.forEach(channel => {
                channel.overwritePermissions(NewMuteRole, { SEND_MESSAGES: false, SPEAK: false });
        });
        const memberToMute = message.guild.member(message.mentions.users.first());
        memberToMute.addRole(NewMuteRole.id).catch(r => console.error(r));
}

module.exports = {
        mute
}

// channel.overwritePermissions(channel.guild.defaultRole, { VIEW_CHANNEL: false });
/*     const categoryChannels = message.guild.channels.filter(channel => channel.type === "category");

categoryChannels.forEach(channel => {
        channel.overwritePermissions(NewMuteRole, { WRITE_CHANNEL: false });
    });
*/