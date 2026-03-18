module.exports = [{
  type: "messageCreate",
  code: `
  $if[$includes[$toLowerCase[$message];kkkk]==true;
   $cooldown[$guildID;10s]
   $!addMessageReactions[$channelID;$messageID;$randomText[😂;🤣]]
  ]
  
`
}]
