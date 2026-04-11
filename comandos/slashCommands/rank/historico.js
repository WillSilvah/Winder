module.exports = {
  code: `
$jsonLoad[session;$readFile[Recursos/session.json]]

$author[$env[session;name];https://abs.twimg.com/emoji/v2/72x72/1f4ac.png]
$title[Top fofoqueiros históricos | $if[$option[pagina]!=;$option[pagina];1]° Página]
$description[
$memberLeaderboard[messageTotal;$guildID;desc;11;$if[$option[pagina]!=;$option[pagina];1];\n;data;pos;$return[$env[pos]° **$username[$env[data;id]]**
> 💬 $separateNumber[$env[data;value];.] ✨️ $separateNumber[$getMemberVar[pdaTotal;$env[data;id];$get[guildID];0].] ⬆️ $getMemberVar[votesTotal;$env[data;id];$guildID;0]]]
]
$footer[Você: 💬 $separateNumber[$getMemberVar[messageTotal;$authorID];.] ✨️ $separateNumber[$getMemberVar[pdaTotal;$authorID;$guildID;0];.] | Servidor: 💬 $separateNumber[$getGuildVar[guildTotalMessages;$guildID;0];.] | 👤 $getMemberLeaderboardLength[messageTotal]]
$color[Green]

  `,
data: {
  "type": 1,
  "description": "Veja o ranking de conversadores históricos",
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
        "es-ES": "página",
        "es-419": "página",
        "pt-BR": "pagina"
      }
    }
  ],
  "name_localizations": {
    "en-GB": "previous-talkers",
    "en-US": "previous-talkers",
    "es-ES": "conversadores-anteriores",
    "es-419": "conversadores-anteriores",
    "pt-BR": "conversadores-anteriores"
  },
  "name": "conversadores-anteriores",
  "description_localizations": {
    "es-ES": "Ver el ranking de conversadores históricos",
    "es-419": "Ver el ranking de conversadores históricos"
  }
},
};
