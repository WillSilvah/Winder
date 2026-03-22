module.exports = [{
  type: "messageCreate",
  code: `
  $onlyIf[$mentioned[0;true]==$authorID;]
  $if[$includes[$toLowerCase[$message];kkkk]==true;
   
   $!addMessageReactions[$channelID;$messageID;$randomText[😂;🤣]]
  ]
  $if[$includes[$toLowerCase[$message];morte;caveira;morri;morre;💀;☠]==true;
   
   $!addMessageReactions[$channelID;$messageID;💀]
  ]
  $if[$includes[$toLowerCase[$message];olá;oi;hello;hi;howdy]==true;
   $onlyIf[$argsCount[$message]<3;]
   
   $!addMessageReactions[$channelID;$messageID;👋]
  ]
  
`
}]
