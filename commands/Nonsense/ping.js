const {ping} = require("../../Variables/aliases.js");

module.exports = 
{
    name: "ping",
    aliases: ping,
    description: "Pongs when you ping.",
    args: false,
    guildOnly: false,
    execute(message, args)
    {
        message.channel.send("Pong!");
    }
}