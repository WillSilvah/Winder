module.exports = [{
    name: "media",
    params: [
    {
      name: 'variable',
      description: "variavel",
      required: true
    },
    {
      name: 'quantity',
      description: "Quantidade de usuarios",
      required: true
    }
   ],
   code: `
$let[soma;$math[$memberLeaderboard[$env[variable];$guildID;desc;$env[quantity];1;+;data;pos;$return[$env[data;value]]
]]]

$return[$truncate[$math[$get[soma]/11]]]
`
}]