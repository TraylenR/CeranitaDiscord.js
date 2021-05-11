const {hello} = require("../../Variables/aliases.js");

module.exports = 
{
    name: "hello",
    aliases: hello,
    description: "Says hi to a user.",
    args: false,
    guildOnly: false,
    execute(message, args)
    {
        message.channel.send(`Hi, ${message.member ? message.member.displayName : message.author.username}!`);
    }
}