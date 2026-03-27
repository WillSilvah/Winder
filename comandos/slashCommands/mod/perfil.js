module.exports = {
    code: `
    $let[userID;$option[user]]
    $ephemeral
    $addContainer[
     $addSection[
      $addTextDisplay[### $userDisplayName[$get[userID]]\n-# **@$userTag[$get[userID]]**]
      $if[$memberExists[$guildID;$get[userID]]==true;
     $addTextDisplay[👋 Entrou na patinhas $discordTimestamp[$memberJoinedAt[$guildID;$get[userID]];RelativeTime] em $memberJoinPosition[$guildID;$get[userID]]° lugar\n💌 Veio pelo: **$if[$getMemberVar[inviter;$get[userID]]!=;$userTag[$getMemberVar[inviter;$get[userID]]];@Fulano]**\n💬 Enviou mensagem $discordTimestamp[$getMemberVar[lastMessageTimestamp;$get[userID]];RelativeTime]\n🟢 Visto online $discordTimestamp[$getUserVar[lastOnTimestamp;$get[userID]];RelativeTime]]
    ;
     $if[$isBanned[$guildID;$get[userID]]==false;$addTextDisplay[$if[$getMemberVar[memberJoinedHere?;$get[userID];$guildID;false]==true;😄 **$userTag[$get[userID]]** já esteve aqui em $discordTimestamp[$getMemberVar[memberJoinedFirstTime;$get[userID]];ShortDateMediumTime];🧐 Não, **$userTag[$get[userID]]** não esteve aqui.]]]
      ]
     $addThumbnail[$userAvatar[$get[userID]]]
     ]
    ;$guildColor[orange]]
 
  `,
data: {
  "name": "perfil",
  "description": "Versão do perfil de um usuário mas para moderadores",
  "default_member_permissions": "2",
  "options": [
    {
      "type": 6,
      "description": "Usuário",
      "name": "user",
      "required": true
    }
  ]
},
}