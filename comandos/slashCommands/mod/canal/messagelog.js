module.exports = {
  code: `
  $if[$channelHasPerms[$channelID;$guildID;ViewChannel]==true;
   $ephemeral
  ]
  $timezone[America/Recife]
  
  $let[channelID;$option[canal]]
  
 $interactionReply[Histórico de mensagens de **@$userTag[$get[channelID]]**
   $attachment[Histórico de mensagens enviadas hoje ($day) em $channelName[$get[channelID]]\n\n$getChannelVar[messageLogToday;$get[channelID]];WinderDB_messageLogToday_$userTag[$get[channelID]].txt;true]
   $attachment[Histórico de mensagens enviadas esta semana em $channelName[$get[channelID]]\n\n$getChannelVar[messageLogWeekly;$get[channelID]];WinderDB_messageLogWeekly_$userTag[$get[channelID]].txt;true]
   $attachment[Histórico de mensagens enviadas este mês ($month) em $channelName[$get[channelID]]\n\n$getChannelVar[messageLogMonth;$get[channelID]];WinderDB_messageLogMonth_$userTag[$get[channelID]].txt;true]
  
  ]
 
  `,
data: {
  "type": 1,
  "name": "messagelog",
  "description": "Histórico de mensagens enviadas em um canal.",
  "default_Channel_permissions": "8",
  "options": [
    {
      "type": 7,
      "description": "ID ou Menção",
      "required": true,
      "name": "canal",
      "channel_types": [
        0
      ]
    }
  ]
},
}