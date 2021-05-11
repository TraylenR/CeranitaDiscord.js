const roles = require("../../Variables/roleNames.js");
const {color} = require("../../Variables/aliases.js");

module.exports = 
{
    name: "color",
    aliases: color,
    description: "Tells the user which colors are available as roles.",
    args: false,
    guildOnly: true,
    execute(message, args)
    {
        let ourMessage = "Currently, the available color roles are: ";
        for (let i = 0; i < roles.colors.length - 1; i++)
        {
            ourMessage += `${roles.colors[i]}, `;
        }

        ourMessage += `and ${roles.colors[roles.colors.length - 1]}!\n`;
        ourMessage += "(Rest in peace, gray. 😥)";
        message.channel.send(ourMessage);
    }
}