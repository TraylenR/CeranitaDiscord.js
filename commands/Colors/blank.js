const roles = require("../../Variables/roleNames.js");
const {removeRoles} = require("../../Functions/removeColorRoles.js")
const {blank} = require("../../Variables/aliases.js");

module.exports = 
{
    name: "blank",
    aliases: blank,
    description: "Removes all color roles.",
    args: false,
    guildOnly: true,
    execute(message, args)
    {
        removeRoles(message, roles.colors);
        message.react("🤍");
    }
}