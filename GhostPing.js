const Discord = require("discord.js")
var bot = new Discord.Client()
const footer = "Coding done by @JXTQ#6718 with help from @MCUniversity#0859 & @Matt_#2020" //Do not change please

// Hey there!
// Thank you for installing my Zeltux Module!
// This is free but I would be happy if you did not use this code in your own bot.
// I will try make this module look and work better when I have time
// Please only Edit stuff inside the 'Config' as you could break the code if not
// If this no longer works send me a DM on Discord (@JXTQ#6718)
// Version 1.3

// -------Config-----------------------

const timeouttime = "60000" //Change the time a person gets tagged (In milliseconds)

// The embed colours are determined by your embed colour in your config

// -------Main Code-------------------- DO NOT CHANGE -------------------------------------


commands = [
  {
      name: 'gphelp',
      aliases: ['gph'],
      run: async (client, message, args) => {
        message.delete()

        let embed = new Discord.MessageEmbed()
            .setColor(client.config.colour) 
            .setTitle("GhostPing Module Help")
            .setDescription("Thank you for installing my useless and annoying module. If this module does not work then please contact me!")
            .addField("Commands:", `${client.config.prefix}ghostping and ${client.config.prefix}credits`, true)
            .setFooter(footer)
          message.channel.send(embed);
      }
    },
    {
      name: 'ghostping',
      aliases: ['gp'],
      run: async (client, message, args) => {
        let member = message.guild.member(message.member);
          if (message.member.hasPermission('ADMINISTRATOR')) {
            message.delete()

            let embed2 = new Discord.MessageEmbed()
              .setTitle("GhostPing Module Starting")
              .setColor(client.config.colour) 
              .setDescription("Ghostping has been activated. All information on what this Module has done so far will be in your CMD. To disable it, restart the bot! (This will delete in 5 seconds)")
              .setFooter(footer)
              message.channel.send(embed2).then(msg => {msg.delete(5000)})
              console.log('\x1b[42m'+"GhostPing"+'\x1b[0m'+" has been enabled successfully!")
              let flag = true
              while (flag === true) {
                flag = false
                setInterval(() => {
                  let a = async function(){
                  let arr = message.guild.members.keyArray()
                  let num = Math.floor(Math.random() * arr.length)
                  let msg = await message.channel.send("<@" + arr[num] + ">")
                  console.log(`Tagged user \x1b[42m<@${arr[num]}>\x1b[0m successfully`)
                  msg.delete()
                  flag = true
 }
 a();
               }, timeouttime);
            }
    }
  }},
    {
    name: 'credits',
    aliases: ['gpc'],
    run: async (client, message, args) => {
      message.delete()

      let embed3 = new Discord.MessageEmbed()
          .setColor(client.config.colour)
          .setTitle("GhostPing Credits")
          .addField("Idea and code:", "JXTQ", true)
          .addField("Help from:", "MCUniversity & Matt_", true)
          .setFooter(footer)
        message.channel.send(embed3);
      }
    }
]


events = []


module.exports = { commands, events }