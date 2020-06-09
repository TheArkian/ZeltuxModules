const Discord = require("discord.js")

// Why are you in this file? There nothing for you to edit

commands = [
    {
        name: 'bans',
        aliases: ['fb'],
        run: async (client, message, args) => {
            let bans = await message.guild.fetchBans([withReasons = true])
            let banString = bans
            .map(ban=> {
            let string = `${ban.user.tag} was banned for: ${ban.reason ? ban.reason: 'No reason given'}`
            return string
            })
            .join('\n')
            message.channel.send(banString, { split: true })
        }
    }
]

events = []


module.exports = { commands, events }