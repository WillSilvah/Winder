module.exports = [{
  type: "messageCreate",
  code: `
  $if[$includes[$toLowerCase[$message];kkkk]==true;
   $cooldown[$guildID;10s]
   $!addMessageReactions[$channelID;$messageID;$randomText[😂;🤣]]
  ]
  $if[$includes[$toLowerCase[$message];morte;caveira;morri;morre;💀;☠]==true;
   $cooldown[$guildID;10s]
   $!addMessageReactions[$channelID;$messageID;💀]
  ]
  
`
}]
