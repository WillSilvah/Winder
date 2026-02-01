module.exports = [{
name: "cmdinfo",
aliases: ["comandoinfo"],
desc: "Veja mais informações sobre um comando",
category: "Informação",
usage: "cmdinfo <nome do comando>",
code: `$reply
$title[1;Como usar o comando "$commandInfo[$message;name]"]
$description[1;
**$commandInfo[$message;category]** $commandInfo[$message;desc]

- **⁉️ Como usa?**
$ifAwaited[$commandInfo[$message;usage]!=;**$getGuildVar[prefixo]$commandInfo[$message;usage]**]

- **⭐ Alternativas**
$ifAwaited[$commandInfo[$message;aliases]!=;**$replaceText[$commandInfo[$message;aliases];,;/]**;**Não tem alternativas**]
]
$color[1;Blue]
$onlyIf[$commandInfo[$message;usage]!=;<@$authorID> Esse comando não existe ou não é usável]
$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
`
},{
name: "cmdinfo-await",
type: "awaited",
code: `
$reply
$title[1;Como usar o comando "$commandInfo[$get[cmdName];name]"]
$description[1;
**$commandInfo[$get[cmdName];category]** $commandInfo[$get[cmdName];desc]

- **⁉️ Como usa?**
$ifAwaited[$commandInfo[$get[cmdName];usage]!=;**$getGuildVar[prefixo]$commandInfo[$get[cmdName];usage]**]

- **⭐ Alternativas**
$ifAwaited[$commandInfo[$get[cmdName];aliases]!=;**$replaceText[$commandInfo[$get[cmdName];aliases];,;/]**;**Não tem alternativas**]
]
$color[1;Blue]
`
}]