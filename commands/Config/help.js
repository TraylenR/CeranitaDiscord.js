const {help} = require("../../Variables/aliases.js");
const PREFIX = process.env.PREFIX;

module.exports = 
{
    name: "help",
    aliases: help,
    description: "DMs a user all the possible commands, or provides information about a specific command.",
    args: false,
    guildOnly: false,
    usage: ["help", "help <someCommand>"],
    execute(message, args)
    {
        const output = [];
        const {commands} = message.client; // Magically gets the 'commands' collection from CeranitaScript.js.

        // If this was run without any arguments, then we DM the help sheet directly.
        if (args.length == 0)
        {
            // Adding all necessary info to 'output' before sending it.
            output.push("All commands I can currently handle:\n");
            output.push(commands.map(command => command.name).join('\n'));
            output.push(`\nUse "${PREFIX}help <commandName>" to get specific command info/usage!`);

            message.author.send(output, {split: true})
                // As the above is asynchronous (I believe), we ensure that is finished before the below message, thus we use '.then()'.
                .then(() => 
                {
                    // If the /help request came in a DM, we don't need to notify them that it was sent via DM.
                    if (message.channel.type == "dm") return;

                    message.reply("Sent a message with all the (current) possible commands!");
                })
                .catch(error => 
                {
                    console.error(`Could not send help DM to ${message.author.displayName}.\n`, error);
                    message.reply("Something went wrong trying to send you the command list. You might have direct messages from this server disabled.");
                })
        }

        // Otherwise, we provide the 'help' information about the command specified by the first argument.
        else
        {
            const commandName = args[0].toLowerCase();
            const command = commands.get(commandName) || commands.find(c => c.aliases && c.aliases.includes(commandName));

            if (!command)
            {
                return message.channel.send(`"${commandName}" doesn't seem to be a real command, unfortunately.`);
            }

            // Having found an existing command, we add several points of data to our 'output' before providing the info to the user.
            output.push(`*Name:* ${command.name}`);

            if (command.description) output.push(`*Description:* ${command.description}`);

            // Series of checks regarding a command's usage. If nothing we just output the prefix and the command, if multiple usages we output all of them, or if one specific (argument-based) usage we output it by itself.
            if (!command.usage)
            {
                output.push(`*Usage:* ${PREFIX}${command.name}`);
            }
            else if (command.usage.length > 1)
            {
                output.push(`*Usage:* ${PREFIX}${command.usage[0]}`);
                for (let i = 1; i < command.usage.length; i++)
                {
                    output.push(`${PREFIX}${command.usage[i]}`);
                }
            }
            else
            {
                output.push(`*Usage:* ${PREFIX}${command.usage}`);
            }

            message.channel.send(output, {split: true});
        }
    }
}