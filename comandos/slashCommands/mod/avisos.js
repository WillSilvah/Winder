module.exports = {
    code: `
    $let[userID;$option[user]]
    $jsonLoad[warns;$getMemberVar[warnList;$get[userID];$guildID;{}]]
    $interactionReply[
     $addContainer[
      $addSection[
       $addTextDisplay[### ADVERTÊNCIAS DE $userDisplayName[$get[userID]]]
       $addTextDisplay[**Primeiro aviso: **$discordTimestamp[$env[warns;1;timestamp];FullDateShortTime]]
       $addTextDisplay[Aplicador: **$userTag[$env[warns;1;staffID]]**
       $addTextDisplay[Motivo: $codeBlock[$env[warns;1;reason]]]
       $addThumbnail[$userAvatar[$get[userID]]]
      ]
      $addSeparator[Large;true]
      $if[$env[warns;2]!=;
      $addTextDisplay[**Segundo aviso: **$discordTimestamp[$env[warns;2;timestamp];FullDateShortTime]]
      $addTextDisplay[Aplicador: **$userTag[$env[warns;2;staffID]]**]
      $addTextDisplay[Motivo: $codeBlock[$env[warns;2;reason]]]
      $addSeparator[Large;true]
      ]
      $if[$env[warns;3]!=;
      $addTextDisplay[**Terceiro aviso: **$discordTimestamp[$env[warns;3;timestamp];FullDateShortTime]]
      $addTextDisplay[Aplicador: **$userTag[$env[warns;3;staffID]]**]
      $addTextDisplay[Motivo: $codeBlock[$env[warns;3;reason]]]
      $addSeparator[Large;true]
      ]
      $if[$env[warns;4]!=;
      $addTextDisplay[**Quarto aviso: **$discordTimestamp[$env[warns;4;timestamp];FullDateShortTime]]
      $addTextDisplay[Aplicador: **$userTag[$env[warns;4;staffID]]**]
      $addTextDisplay[Motivo: $codeBlock[$env[warns;4;reason]]]
      $addSeparator[Large;true]
      ]
      $if[$env[warns;5]!=;
      $addTextDisplay[**Quinto aviso: **$discordTimestamp[$env[warns;5;timestamp];FullDateShortTime]]
      $addTextDisplay[Aplicador: **$userTag[$env[warns;5;staffID]]**]
      $addTextDisplay[Motivo: $codeBlock[$env[warns;5;reason]]]
      $addSeparator[Large;true]
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
