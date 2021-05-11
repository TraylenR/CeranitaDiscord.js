const {who} = require("../../Variables/aliases.js");

module.exports = 
{
    name: "who",
    aliases: who,
    description: "Briefly describes who Ceranita is.",
    args: false,
    guildOnly: false,
    execute(message, args)
    {
        message.channel.send("I'm Ceranita! A character a former VP made a long time ago, repurposed into a Discord bot recentlyish. I was chosen largely because I'm the only character he had art of, hence my avatar.");
    }
}