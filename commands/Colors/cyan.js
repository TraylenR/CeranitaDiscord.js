const roles = require("../../Variables/roleNames.js");
const {removeRoles} = require("../../Functions/removeColorRoles.js")
const roleIDs = require("../../Variables/roleIDs.js");
const {cyan} = require("../../Variables/aliases.js");

module.exports = 
{
    name: "cyan",
    aliases: cyan,
    description: "Changes color to cyan!",
    args: false,
    guildOnly: true,
    execute(message, args)
    {
        removeRoles(message, roles.colors);
        
        // Adds the role and heart-reacts if the role exists. Otherwise, reacts with a question mark.
        if (message.guild.roles.cache.has(roleIDs.Cyan))
        {
            message.member.roles.add(roleIDs.Cyan);
            message.react("❤️");
        }
        else
        {
            message.react("❓");
        }
    }
}