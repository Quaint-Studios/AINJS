// Discord variables
const Discord = require("discord.js");
const client = new Discord.Client();

// Authentication variables
const auth = require.main.require("./app/auth/auth.js");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

auth.login(client);

// Exports
module.exports.Discord = Discord;
module.exports.client = client;
module.exports.auth = auth;