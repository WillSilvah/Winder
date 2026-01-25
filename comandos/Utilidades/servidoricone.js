module.exports = [{
name: "servidoricone",
aliases: ["svicon", "servericon", "icone"],
desc: "Veja o ícone do servidor!",
category: "Utilidades",
usage: "servidoricone",
code: `
$attachment[$guildIcon[$guildID;4096;true;];winder-$guildName_icon.$if[$checkContains[$guildIcon[$guildID];gif]==true;gif;png]]

$reply
`
}]