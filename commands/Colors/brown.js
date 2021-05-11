const roles = require("../../Variables/roleNames.js");
const {removeRoles} = require("../../Functions/removeColorRoles.js")
const roleIDs = require("../../Variables/roleIDs.js");
const {brown} = require("../../Variables/aliases.js");

module.exports = 
{
    name: "brown",
    aliases: brown,
    description: "Changes color to brown!",
    args: false,
    guildOnly: true,
    execute(message, args)
    {
        removeRoles(message, roles.colors);
        
        // Adds the role and heart-reacts if the role exists. Otherwise, reacts with a question mark.
        if (message.guild.roles.cache.has(roleIDs.Brown))
        {
            message.member.roles.add(roleIDs.Brown);
            message.react("❤️");
        }
        else
        {
            message.react("❓");
        }
    }
}