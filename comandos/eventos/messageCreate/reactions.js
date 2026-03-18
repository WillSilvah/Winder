module.exports = [{
  type: "messageCreate",
  code: `
  $if[$includes[$toLowerCase[$message];kkkk]==true;
   $!addMessageReactions[$channelID;$messageID;$randomText[😂;🤣]]
  ]
  
`
}]
