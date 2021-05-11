const roles = require("../../Variables/roleNames.js");
const {removeRoles} = require("../../Functions/removeColorRoles.js")
const roleIDs = require("../../Variables/roleIDs.js");
const {lime} = require("../../Variables/aliases.js");

module.exports = 
{
    name: "lime",
    aliases: lime,
    description: "Changes color to lime!",
    args: false,
    guildOnly: true,
    execute(message, args)
    {
        removeRoles(message, roles.colors);
        
        // Adds the role and heart-reacts if the role exists. Otherwise, reacts with a question mark.
        if (message.guild.roles.cache.has(roleIDs.Lime))
        {
            message.member.roles.add(roleIDs.Lime);
            message.react("❤️");
        }
        else
        {
            message.react("❓");
        }
    }
}