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
  $if[$includes[$toLowerCase[$message];bom;boa]-$includes[$toLowerCase[$message];dia;tarde;noite]==true-true;
   $cooldown[$guildID;10s]
   $!addMessageReactions[$channelID;$messageID;👋]
  ]
  $if[$includes[$toLowerCase[$message];olá;oi;hello;hi;howdy]==true;
   $onlyIf[$argsCount[$message]<3;]
   $cooldown[$guildID;10s]
   $!addMessageReactions[$channelID;$messageID;👋]
  ]
  
`
}]
