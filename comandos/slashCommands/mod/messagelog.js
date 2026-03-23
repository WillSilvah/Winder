module.exports = {
  code: `
  $if[$channelHasPerms[$channelID;$guildID;ViewChannel]==true;
   $ephemeral
  ]
  $timezone[America/Recife]
  
  $let[userID;$option[user]]
  
 $interactionReply[Histórico de mensagens de **@$userTag[$get[userID]]**
   $attachment[Histórico de mensagens enviadas hoje ($day) por @$userTag[$get[userID]] ($authorID)\nC: ID do canal | M: ID da mensagem\n\n$getMemberVar[messageLogToday;$get[userID]];WinderDB_messageLogToday_$userTag[$get[userID]].txt;true]
   $attachment[Histórico de mensagens enviadas esta semana por @$userTag[$get[userID]] ($authorID)\nC: ID do canal | M: ID da mensagem\n\n$getMemberVar[messageLogWeekly;$get[userID]];WinderDB_messageLogWeekly_$userTag[$get[userID]].txt;true]
   $attachment[Histórico de mensagens enviadas este mês ($month) por @$userTag[$get[userID]] ($authorID)\nC: ID do canal | M: ID da mensagem\n\n$getMemberVar[messageLogMonth;$get[userID]];WinderDB_messageLogMonth_$userTag[$get[userID]].txt;true]
  
  ]
 
  `,
data: {
  "type": 1,
  "name": "messagelog",
  "description": "Histórico de mensagens enviadas pelo usuário.",
  "default_member_permissions": "8",
  "options": [
    {
      "type": 6,
      "name": "user",
      "description": "ID ou Menção",
      "required": true
    }
  ]
},
}