module.exports = {
  code: `
$jsonLoad[session;$readFile[Recursos/session.json]]

$author[$env[session;name];https://abs.twimg.com/emoji/v2/72x72/1f4ac.png]
$title[Top fofoqueiros ativos | $if[$option[pagina]!=;$option[pagina];1]° Página]
$description[
$memberLeaderboard[messageMonth;$guildID;desc;11;$if[$option[pagina]!=;$option[pagina];1];\n;data;pos;$return[$env[pos]° **@$username[$env[data;id]]**
> 💬 $separateNumber[$env[data;value];.] ✨️ $separateNumber[$getMemberVar[pdaMonth;$env[data;id];$get[guildID];0];.] ⬆️ $getMemberVar[votesMonth;$env[data;id];$guildID;0]]]
]
$footer[Você: 💬 $separateNumber[$getMemberVar[messageMonth;$authorID];.] ✨️ $separateNumber[$getMemberVar[pdaMonth;$authorID;$guildID;0];.] | Servidor: 💬 $separateNumber[$getGuildVar[guildMonthMessages;$guildID;0];.] | 👤 $getMemberLeaderboardLength[messageMonth]]
$color[Green]

  `,
data: {
  "type": 1,
  "description": "Veja o ranking dos conversadores atuais!",
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
    "en-GB": "current",
    "en-US": "current",
    "es-ES": "actuales",
    "es-419": "actuales",
    "pt-BR": "atuais"
  },
  "name": "atuais",
  "description_localizations": {
    "en-GB": "See the ranking of current conversationalists!",
    "en-US": "See the ranking of current conversationalists!",
    "es-ES": "¡Vea el ranking de conversadores actuales!",
    "es-419": "¡Vea el ranking de conversadores actuales!",
    "pt-BR": "Veja o ranking dos conversadores atuais!"
  }
},
};
