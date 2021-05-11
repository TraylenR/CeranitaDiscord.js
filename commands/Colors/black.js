const roles = require("../../Variables/roleNames.js");
const {removeRoles} = require("../../Functions/removeColorRoles.js")
const roleIDs = require("../../Variables/roleIDs.js");
const {black} = require("../../Variables/aliases.js");

module.exports = 
{
    name: "black",
    aliases: black,
    description: "Changes color to black!",
    args: false,
    guildOnly: true,
    execute(message, args)
    {
        removeRoles(message, roles.colors);

        // Adds the role and heart-reacts if the role exists. Otherwise, reacts with a question mark.
        if (message.guild.roles.cache.has(roleIDs.Black))
        {
            message.member.roles.add(roleIDs.Black);
            message.react("❤️");
        }
        else
        {
            message.react("❓");
        }
    }
}