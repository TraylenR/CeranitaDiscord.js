const {gray} = require("../../Variables/aliases.js");

module.exports = 
{
    name: "gray",
    aliases: gray,
    description: "Would change color to gray, if it were a color.",
    args: false,
    guildOnly: true,
    execute(message, args)
    {
        message.channel.send("We thought that gray was an Among Us color, but it isn't...")
        message.react("😭");
    }
}