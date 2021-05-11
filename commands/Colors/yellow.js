const roles = require("../../Variables/roleNames.js");
const {removeRoles} = require("../../Functions/removeColorRoles.js")
const roleIDs = require("../../Variables/roleIDs.js");
const {yellow} = require("../../Variables/aliases.js");

module.exports = 
{
    name: "yellow",
    aliases: yellow,
    description: "Changes color to yellow!",
    args: false,
    guildOnly: true,
    execute(message, args)
    {
        removeRoles(message, roles.colors);
        
        // Adds the role and heart-reacts if the role exists. Otherwise, reacts with a question mark.
        if (message.guild.roles.cache.has(roleIDs.Yellow))
        {
            message.member.roles.add(roleIDs.Yellow);
            message.react("❤️");
        }
        else
        {
            message.react("❓");
        }
    }
}