module.exports = {
    code: `
    $let[userID;$option[user]]
    $jsonLoad[warns;$getMemberVar[warnList;$get[userID];$guildID;{}]]
    $interactionReply[
     $addContainer[
      $addSection[
       $addTextDisplay[### ADVERTÊNCIAS DE $userDisplayName[$get[userID]]]
       $addTextDisplay[**Primeiro aviso: **$discordTimestamp[$env[warns;1;timestamp];FullDateShortTime]]
       $addTextDisplay[Motivo: $codeBlock[$env[warns;1;reason]]]
       $addThumbnail[$userAvatar[$get[userID]]]
      ]
      $addSeparator[Large;true]
      $if[$env[warns;2]!=;
      $addTextDisplay[**Segundo aviso: **$discordTimestamp[$env[warns;2;timestamp];FullDateShortTime]]
       $addTextDisplay[Motivo: $codeBlock[$env[warns;2;reason]]]
      ]
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
