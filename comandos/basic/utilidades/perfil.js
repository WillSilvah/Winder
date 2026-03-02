module.exports = {
	name: "perfil",
    aliases: ["pda", "atividade"],
    desc: "Veja informações sobre a atividade de um membro",
    category: "Utilidades",
    usage: "perfil @user/ID?",
    slash: "perfil",
    type: "messageCreate",
    code: `
$let[userID;$findUser[$message[0];true]]
  
$let[badges;$if[$getMemberVar[memberIsVerified;$get[userID]]==true;✅ Verificado | ;]$if[$getMemberVar[memberIsStaff;$get[userID]]==true;🛡️ Equipe Patinhas | ;]$if[$memberExists[$guildID;$get[userID]]==true;🐾 Peludo | ;]]


$title[📃 Perfil de @$username[$get[userID]]]
$description[
$if[$getMemberVar[birthday;$get[userID];$guildID]!=;🎂 **$getMemberVar[birthday;$get[userID];$guildID]/$year**;🎂 Utilize **/aniversario adicionar** para registrar uma data!]

**Convidado por: $if[$inviterID[$guildID;$authorID]!=;@$username[$inviterID[$guildID;$authorID]];@Fulano]**
$addField[🎮 Minigames ganhos;$getMemberVar[minigameMonthWins;$get[userID]] (Mês) | $getMemberVar[minigameTotalWins;$get[userID]] (total)]

$addField[⭐ Votos dados pelo Discords.com;$getMemberVar[votesTotal;$get[userID]] (Mês) | $getMemberVar[votesMonth;$get[userID]] (Total)]

$addField[📃 Atividade do membro;✨ $getMemberVar[pdaMonth;$get[userID]]
💬 $getMemberVar[messageMonth;$get[userID]] (Mês)
💬 $getMemberVar[messageWeekly;$get[userID]] (Semana)
💬 $getMemberVar[messageToday;$get[userID]] (Hoje)
]

$addField[Historicamente;
✨ $getMemberVar[pdaTotal;$get[userID]] (Total) | 💬 $getMemberVar[messageTotal;$get[userID]] (Total)
]

]
$footer[$replaceText[$get[badges]END; | END;;1]]
$thumbnail[$userAvatar[$get[userID]]]
$color[Random]
`
}