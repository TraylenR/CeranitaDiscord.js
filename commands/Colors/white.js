const roles = require("../../Variables/roleNames.js");
const {removeRoles} = require("../../Functions/removeColorRoles.js")
const roleIDs = require("../../Variables/roleIDs.js");
const {white} = require("../../Variables/aliases.js");

module.exports = 
{
    name: "white",
    aliases: white,
    description: "Changes color to white!",
    args: false,
    guildOnly: true,
    execute(message, args)
    {
        removeRoles(message, roles.colors);
        
        // Adds the role and heart-reacts if the role exists. Otherwise, reacts with a question mark.
        if (message.guild.roles.cache.has(roleIDs.White))
        {
            message.member.roles.add(roleIDs.White);
            message.react("❤️");
        }
        else
        {
            message.react("❓");
        }
    }
}