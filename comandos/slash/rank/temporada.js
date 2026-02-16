module.exports = {
  code: `
$jsonLoad[session;$readFile[Recursos/session.json]]

$author[$env[session;name] | $if[$option[pagina]!=;$option[pagina];1];https://abs.twimg.com/emoji/v2/72x72/1f4ac.png]
$title[Top fofoqueiros ativos | Pontos d]
$description[
$memberLeaderboard[pdaMonth;$guildID;desc;10;$if[$option[pagina]!=;$option[pagina];1];;;;$getMemberLeaderboardValue[pdaMonth;desc;$env[;id];$guildID]° **$username[$env[;id]]** -> ✨️$getMemberVar[pdaMonth;$env[;id]]]

$memberLeaderboard[messageMonth;$guildID;desc;10;$if[$option[pagina]!=;$option[pagina];1];;;;$getMemberLeaderboardValue[messageMonth;desc;$env[;id];$guildID]° **$username[$env[;id]]** -> 💬$getMemberVar[messageMonth;$env[;id]]]
]
$footer[footer]
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
