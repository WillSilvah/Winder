module.exports = {
  code: `
    $let[userID;$option[user]]
    $onlyIf[$getMemberVar[warnList;$get[userID]]!={};<@$authorID> O **@$userTag[$get[userID]]** não tem nenhum aviso.]
    $jsonLoad[warns;$getMemberVar[warnList;$get[userID]]]
    $jsonLoad[warnKeys;$jsonKeys[warns]]

    $addContainer[
      $addSection[
       $addTextDisplay[### Advertências de $userTag[$get[userID]]]
       $addThumbnail[$userAvatar[$get[userID]]]
      ]
      
      $arrayForEach[warnKeys;warn;
        $addSeparator[Large]

        $addTextDisplay[$trim[
          **Aviso $inlineCode[#$env[warn]]: **$discordTimestamp[$env[warns;$env[warn];timestamp];FullDateShortTime]
          Aplicador: **@$userTag[$env[warns;$env[warn];staffID]]**
          Motivo: $codeBlock[$env[warns;$env[warn];reason]]
        ]]
      ]
    ;$guildColor[orange]]
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
