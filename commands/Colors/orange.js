const roles = require("../../Variables/roleNames.js");
const {removeRoles} = require("../../Functions/removeColorRoles.js")
const roleIDs = require("../../Variables/roleIDs.js");
const {orange} = require("../../Variables/aliases.js");

module.exports = 
{
    name: "orange",
    aliases: orange,
    description: "Changes color to orange!",
    args: false,
    guildOnly: true,
    execute(message, args)
    {
        removeRoles(message, roles.colors);
        
        // Adds the role and heart-reacts if the role exists. Otherwise, reacts with a question mark.
        if (message.guild.roles.cache.has(roleIDs.Orange))
        {
            message.member.roles.add(roleIDs.Orange);
            message.react("❤️");
        }
        else
        {
            message.react("❓");
        }
    }
}