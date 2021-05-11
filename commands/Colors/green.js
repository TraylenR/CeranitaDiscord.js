const roles = require("../../Variables/roleNames.js");
const {removeRoles} = require("../../Functions/removeColorRoles.js")
const roleIDs = require("../../Variables/roleIDs.js");
const {green} = require("../../Variables/aliases.js");

module.exports = 
{
    name: "green",
    aliases: green,
    description: "Changes color to green!",
    args: false,
    guildOnly: true,
    execute(message, args)
    {
        removeRoles(message, roles.colors);
        
        // Adds the role and heart-reacts if the role exists. Otherwise, reacts with a question mark.
        if (message.guild.roles.cache.has(roleIDs.Green))
        {
            message.member.roles.add(roleIDs.Green);
            message.react("❤️");
        }
        else
        {
            message.react("❓");
        }
    }
}