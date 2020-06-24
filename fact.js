const Discord = require('discord.js');
const got = require('got');

commands = [
    {
        name: 'fact',
        aliases: ['facts'],
        run: async (client, message, args) => {
            message.delete()

            got('https://www.reddit.com/r/facts/random/.json').then(response => {
                let content = JSON.parse(response.body);
                var title = content[0].data.children[0].data.title;
                var fact = content[0].data.children[0].data.selftext;
                wholeFact = new Discord.MessageEmbed()
                    .setTitle(`**${title}**`)
                    .setDescription(fact)
                    .setColor(client.config.colour)
                    .setFooter(client.l.fun.footer.replace('%SERVERNAME%', client.config.serverName).replace('%USER%', message.author.username))
                message.channel.send(wholeFact)
            }).catch(console.error);
    
        }
    }
]
events = []


module.exports = { commands, events }