module.exports = {
    code: `
    $let[userID;$option[user]]
    $jsonLoad[warns;$getMemberVar[warnList;$get[userID];$guildID;{}]]
    $interactionReply[
     $addContainer[
      $addSection[
      $addTextDisplay[### Primeiro aviso: $discordTimestamp[$env[warns;1;timestamp];FullDateShortTime]]
      $addTextDisplay[Motivo: $codeBlock[$env[warns;1;reason]]]
      $addThumbnail[$userAvatar[$get[userID]]]
      ]
      $addSeparator[Large;true]
     ;$guildColor[orange]]
     ]
  `,
    data: {
  "type": 1,
  "name": "avisos",
  "description": "Veja quantas advertências um membro teve.",
  "options": [
    {
      "type": 6,
      "description": "Usuário",
      "required": true,
      "name": "user"
    }
  ],
  "default_member_permissions": "2"
},
}
