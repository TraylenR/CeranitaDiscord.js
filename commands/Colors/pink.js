const roles = require("../../Variables/roleNames.js");
const {removeRoles} = require("../../Functions/removeColorRoles.js")
const roleIDs = require("../../Variables/roleIDs.js");
const {pink} = require("../../Variables/aliases.js");

module.exports = 
{
    name: "pink",
    aliases: pink,
    description: "Changes color to pink!",
    args: false,
    guildOnly: true,
    execute(message, args)
    {
        removeRoles(message, roles.colors);
        
        // Adds the role and heart-reacts if the role exists. Otherwise, reacts with a question mark.
        if (message.guild.roles.cache.has(roleIDs.Pink))
        {
            message.member.roles.add(roleIDs.Pink);
            message.react("❤️");
        }
        else
        {
            message.react("❓");
        }
    }
}