const roles = require("../../Variables/roleNames.js");
const {removeRoles} = require("../../Functions/removeColorRoles.js")
const roleIDs = require("../../Variables/roleIDs.js");
const {red} = require("../../Variables/aliases.js");

module.exports = 
{
    name: "red",
    aliases: red,
    description: "Changes color to red!",
    args: false,
    guildOnly: true,
    execute(message, args)
    {
        removeRoles(message, roles.colors);
        
        // Adds the role and heart-reacts if the role exists. Otherwise, reacts with a question mark.
        if (message.guild.roles.cache.has(roleIDs.Red))
        {
            message.member.roles.add(roleIDs.Red);
            message.react("❤️");
        }
        else
        {
            message.react("❓");
        }
    }
}