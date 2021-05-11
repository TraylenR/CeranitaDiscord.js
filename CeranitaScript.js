// If our environment doesn't already have the needed variables in place, we load them using dotenv.
if (!process.env.TOKEN)
{
    require('dotenv').config({ path: "./environmentVars.env"});
}

const fs = require("fs"); // Used to navigate through files so we can compartmentalize commands.
const {PREFIX, TOKEN, MAIN_SERVER_ID, MAIN_CHANNEL_ID} = process.env; // Retrieves all environment variables.
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>
{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setStatus("online");
    client.user.setActivity("VSCode");
});

client.commands = new Discord.Collection(); // Collection which we will populate with all available commands.

const commandFolders = fs.readdirSync("./commands");
for (const folder of commandFolders)
{
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
    for (const file of commandFiles)
    {
        const command = require(`./commands/${folder}/${file}`);

        // Sets new item in 'client.commands' collection
        // Key = command name, value = exported module
        client.commands.set(command.name, command);
    }
}


client.on('message', message =>
{
    // Ignores messages from bots or not starting with the command prefix
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    // Checks to ensure that, if we're in our main server, we're only accepting commands in the main (likely 'bot') channel.
    if (message.guild && message.guild.id == MAIN_SERVER_ID)
    {
        // Returns/exits if we aren't in the 'Bot' channel.
        if (message.channel.id !== MAIN_CHANNEL_ID) return;
    }

    // Stores up arguments (using a fancy regex to remove duplicate spaces), and saves the command (from [PREFIX][Command]) separately as lowercase.
    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    // Gets the associated command object from the command file, checking both the true command name and its aliases.
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    // Ignore the command if it wasn't found anywhere in /commands, as a command name or alias.
    if (!command) return;

    // Various checks to make sure we aren't trying to run a command in a nonsensical way.
    if (command.guildOnly && message.channel.type === "dm")
    {
        return message.reply("That command won't work in messages, sadly.");
    }
    if (command.args === true && args.length == 0)
    {
        return message.channel.send(`Command '${commandName}' requires arguments to function!`);
    }

    // Having gotten past all the checks, tries to run the command. Catches errors and provides error information to the console, which ~sometimes~ doesn't result in the bot crashing.
    try
    {
        command.execute(message, args);
    }
    catch (error)
    {
        console.error(error);
        message.channel.send(`Something went wrong with the command ${commandName}, sorry!`);
    }
});

client.login(TOKEN);