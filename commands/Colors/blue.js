const roles = require("../../Variables/roleNames.js");
const {removeRoles} = require("../../Functions/removeColorRoles.js")
const roleIDs = require("../../Variables/roleIDs.js");
const {blue} = require("../../Variables/aliases.js");

module.exports = 
{
    name: "blue",
    aliases: blue,
    description: "Changes color to blue!",
    args: false,
    guildOnly: true,
    execute(message, args)
    {
        removeRoles(message, roles.colors);
        
        // Adds the role and heart-reacts if the role exists. Otherwise, reacts with a question mark.
        if (message.guild.roles.cache.has(roleIDs.Blue))
        {
            message.member.roles.add(roleIDs.Blue);
            message.react("❤️");
        }
        else
        {
            message.react("❓");
        }
    }
}