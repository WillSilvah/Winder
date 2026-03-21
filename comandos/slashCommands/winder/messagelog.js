module.exports = {
  code: `
  $if[$channelHasPerms[$channelID;$guildID;ViewChannel]==false;
   $ephemeral
  ]
  
  $let[userID;$option[user]]
  
  $interactionReply[Histórico de mensagens de **@$userTag[$get[userID]]**
   $attachment[$getMemberVar[messageLogToday;$get[userID]];WinderDB_messageLogToday_$userTag[$get[userID]].txt;true]
   $attachment[$getMemberVar[messageLogWeekly;$get[userID]];WinderDB_messageLogWeekly_$userTag[$get[userID]].txt;true]
   $attachment[$getMemberVar[messageLogMonth;$get[userID]];WinderDB_messageLogMonth_$userTag[$get[userID]].txt;true]
  
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