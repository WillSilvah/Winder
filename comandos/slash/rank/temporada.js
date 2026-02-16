module.exports = {
  code: `
$jsonLoad[session;$readFile[Recursos/session.json]]

$author[$env[session;name];https://abs.twimg.com/emoji/v2/72x72/1f4ac.png]
$title[Top fofoqueiros ativos | $if[$option[pagina]!=;$option[pagina];1]° Página]
$description[
$memberLeaderboard[pdaMonth;$guildID;desc;10;1;\n;data;pos;
  $return[$env[pos]° $username[$env[data;id]] -> ✨️$env[data;value]]
]

$memberLeaderboard[messageMonth;$guildID;desc;10;1;\n;data;pos;
  $return[$env[pos]° $username[$env[data;id]] -> 💬$env[data;value]]
]
]
$footer[Você: 💬$getMemberVar[messageMonth;$authorID] ✨️$getMemberVar[pdaMonth;$authorID] | Servidor: 💬$getGuildVar[guildMonthMessages;$guildID]]
$color[Blue]

  `,
data: {
  "type": 1,
  "description": "Veja o ranking de membros em uma categoria",
  "options": [
    {
      "type": 4,
      "name": "pagina",
      "description": "Insira um número",
      "min_value": 1,
      "description_localizations": {
        "en-GB": "Enter a number",
        "en-US": "Enter a number",
        "pt-BR": "Insira um número"
      },
      "name_localizations": {
        "en-GB": "page",
        "en-US": "page",
        "pt-BR": "pagina"
      }
    }
  ],
  "name": "temporada",
  "name_localizations": {
    "en-GB": "season",
    "en-US": "season",
    "pt-BR": "temporada"
  },
  "description_localizations": {
    "en-GB": "See the ranking of members in a category",
    "en-US": "See the ranking of members in a category",
    "pt-BR": "Veja o ranking de membros em uma categoria"
  }
},
};
