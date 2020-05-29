const Discord = require("discord.js")
var RoastsList = ["You’re the reason God created the middle finger", "You’re a grey sprinkle on a rainbow cupcake", "If your brain was dynamite, there wouldn’t be enough to blow your hat off", "Light travels faster than sound which is why you seemed bright until you spoke"] //I will add some more in the next update but if you want to add more just add one or more
commands = [
    {
        name: 'roast',
        run: async (client, message, args) => {
            message.delete()
            var roast = Math.floor(Math.random() * Math.floor(RoastsList.length));
            var user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
            let embed = new Discord.RichEmbed()
            .setDescription(`${RoastsList[roast]}, ${user}`)
            .setColor(client.config.colour)
            message.channel.send(embed)
        }
    }
]


events = []

module.exports = { commands, events }