module.exports = (bot) => {
  
bot.status({
  text: "$membersCount[861313067291115541] pinwheelers!",
  type: "WATCHING",
})

bot.status({
  text: "$randomText[Five Nights at Pinwheel's;Five Nights at Freddy's;Five Nights at Freddy's 2;Five Nights at Freddy's 3;Five Nights at Freddy's: The Final Chapter;Five Nights at Freddy's: Sister Location;Five Nights at Freddy's: Pizzeria Simulator;Five Nights at Freddy's: Ultimate Custom Night;Five Nights at Freddy's: Security Breach]",
  type: "PLAYING",
  time: 30
})

bot.status({
  text: "FNAF com o $randomText[Anderson;Ycro;Volt] <3",
  type: "PLAYING",
  time: 15
})

bot.status({
  text: "Minecraft",
  type: "PLAYING",
  time: 15
})
  
bot.status({
  text: "amor para todo mundo!",
  type: "STREAMING",
  time: 15
})

bot.status({
  text: "ping: $pingms | DB ping: $dpPingms",
  type: "PLAYING", 
//PLAYING
//WATCHING
//LISTENING
//STREAMING
//COMPETING

  status: "online",
  time: 15
})
}
