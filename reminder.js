const Discord = require("discord.js")

//Config
const command = "!d bump" //What do you want the command to be (include the prefix)?
const title = "Bump me!" //What you want the title of the embed to be
const footer = "Automatic Command Reminder" //What you want the embed footer to be
const description = "Bump this server with" //What you want the description of the embed to say
const responsetime = "7200000" //Type the cooldown time of the command here (set in milliseconds). default is 7200000

// Latest change: Disboard Intergration, e.g. if you use this for Disboard bumping then it will use an embed just like Disboard. Also added a footer aswell in the config

//Main code (No need to edit)
commands = []

events = [
    {
        name: 'message',
        run: async (client, message, args) => {
            if (message.content === command) {
                let flag = true
                while (flag === true) {
                    flag = false
                    setTimeout(() => {
                        let embed = new Discord.MessageEmbed()
                            .setTitle(title)
                            .setDescription(`${description} \`${command}\``)
                            .setColor(client.config.colour)
                            .setFooter(footer)
                            if(command == "!d bump") { //Do not edit
                                embed.setColor("#24b7b7") //Do not edit
                                embed.setThumbnail('https://cdn.discordapp.com/avatars/302050872383242240/67342a774a9f2d20d62bfc8553bb98e0.png?size=128') //Do not edit
                            }
                        message.channel.send(embed)
                        flag = true
                    }, responsetime);
                } 
            }
        }
    }
]
module.exports = { commands, events }