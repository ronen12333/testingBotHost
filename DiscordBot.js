const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '!';

client.on("ready", () => {
 console.log(`The bot is online now`)
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
    if(command === "ping") {
    await message.channel.send("Ping?");
  }
})

client.login(process.env.token);