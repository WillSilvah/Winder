module.exports = {
    code: `
    $onlyIf[$getMemberVar[jobStatus;$authorID;$guildID;false]==true;Você não tem um emprego, use o comando /furrasticos empregos para ter um emprego]
    
  `,
data: {
  "type": 1,
  "description": "Trabalhe em algum emprego e ganhe Paws!",
  "name": "trabalhar",
  "name_localizations": {
    "en-GB": "work",
    "en-US": "work",
    "pt-BR": "trabalhar"
  }
},
}
