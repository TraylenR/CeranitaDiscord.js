const roles = require("../../Variables/roleNames.js");
const {removeRoles} = require("../../Functions/removeColorRoles.js")
const roleIDs = require("../../Variables/roleIDs.js");
const {purple} = require("../../Variables/aliases.js");

module.exports = 
{
    name: "purple",
    aliases: purple,
    description: "Changes color to purple!",
    args: false,
    guildOnly: true,
    execute(message, args)
    {
        removeRoles(message, roles.colors);
        
        // Adds the role and heart-reacts if the role exists. Otherwise, reacts with a question mark.
        if (message.guild.roles.cache.has(roleIDs.Purple))
        {
            message.member.roles.add(roleIDs.Purple);
            message.react("❤️");
        }
        else
        {
            message.react("❓");
        }
    }
}